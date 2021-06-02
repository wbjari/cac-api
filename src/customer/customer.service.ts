import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomerService {
    constructor(@InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>) { }

    async create(data: Customer) {

    }

    async getAll() {

    }

    async get(id: string) {

    }

    async update(id: string, changes: Partial<Customer>) {

    }

    async remove(id: string) {

    }
}
