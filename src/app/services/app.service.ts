import { Injectable } from '@nestjs/common';
import { BitgetService } from 'src/connectors/bitget/services/bitget.service';

@Injectable()
export class AppService {
  onApplicationBootstrap() {
  }

  constructor(private readonly bitget: BitgetService) { }
}
