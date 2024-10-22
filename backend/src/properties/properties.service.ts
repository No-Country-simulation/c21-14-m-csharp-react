import { PrismaService } from '@/prisma/prisma.service'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreatePropertyDto } from './dto/createProperty.dto'
import { UpdatePropertyDto } from './dto/updateProperty.dto'
import { UserActiveInterface } from '@/common/interfaces/user-active.interface'
import { AdminService } from '@/admin/admin.service'
import { Type } from '@prisma/client'
import { UsersService } from '@/users/users.service'

@Injectable()
export class PropertiesService {
  constructor(
    private prisma: PrismaService,
    private adminService: AdminService,
    private userService: UsersService,
  ) {}

  findAll(name?: string, country?: string, type?: string, status?: string, minAmount?: number) {
    const validTypes = Object.values(Type)
    if (type && !validTypes.includes(Type[type])) {
      throw new BadRequestException(
        `Invalid property type: ${type}. Must be: residential, commercial or industrial`,
      )
    }

    return this.prisma.property.findMany({
      where: {
        ...(name && {
          name: {
            contains: name,
            mode: 'insensitive',
          },
        }),
        ...(country && {
          country: {
            contains: country,
            mode: 'insensitive',
          },
        }),
        ...(type && {
          type: {
            equals: Type[type],
          },
        }),
        ...(status && {
          status: {
            contains: status,
            mode: 'insensitive',
          },
        }),
        ...(minAmount && {
          minAmount: {
            gte: minAmount,
          },
        }),
      },
    })
  }

  propertyById(id: number) {
    return this.prisma.property.findUnique({ where: { id } })
  }

  propertyByName(name: string) {
    return this.prisma.property.findUnique({ where: { name } })
  }

  async getFavorite(email: string) {
    const { id } = await this.userService.findOneByEmail(email)
    return this.prisma.favorite.findMany({ where: { userId: id }, include: { property: true } })
  }

  async addFavorite(email: string, propertyId: number) {
    const { id } = await this.userService.findOneByEmail(email)
    return this.prisma.favorite.create({ data: { userId: id, propertyId } })
  }

  async deleteFavorite(email: string, propertyId: number) {
    const { id } = await this.userService.findOneByEmail(email)
    const favorite = await this.prisma.favorite.findMany({
      where: { userId: { equals: id }, propertyId: { equals: propertyId } },
    })
    if (favorite.length === 0) {
      throw new NotFoundException('favorite not found')
    }

    return this.prisma.favorite.delete({ where: { id: favorite[0].id } })
  }

  async createProperty(user: UserActiveInterface, createPropertyDto: CreatePropertyDto) {
    const adminFind = await this.adminService.findOneByEmail(user.email)
    const nameExist = await this.propertyByName(createPropertyDto.name)

    if (nameExist) {
      throw new BadRequestException('The name of property already exist')
    }
    return this.prisma.property.create({
      data: {
        ...createPropertyDto,
        createdBy: {
          connect: { id: adminFind.id },
        },
      },
    })
  }

  async updateProperty(
    id: number,
    user: UserActiveInterface,
    updatePropertyDto: UpdatePropertyDto,
  ) {
    const adminFind = await this.adminService.findOneByEmail(user.email)
    return this.prisma.property.update({
      where: { id },
      data: {
        ...updatePropertyDto,
        createdBy: {
          connect: { id: adminFind.id },
        },
      },
    })
  }

  deleteProperty(id: number) {
    return this.prisma.property.delete({ where: { id } })
  }
}
