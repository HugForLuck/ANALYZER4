import { Trader } from 'src/db/traders/trader.entity';
import { FUTURE } from '../enums/future.enum';

export namespace PARAMS {
  export const PASTORDERS = (
    { traderId }: Trader,
    symbol: FUTURE,
    pageNo: number,
  ) => ({
    traderId,
    symbol,
    pageNo,
  });
}
