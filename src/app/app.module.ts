import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { BitgetModule } from 'src/connectors/bitget.module';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_OPTIONS, MYSQL_CONFIG } from './consts/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTIONS),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'analyzer4',
      entities: [],
      synchronize: true,
    }),
    BitgetModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  onApplicationBootstrap() {}
}
