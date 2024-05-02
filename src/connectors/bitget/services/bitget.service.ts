import { Injectable } from '@nestjs/common';
import { BitgetClient } from '../classes/bitgetClient';
import { IFeeRate } from '../interfaces/tradeRate.interface';
import { APIResponse } from 'bitget-api';
import { ITradeRateResponse } from '../interfaces/tradeRateResponse.interface';
import { Fees } from '../classes/fees';
import { SymbolFeesParams } from '../classes/symbolFeesParams';
import { SYMBOL } from '../enums/symbols.enum';
import { PATH } from '../consts/path.const';
import { Trader } from '../classes/trader';
import { TraderHistoryOrdersParams } from '../classes/traderHistoryOrdersParams';
import { FUTURE } from '../enums/future.enum';

@Injectable()
export class BitgetService {
  constructor(private readonly client: BitgetClient) {}

  async analyze() {
    console.log('starting analyzing bitget');

    const fees: IFeeRate = await this.getSymbolFees(SYMBOL.BTCUSDT);
    console.log(fees);
    const trader = new Trader('bbbc487e87b03d52a49c', 'Purosangue');
    const orders = await this.getHistoryOrders(trader, FUTURE.BTCUSDT);
    console.log(orders);
  }

  async getSymbolFees(symbol: SYMBOL): Promise<IFeeRate> {
    const params = new SymbolFeesParams(symbol);
    const response: APIResponse<ITradeRateResponse> =
      await this.client.getTradeRate(params);
    return new Fees(params.symbol, response);
  }

  async getHistoryOrders(trader: Trader, future: FUTURE) {
    const params = new TraderHistoryOrdersParams(trader, future);
    return this.client.postPrivate(PATH.TRADER_HISTORY, params);
  }
}
