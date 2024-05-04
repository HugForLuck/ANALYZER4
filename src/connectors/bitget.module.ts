import { Module } from '@nestjs/common';
import { BitgetClient } from 'src/connectors/bitget/classes/bitgetClient';
import { BitgetService } from './bitget/services/bitget.service';
import { TraderService } from 'src/db/traders/trader.service';
import { TraderModule } from 'src/db/traders/trader.module';
import { OrderService } from 'src/db/orders/order.service';
import { OrderModule } from 'src/db/orders/order.module';

@Module({
  imports: [TraderModule, OrderModule],
  controllers: [],
  providers: [BitgetClient, BitgetService, TraderService, OrderService],
  exports: [BitgetService],
})
export class BitgetModule {}
