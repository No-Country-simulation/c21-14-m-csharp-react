import { IsInt, IsString, IsEnum, IsNotEmpty, IsUrl, IsOptional, IsPositive } from 'class-validator'
import { Type } from '@prisma/client'

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEnum(Type)
  @IsNotEmpty()
  type: Type

  @IsString()
  @IsNotEmpty()
  country: string

  @IsString()
  @IsNotEmpty()
  city: string

  @IsString()
  @IsNotEmpty()
  location: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsInt()
  minAmount: number

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  area: number

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  time: number

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  profit: number

  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  photosUrl: string
}
