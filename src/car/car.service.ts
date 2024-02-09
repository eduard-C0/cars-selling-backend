import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarService {
    constructor(private prisma: PrismaService) {}
    
    getCars(userId: number){
        return this.prisma.car.findMany({
            where: {
              userId,
            },
          });
    }

    getCarById(userId: number, carId: number){
        return this.prisma.car.findFirst({
            where: {
              id: carId,
              userId,
            },
          });
    }
}
