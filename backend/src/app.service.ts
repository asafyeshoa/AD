import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Order, OrderDocument} from './Schema/order.schema'


@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World Nest!';
    }

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {
    }

    async create(Order: OrderDocument): Promise<Order> {
        const createdOrder = new this.orderModel(Order);
        return createdOrder.save();
    }

    async findAll(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }
}
