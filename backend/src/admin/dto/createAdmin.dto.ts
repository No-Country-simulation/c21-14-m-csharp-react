import { IsEmail, IsNotEmpty, IsString, IsOptional, IsPhoneNumber, Length } from 'class-validator'

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  username: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string

  @IsNotEmpty()
  @IsString()
  @Length(8)
  password: string
}
