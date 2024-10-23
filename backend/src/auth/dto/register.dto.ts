import { Transform } from 'class-transformer'
import { IsEmail, IsInt, IsString, MinLength } from 'class-validator'

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  name: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(5)
  phone: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string

  @IsString()
  country: string

  @IsString()
  documentId: string
}
