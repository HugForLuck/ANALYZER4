import { APIResponse } from 'bitget-api';
import { ISymbolFees } from '../interfaces/symbolFees.interface';
import { ITradeRateResponse } from '../interfaces/tradeRateResponse.interface';

export class Fees implements ISymbolFees {
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
