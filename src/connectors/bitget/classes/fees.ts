import { APIResponse } from 'bitget-api';
import { IFeeRate } from '../interfaces/tradeRate.interface';
import { ITradeRateResponse } from '../interfaces/tradeRateResponse.interface';

export class Fees implements IFeeRate {
  public maker: string;
  public taker: string;
  constructor(
    public symbol: string,
    { data }: APIResponse<ITradeRateResponse>,
  ) {
    this.maker = data.makerFeeRate;
    this.taker = data.takerFeeRate;
  }
}
