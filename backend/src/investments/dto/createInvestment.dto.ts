import { IsInt, IsDateString } from 'class-validator'

export class CreateInvestmentDto {
  @IsInt()
  propertyId: number

  @IsInt()
  userId: number

  @IsDateString()
  date: string

  @IsInt()
  amount: number
}
