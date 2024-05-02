import { Trader } from '../classes/trader';
import { FUTURE } from '../enums/future.enum';

export namespace PARAMS {
  export const PASTORDERS = (
    { id }: Trader,
    symbol: FUTURE,
    pageNo: number,
  ) => ({
    traderId: id,
    symbol,
    pageNo,
  });
}
