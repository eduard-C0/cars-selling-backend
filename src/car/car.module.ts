import { Module } from '@nestjs/common';
import { CarService} from './car.service';
import { CarController } from './car.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [CarService],
  controllers: [CarController],
  imports:[ClientsModule.register([
    {
      name: 'CAR_KAFKA_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'car',
          brokers: ['0.0.0.0:9093'],
        },
        consumer: {
          groupId: 'car-consumer'
        }
      }
    },
  ]),
  ClientsModule.register([
    {
      name: 'CAR_RABBIT_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://0.0.0.0:5672'],
        queue: "cars_queue",
        queueOptions: {
          durable: false
        },
      },
    },
  ]),
  ],
})
export class CarModule {}
