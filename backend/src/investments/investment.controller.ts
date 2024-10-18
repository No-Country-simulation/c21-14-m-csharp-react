import { Auth } from '@/auth/decorators/auth.decorator'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { InvestmentService } from './investment.service'
import { CreateInvestmentDto } from './dto/createInvestment.dto'
import { UpdateInvestmentDto } from './dto/updateInvestment.dto'

@Controller('investment')
export class InvestmentController {
  constructor(private readonly investmentServices: InvestmentService) {}

  @Auth('admin')
  @Get()
  allInvestments() {
    return this.investmentServices.allInvestments()
  }

  @Get(':id')
  getInvestment(@Param('id', ParseIntPipe) id: number) {
    return this.investmentServices.investmentById(id)
  }

  @Post()
  createInvestment(@Body() createInvestmentDto: CreateInvestmentDto) {
    return this.investmentServices.createInvestment(createInvestmentDto)
  }

  @Patch(':id')
  updateInvestment(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInvestmentDto: UpdateInvestmentDto,
  ) {
    return this.investmentServices.updateInvestment(id, updateInvestmentDto)
  }

  @Delete(':id')
  deleteInvestment(@Param('id', ParseIntPipe) id: number) {
    return this.investmentServices.deleteInvestment(id)
  }
}
