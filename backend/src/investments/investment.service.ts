import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateInvestmentDto } from './dto/createInvestment.dto'
import { UpdateInvestmentDto } from './dto/updateInvestment.dto'

@Injectable()
export class InvestmentService {
  constructor(private prisma: PrismaService) {}

  allInvestments() {
    return this.prisma.investment.findMany()
  }

  investmentById(id: number) {
    return this.prisma.investment.findUnique({ where: { id } })
  }

  createInvestment(createInvestmentDto: CreateInvestmentDto) {
    return this.prisma.investment.create({ data: createInvestmentDto })
  }

  updateInvestment(id: number, updateInvestmentDto: UpdateInvestmentDto) {
    return this.prisma.investment.update({
      where: { id },
      data: updateInvestmentDto,
    })
  }

  deleteInvestment(id: number) {
    return this.prisma.investment.delete({ where: { id } })
  }
}
