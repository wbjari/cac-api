import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './schemas/customer.schema';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    // Routes moeten nog voorzien worden van authenticatie en autorisatie

    // Admin route
    @Post()
    async create(@Body() data: Customer) {
        return this.customerService.create(data);
    }

    @Get()
    async getAll() {
        return this.customerService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.customerService.get(id);
    }

    // Admin route
    @Patch(':id')
    async update(@Param('id') id: string, @Body() changes: Partial<Customer>) {
        return this.customerService.update(id, changes);
    }

    // Admin route
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.customerService.remove(id);
    }
}
