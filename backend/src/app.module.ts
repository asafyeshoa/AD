import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PlayersModule} from './players/players.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';
import {Order, OrderSchema} from './Schema/order.schema'

@Module({
    imports: [PlayersModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI), MongooseModule.forFeature([{
        name: Order.name,
        schema: OrderSchema
    }])],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
