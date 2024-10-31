import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto })
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  findByEmailWithPassword(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    })
  }

  async findAll(searchTerm?: string, totalInv?: number) {
    // Primera consulta: obtén la información básica de los usuarios
    const users = await this.prisma.user.findMany({
      where: searchTerm
        ? {
            OR: [
              { name: { contains: searchTerm, mode: 'insensitive' } },
              { phone: { contains: searchTerm, mode: 'insensitive' } },
              { email: { contains: searchTerm, mode: 'insensitive' } },
            ],
          }
        : {},
    })

    // Segunda consulta: obtén la suma de las inversiones de cada usuario
    const investmentsSum = await this.prisma.investment.groupBy({
      by: ['userId'],
      _sum: {
        amount: true,
      },
    })

    // Combina la información de los usuarios con la suma de sus inversiones
    const usersWithInvestmentSum = users.map((user) => {
      const userInvestment = investmentsSum.find((investment) => investment.userId === user.id)
      return {
        ...user,
        totalInvestment: userInvestment?._sum.amount || 0, // Agrega el total de inversión o 0 si no tiene inversiones
      }
    })

    // Filtra los usuarios por el total de inversión si se proporciona `totalInv`
    const filteredUsers = totalInv
      ? usersWithInvestmentSum.filter((user) => user.totalInvestment >= totalInv)
      : usersWithInvestmentSum

    return filteredUsers
  }

  async findDuplicate({ email, phone }: { email: string; phone: string }) {
    const userEmail = await this.prisma.user.findUnique({ where: { email } })
    const userPhone = await this.prisma.user.findUnique({ where: { phone } })

    if (userEmail) {
      throw new BadRequestException('Email already exist')
    }
    if (userPhone) {
      throw new BadRequestException('Phone already exist')
    }
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
      },
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}
