import { IsInt, IsDateString, IsOptional } from 'class-validator'

export class CreateInvestmentDto {
  @IsDateString()
  @IsOptional()
  date?: string

  @IsInt()
  amount: number
}
