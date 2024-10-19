import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common'
import { PropertiesService } from './properties.service'
import { CreatePropertyDto } from './dto/createProperty.dto'
import { UpdatePropertyDto } from './dto/updateProperty.dto'
import { Auth } from '@/auth/decorators/auth.decorator'
import { UserActiveInterface } from '@/common/interfaces/user-active.interface'
import { ActiveUser } from '@/common/decorators/active-user.decorator'

@Auth('user')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertyService: PropertiesService) {}

  @Get()
  async getAllProperties(@Query('name') name: string, @Query('country') country: string) {
    return this.propertyService.findAll(name, country)
  }

  @Get(':id')
  async getPropertyById(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.propertyById(id)
  }

  @Auth('admin')
  @Post()
  async createProperty(
    @ActiveUser() user: UserActiveInterface,
    @Body() createPropertyDto: CreatePropertyDto,
  ) {
    return this.propertyService.createProperty(user, createPropertyDto)
  }

  @Auth('admin')
  @Put(':id')
  async updateProperty(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() user: UserActiveInterface,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertyService.updateProperty(id, user, updatePropertyDto)
  }

  @Auth('admin')
  @Delete(':id')
  async deleteProperty(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.deleteProperty(id)
  }
}
