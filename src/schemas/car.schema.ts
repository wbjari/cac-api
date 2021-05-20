import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
    @Prop()
    brand: string;

    @Prop()
    amountOfSeats: number;

    @Prop()
    type: string;
    
    @Prop()
    power: string;
    
    @Prop()
    maxPower: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);