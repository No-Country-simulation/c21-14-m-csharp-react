import { PrismaService } from '@/prisma/prisma.service'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateInvestmentDto } from './dto/createInvestment.dto'
import { UpdateInvestmentDto } from './dto/updateInvestment.dto'
import { UserActiveInterface } from '@/common/interfaces/user-active.interface'
import { UsersService } from '@/users/users.service'
import { PropertiesService } from '@/properties/properties.service'

@Injectable()
export class InvestmentService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private propertiesService: PropertiesService,
  ) {}

  allInvestments(userId?: number) {
    return this.prisma.investment.findMany({
      where: userId ? { userId } : {},
    })
  }
  async findInvestmentsByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true },
    })

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`)
    }

    return this.prisma.investment.findMany({
      where: { userId: user.id },
    })
  }

  investmentById(id: number) {
    return this.prisma.investment.findUnique({ where: { id } })
  }

  async investmentsOfProperty(id: number) {
    const propertyFound = await this.propertiesService.propertyById(id)
    if (!propertyFound) {
      throw new NotFoundException('The ID of property not exist')
    }
    const investments = await this.prisma.investment.findMany({
      where: { propertyId: id },
      select: { amount: true },
    })

    return investments.reduce((sum, investment) => sum + investment.amount, 0)
  }

  async createInvestment(
    id: number,
    user: UserActiveInterface,
    createInvestmentDto: CreateInvestmentDto,
  ) {
    const userFound = await this.usersService.findOneByEmail(user.email)
    const propertyFound = await this.propertiesService.propertyById(id)

    if (!propertyFound) {
      throw new NotFoundException(`Property with ID ${id} does not exist`)
    }

    if (propertyFound.minAmount > createInvestmentDto.amount) {
      throw new BadRequestException('The amount is less than the minimum for property')
    }
    return this.prisma.investment.create({
      data: { ...createInvestmentDto, userId: userFound.id, propertyId: id },
    })
  }

  updateInvestment(id: number, updateInvestmentDto: UpdateInvestmentDto) {
    if (Object.keys(updateInvestmentDto).length === 0) {
      throw new BadRequestException('No data provided to update the investment')
    }

    return this.prisma.investment.update({
      where: { id },
      data: updateInvestmentDto,
    })
  }

  async deleteInvestment(id: number) {
    return this.prisma.investment.delete({ where: { id } })
  }
}
