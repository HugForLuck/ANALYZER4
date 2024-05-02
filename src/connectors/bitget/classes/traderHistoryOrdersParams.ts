import { FUTURE } from '../enums/future.enum';
import { Trader } from './trader';

export class TraderHistoryOrdersParams {
  traderId: string;

  constructor(
    { id }: Trader,
    public symbol: FUTURE,
    public pageNo: number = 0,
  ) {
    this.traderId = id;
  }
}
