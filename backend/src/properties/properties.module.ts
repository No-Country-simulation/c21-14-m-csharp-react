import { Module } from '@nestjs/common'
import { PropertiesController } from './properties.controller'
import { PropertiesService } from './properties.service'
import { PrismaModule } from '@/prisma/prisma.module'
import { AdminModule } from '@/admin/admin.module'
import { UsersModule } from '@/users/users.module'

@Module({
  imports: [PrismaModule, AdminModule, UsersModule],
  controllers: [PropertiesController],
  providers: [PropertiesService],
  exports: [PropertiesService],
})
export class PropertiesModule {}
