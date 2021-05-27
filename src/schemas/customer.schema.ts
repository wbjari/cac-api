import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
    @Prop({ 
        type: String,
        required: true
    })
    name: string;

    @Prop({ 
        type: Number,
        required: true
    })
    locationX: number;

    @Prop({ 
        type: Number,
        required: true
    })
    locationY: number;
    
    @Prop({ 
        type: String,
        required: true
    })
    city: string;

    @Prop({ 
        type: Boolean,
        required: true
    })
    isRegular: boolean;
    
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);