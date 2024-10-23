import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateAdminDto } from './dto/createAdmin.dto'
import { AdminService } from './admin.service'

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto)
  }
}
