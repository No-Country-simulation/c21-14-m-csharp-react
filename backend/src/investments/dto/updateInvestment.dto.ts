import { PartialType } from '@nestjs/mapped-types'
import { CreateInvestmentDto } from './createInvestment.dto'

export class UpdateInvestmentDto extends PartialType(CreateInvestmentDto) {}
