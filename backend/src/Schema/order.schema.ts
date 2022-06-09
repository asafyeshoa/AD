import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop()
    clientType: string;

    @Prop()
    time: number;


}

export const OrderSchema = SchemaFactory.createForClass(Order);
