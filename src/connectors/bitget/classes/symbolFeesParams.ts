import { BUSINESS_TYPE } from '../enums/businessType.enum';
import { SYMBOL } from '../enums/symbol.enum';

export class SymbolFeesParams {
  constructor(
    public symbol: SYMBOL,
    public businessType: BUSINESS_TYPE = BUSINESS_TYPE.MIX,
  ) {}
}
