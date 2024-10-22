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

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertyService: PropertiesService) {}

  @Get()
  async getAllProperties(
    @Query('name') name: string,
    @Query('country') country: string,
    @Query('type') type: string,
    @Query('status') status: string,
    @Query('minamount') minAmount: number,
  ) {
    return this.propertyService.findAll(name, country, type, status, minAmount)
  }

  @Auth('user')
  @Get('favorites')
  async getFavorite(@ActiveUser() user: UserActiveInterface) {
    return this.propertyService.getFavorite(user.email)
  }

  @Auth('user')
  @Post('favorites/:id')
  async addFavorite(
    @ActiveUser() user: UserActiveInterface,
    @Param('id') @Param('id', ParseIntPipe) propertyId: number,
  ) {
    return this.propertyService.addFavorite(user.email, propertyId)
  }

  @Auth('user')
  @Delete('favorites/:id')
  async deleteFavorite(
    @ActiveUser() user: UserActiveInterface,
    @Param('id') @Param('id', ParseIntPipe) propertyId: number,
  ) {
    return this.propertyService.deleteFavorite(user.email, propertyId)
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
