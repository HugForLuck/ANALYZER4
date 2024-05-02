import { Injectable } from '@nestjs/common';
import { BitgetClient } from '../classes/bitgetClient';
import { ISymbolFees } from '../interfaces/symbolFees.interface';
import { APIResponse } from 'bitget-api';
import { ITradeRateResponse } from '../interfaces/tradeRateResponse.interface';
import { Fees } from '../classes/fees';
import { SymbolFeesParams } from '../classes/symbolFeesParams';
import { SYMBOL } from '../enums/symbols.enum';
import { PATH } from '../consts/path.const';
import { Trader } from '../classes/trader';
import { FUTURE } from '../enums/future.enum';
import { PARAMS } from '../requests/classes/params';

@Injectable()
export class BitgetService {
  constructor(private readonly client: BitgetClient) {}

  async analyze() {
    const fees: ISymbolFees = await this.getSymbolFees(SYMBOL.BTCUSDT);
    console.log(fees);
    const trader = new Trader('bbbc487e87b03d52a49c', 'Purosangue');
    const orders = await this.getPastOrders(trader, FUTURE.BTCUSDT);
    console.table(orders.data);
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
}
