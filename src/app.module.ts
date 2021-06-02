import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { CarController } from './car/car.controller';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [CarController, CustomerController],
  providers: [],
})
export class AppModule {}
