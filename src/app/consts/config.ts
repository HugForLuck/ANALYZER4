import { IEnv } from '../interfaces/env.interface';

export namespace CONFIG {
  const env = <IEnv>process.env;

  export namespace BITGET {
    export const KEY = () => env.BITGET_KEY ?? 'MISSING BITGET KEY';
    export const SECRET = () => env.BITGET_SECRET ?? 'MISSING BITGET SECRET';
    export const PASS = () => env.BITGET_PASS ?? 'MISSING BITGET PASSPHRASE';
  }
}

export const CONFIG_OPTIONS = {
  isGlobal: true,
};
