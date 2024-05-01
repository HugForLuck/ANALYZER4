import { RestClientV2 } from "bitget-api";
import { RestOptions } from "./restOptions";

export class BitgetClient extends RestClientV2 {
    constructor() { super(new RestOptions()) }
}