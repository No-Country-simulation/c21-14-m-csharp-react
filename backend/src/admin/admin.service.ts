import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import * as bcryptjs from 'bcryptjs'
import { UpdateAdminDto } from './dto/updateAdmin.dto'
import { CreateAdminDto } from './dto/createAdmin.dto'

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAdminDto: CreateAdminDto) {
    const { password, ...adminData } = createAdminDto
    const hashedPassword = await bcryptjs.hash(password, 10)

    return await this.prisma.admin.create({
      data: {
        ...adminData,
        password: hashedPassword,
      },
    })
  }

  // Buscar administrador por email
  async findOneByEmail(email: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { email },
    })
    if (!admin) {
      throw new NotFoundException('Admin not found')
    }
    return admin
  }

  // Buscar administrador por email (incluye password para validación)
  async findByEmailWithPassword(email: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    })
    if (!admin) {
      throw new NotFoundException('Admin not found')
    }
    return admin
  }

  // Actualizar un administrador
  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    })
  }
}
