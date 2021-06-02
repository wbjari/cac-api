import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomerService {
    constructor(@InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>) { }

    async create(data: Customer) {
        return this.customerModel.create(data);
    }

    async getAll() {
        return this.customerModel.find();
    }

    async get(id: string) {
        return this.customerModel.findById(id);
    }

    async update(id: string, changes: Partial<Customer>) {
        return this.customerModel.findByIdAndUpdate(id, changes)
    }

    async remove(id: string) {
        return this.customerModel.findByIdAndRemove(id);
    }
}
