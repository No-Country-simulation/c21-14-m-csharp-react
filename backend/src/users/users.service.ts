import { Injectable } from '@nestjs/common'
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

  findAll(searchTerm?: string) {
    return this.prisma.user.findMany({
      where: searchTerm
        ? {
            OR: [
              { name: { contains: searchTerm, mode: 'insensitive' } },
              { phone: { contains: searchTerm, mode: 'insensitive' } },
              { email: { contains: searchTerm, mode: 'insensitive' } },
            ],
          }
        : {},
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
      },
    })
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
