import { Injectable } from '@nestjs/common';
import { BitgetService } from 'src/connectors/bitget/services/bitget.service';
import { CONFIG } from '../consts/config';

@Injectable()
export class AppService {
  constructor(private readonly bitget: BitgetService) {}

  async onApplicationBootstrap() {
    await this.analyze();
  }

  async analyze() {
    try {
      await this.bitget.analyze();
    } catch (error) {
      console.error(error);
    }
  }
}
