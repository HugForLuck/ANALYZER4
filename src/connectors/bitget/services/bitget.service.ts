import { Injectable } from "@nestjs/common";
import { BitgetClient } from "../classes/bitgetClient";

@Injectable()
export class BitgetService {
    constructor(private readonly client: BitgetClient) { }
}