import { Module } from '@nestjs/common'
import { InvestmentController } from './investment.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { InvestmentService } from './investment.service'

@Module({
  imports: [PrismaModule],
  controllers: [InvestmentController],
  providers: [InvestmentService],
})
export class InvestmentModule {}
