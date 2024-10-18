import { IsEmail, IsNotEmpty, IsString, IsOptional, IsPhoneNumber, Length } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsPhoneNumber(null) // Puedes especificar la región si es necesario, o dejar null para cualquier región.
  phone: string

  @IsNotEmpty()
  @IsString()
  @Length(8) // Asegura una longitud mínima de la contraseña.
  password: string

  @IsNotEmpty()
  @IsString()
  country: string

  @IsNotEmpty()
  @IsString()
  documentId: string

  @IsOptional()
  @IsString()
  profileUrl?: string
}
