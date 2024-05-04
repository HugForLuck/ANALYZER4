import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trader } from './trader.entity';
import { TraderService } from './trader.service';

@Module({
  imports: [TypeOrmModule.forFeature([Trader])],
  providers: [TraderService],
  exports: [TypeOrmModule],
})
export class TraderModule {}
