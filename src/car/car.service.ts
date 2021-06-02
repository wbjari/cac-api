import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/car.schema';

@Injectable()
export class CarService {
    constructor(@InjectModel(Car.name) private readonly carModel: Model<CarDocument>) { }

    async create(data: Car) {

    }

    async getAll() {

    }

    async get(id: string) {

    }

    async update(id: string, changes: Partial<Car>) {

    }

    async remove(id: string) {

    }
}
