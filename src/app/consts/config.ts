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

export const MYSQL_CONFIG = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'Local instance MySQL80',
  entities: [],
  synchronize: true,
};
