import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/car.schema';

@Injectable()
export class CarService {
    constructor(@InjectModel(Car.name) private readonly carModel: Model<CarDocument>) { }

    async create(data: Car) {
        return this.carModel.create(data);
    }

    async getAll() {
        return this.carModel.find();
    }

    async get(id: string) {
        return this.carModel.findById(id);
    }

    async update(id: string, changes: Partial<Car>) {
        return this.carModel.findByIdAndUpdate(id, changes);
    }

    async remove(id: string) {
        return this.carModel.remove(id);
    }
}
