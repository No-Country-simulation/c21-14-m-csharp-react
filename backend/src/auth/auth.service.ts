import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { UsersService } from '@/users/users.service'
import { AdminService } from '@/admin/admin.service' // Nuevo servicio para Admin
import { RegisterDto } from './dto/register.dto'
import { JwtService } from '@nestjs/jwt'
import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto'
import { UpdateUserDto } from '@/users/dto/update-user.dto'
import { jwtConstants } from './constants/jwt.constant'
import { CreateUserDto } from '@/users/dto/create-user.dto'
import { UserActiveInterface } from '@/common/interfaces/user-active.interface'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly adminService: AdminService, // Nuevo servicio para Admin
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { name, email, password, phone, documentId, country } = createUserDto
    const user = await this.usersService.findOneByEmail(email)
    if (user) {
      throw new BadRequestException('User already exists')
    }

    await this.usersService.create({
      name,
      email,
      phone,
      country,
      documentId,
      password: await bcryptjs.hash(password, 10),
    })
    return {
      name,
      email,
    }
  }

  async loginUser({ email, password }: LoginDto) {
    const user = await this.usersService.findByEmailWithPassword(email)
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload = { email: user.email, role: 'user' }
    const token = await this.jwtService.signAsync(payload)

    return {
      token,
      email: user.email,
    }
  }

  async loginAdmin({ email, password }: LoginDto) {
    const admin = await this.adminService.findByEmailWithPassword(email)
    if (!admin) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const isPasswordValid = await bcryptjs.compare(password, admin.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload = { email: admin.email, role: 'admin' }
    const token = await this.jwtService.signAsync(payload)

    return {
      token,
      email: admin.email,
    }
  }

  async getProfile(user: UserActiveInterface) {
    const userFind = await this.usersService.findOneByEmail(user.email)
    if (!userFind) {
      return new NotFoundException('User not found')
    }
    const { id, createdAt, updatedAt, password, ...userProfile } = userFind

    return userProfile
  }

  async updateProfile(user: UserActiveInterface, updateUser: UpdateUserDto) {
    if (Object.keys(updateUser).length === 0) {
      throw new BadRequestException('No data provided to update the user')
    }
    const userFind = await this.usersService.findOneByEmail(user.email)
    if (!userFind) {
      return new NotFoundException('User not found')
    }
    const updatedUser = await this.usersService.update(userFind.id, updateUser)

    const { id, createdAt, updatedAt, password, ...userProfile } = updatedUser

    return userProfile
  }
}
