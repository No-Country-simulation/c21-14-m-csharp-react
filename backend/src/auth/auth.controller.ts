import { Body, Controller, Get, Headers, Patch, Post, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { ActiveUser } from '@/common/decorators/active-user.decorator'
import { UserActiveInterface } from '@/common/interfaces/user-active.interface'
import { AuthService } from './auth.service'
import { Auth } from './decorators/auth.decorator'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { UpdateUserDto } from '@/users/dto/update-user.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto)
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.loginUser(loginDto)
  }

  @Post('admin/login')
  loginAdmin(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.loginAdmin(loginDto)
  }

  @Get('profile')
  @Auth('user')
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.authService.getProfile(user)
  }

  @Patch('profile')
  @Auth('user')
  updateProfile(@ActiveUser() user: UserActiveInterface, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateProfile(user, updateUserDto)
  }
}
