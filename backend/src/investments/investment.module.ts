import { Module } from '@nestjs/common'
import { InvestmentController } from './investment.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { InvestmentService } from './investment.service'
import { UsersModule } from '@/users/users.module'
import { PropertiesModule } from '@/properties/properties.module'

@Module({
  imports: [PrismaModule, UsersModule, PropertiesModule],
  controllers: [InvestmentController],
  providers: [InvestmentService],
})
export class InvestmentModule {}
