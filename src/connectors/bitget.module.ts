import { Module } from '@nestjs/common';
import { BitgetClient } from 'src/connectors/bitget/classes/bitgetClient';
import { BitgetService } from './bitget/services/bitget.service';

@Module({
    imports: [],
    controllers: [],
    providers: [BitgetClient, BitgetService],
    exports: [BitgetService]
})
export class BitgetModule { }
