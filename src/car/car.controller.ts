import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CarService } from './car.service';
import { GetUser } from 'src/auth/decorator';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { ClientProxy } from '@nestjs/microservices';
import { CarDto } from './car.dto';

@UseGuards(JwtGuard)
@Controller('cars')
export class CarController {
    constructor(private carService: CarService, 
        @Inject('CAR_KAFKA_SERVICE') private kafkaClient: ClientProxy,
        @Inject('CAR_RABBIT_SERVICE') private rabbitClient: ClientProxy){
            this.rabbitClient.connect()
        }

    @Get()
    getCars(@GetUser("id") userId: number){
        return this.carService.getCars(userId);

    }

    @Get(':id')
    getCarById(@GetUser('id') userId: number,@Param('id', ParseIntPipe) carId: number){
        return this.carService.getCarById(userId, carId);
    }

    @Post()
    async saveCar(@GetUser('id') userId: number, @Body() dto: CarDto){
        console.log(dto)
        const res = await this.rabbitClient.send("save_car", JSON.stringify(dto))

       return res
    }

    @Post('/:id/sell')
    sellCar(@Param('id', ParseIntPipe) carId: number){
        this.kafkaClient.emit<number>("sell_car",carId);
        return {
            "message": "Success",
            "code": 200
        }
    }
}
