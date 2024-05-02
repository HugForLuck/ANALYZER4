import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { BitgetModule } from 'src/connectors/bitget.module';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_OPTIONS } from './consts/config';

@Module({
  imports: [ConfigModule.forRoot(CONFIG_OPTIONS), BitgetModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  onApplicationBootstrap() {}
}
