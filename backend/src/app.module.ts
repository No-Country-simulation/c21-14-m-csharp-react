import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { InvestmentModule } from './investments/investment.module'
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule globally available
    }),
    UsersModule,
    AuthModule,
    PrismaModule,
    InvestmentModule,
    PropertiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
