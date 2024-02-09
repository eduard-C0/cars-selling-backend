import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './car/car.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, CarModule, PrismaModule, ConfigModule.forRoot({isGlobal: true})],
})
export class AppModule {}
