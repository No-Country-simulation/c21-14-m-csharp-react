import { PrismaService } from '@/prisma/prisma.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { CreatePropertyDto } from './dto/createProperty.dto'
import { UpdatePropertyDto } from './dto/updateProperty.dto'
import { UserActiveInterface } from '@/common/interfaces/user-active.interface'
import { AdminService } from '@/admin/admin.service'

@Injectable()
export class PropertiesService {
  constructor(
    private prisma: PrismaService,
    private adminService: AdminService,
  ) {}

  findAll(name?: string, country?: string) {
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
      },
    })
  }

  propertyById(id: number) {
    return this.prisma.property.findUnique({ where: { id } })
  }

  propertyByName(name: string) {
    return this.prisma.property.findUnique({ where: { name } })
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
