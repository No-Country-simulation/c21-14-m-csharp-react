import { Auth } from '@/auth/decorators/auth.decorator'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { InvestmentService } from './investment.service'
import { CreateInvestmentDto } from './dto/createInvestment.dto'
import { UpdateInvestmentDto } from './dto/updateInvestment.dto'
import { ActiveUser } from '@/common/decorators/active-user.decorator'
import { UserActiveInterface } from '@/common/interfaces/user-active.interface'

@Auth('user')
@Controller('investments')
export class InvestmentController {
  constructor(private readonly investmentServices: InvestmentService) {}

  @Auth('admin')
  @Get()
  allInvestments() {
    return this.investmentServices.allInvestments()
  }

  @Auth('admin')
  @Get('recently')
  getRecently() {
    return this.investmentServices.getRecently()
  }

  @Get('stats')
  async getUserInvestmentStats() {
    return this.investmentServices.getUserInvestmentStats()
  }

  @Get('me')
  getMyInvestments(@ActiveUser() user: UserActiveInterface) {
    return this.investmentServices.findInvestmentsByEmail(user.email)
  }

  @Get(':id')
  getInvestment(@Param('id', ParseIntPipe) id: number) {
    return this.investmentServices.investmentById(id)
  }

  @Get('property/:id')
  getInvestmentsOfProperty(@Param('id', ParseIntPipe) id: number) {
    return this.investmentServices.investmentsOfProperty(id)
  }

  @Post(':id')
  createInvestment(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() user: UserActiveInterface,
    @Body() createInvestmentDto: CreateInvestmentDto,
  ) {
    return this.investmentServices.createInvestment(id, user, createInvestmentDto)
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
