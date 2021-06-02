import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './schemas/car.schema';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) { }

    // Routes moeten nog voorzien worden van authenticatie en autorisatie

    // Admin route
    @Post()
    async create(@Body() data: Car) {
        return this.carService.create(data);
    }

    @Get()
    async getAll() {
        return this.carService.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.carService.get(id);
    }

    // Admin route
    @Patch(':id')
    async update(@Param('id') id: string, @Body() changes: Partial<Car>) {
        return this.carService.update(id, changes)
    }

    // Admin route
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.carService.remove(id);
    }
}
