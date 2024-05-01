import { RestClientOptions } from 'bitget-api';
import { CONFIG } from 'src/app/consts/config';

export class RestOptions implements RestClientOptions {
    apiKey: string;
    apiSecret: string;
    apiPass: string;

    constructor() {
        const { KEY, PASS, SECRET } = CONFIG.BITGET;
        this.apiKey = KEY();
        this.apiPass = PASS();
        this.apiSecret = SECRET();
    }
}
