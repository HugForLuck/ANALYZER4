import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { BitgetModule } from 'src/connectors/bitget.module';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_OPTIONS, MYSQL_CONFIG } from './consts/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trader } from 'src/db/traders/trader.entity';
import { TraderService } from 'src/db/traders/trader.service';
import { TraderModule } from 'src/db/traders/trader.module';
import { Order } from 'src/db/orders/order.entity';
import { OrderService } from 'src/db/orders/order.service';
import { OrderModule } from 'src/db/orders/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTIONS),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'analyzer4',
      entities: [Trader, Order],
      synchronize: false,
    }),
    TraderModule,
    OrderModule,
    BitgetModule,
  ],
  controllers: [],
  providers: [AppService, TraderService, OrderService],
})
export class AppModule {
  onApplicationBootstrap() {}
}
