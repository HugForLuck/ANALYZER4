import { Injectable } from '@nestjs/common';
import { BitgetClient } from '../classes/bitgetClient';
import { ISymbolFees } from '../interfaces/symbolFees.interface';
import { APIResponse } from 'bitget-api';
import { ITradeRateResponse } from '../interfaces/tradeRateResponse.interface';
import { Fees } from '../classes/fees';
import { SymbolFeesParams } from '../classes/symbolFeesParams';
import { SYMBOL } from '../enums/symbol.enum';
import { PATH } from '../consts/path';
import { FUTURE } from '../enums/future.enum';
import { PARAMS } from '../consts/params';
import { Trader } from 'src/db/traders/trader.entity';
import { TraderService } from 'src/db/traders/trader.service';
import { CONNECTOR } from 'src/connectors/connector.enum';
import { OrderService } from 'src/db/orders/order.service';
import { formatTimestamp } from 'src/app/utils/date.utils';

@Injectable()
export class BitgetService {
  constructor(
    private readonly client: BitgetClient,
    private traderService: TraderService,
    private orderService: OrderService,
  ) {}

  async analyze() {
    const fees: ISymbolFees = await this.getSymbolFees(SYMBOL.BTCUSDT);
    console.log(fees);
    const traders = await this.getTraders();
    console.log(traders);
    const orders = await this.getPastOrders(traders[0], FUTURE.BTCUSDT);
    console.table(orders.data);
    const lastOrderTime = await this.getLastOrderTime(traders[0]);
    console.log(formatTimestamp(lastOrderTime));
  }

  async getSymbolFees(symbol: SYMBOL): Promise<ISymbolFees> {
    const params = new SymbolFeesParams(symbol);
    const response: APIResponse<ITradeRateResponse> =
      await this.client.getTradeRate(params);
    return new Fees(params.symbol, response);
  }

  async getPastOrders(trader: Trader, future: FUTURE, page: number = 1) {
    const params = PARAMS.PASTORDERS(trader, future, page);
    return this.client.postPrivate(PATH.TRADER_HISTORY, params);
  }

  async getLastOrderTime(trader: Trader) {
    const lastOrder = await this.orderService.getLastOrderTime(trader);
    return lastOrder[0]?.openTime ?? 0;
  }

  async getTraders() {
    return await this.traderService.find(CONNECTOR.BITGET);
  }
}
