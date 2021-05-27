import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
    @Prop({ 
        type: String,
        required: true,
        enum: ['Volkswagen', 'KIA', 'Audi', 'Mercedes']
    })
    brand: string;

    @Prop({ 
        type: String,
        required: true,
        enum: ['car', 'bus']
    })
    type: string;

    @Prop({
        type: Boolean,
        required: true
    })
    hasWheelchairAccess: boolean;

    @Prop({ 
        type: Number,
        required: true
    })
    amountOfSeats: number;
    
    @Prop({ 
        type: Number,
        required: true
    })
    power: number;
    
    @Prop({ 
        type: Number,
        required: true
    })
    maxPower: number;

    @Prop({
        type: Number,
        required: true
    })
    currentLocationX: number;

    @Prop({
        type: Number,
        required: true
    })
    currentLocationY: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);