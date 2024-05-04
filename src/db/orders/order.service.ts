import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Trader } from '../traders/trader.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRespository: Repository<Order>,
  ) {}

  async getLastOrder({ traderId }: Trader): Promise<Order[]> {
    return await this.orderRespository.find({
      select: {
        id: true,
        holdMode: true,
        leverage: true,
        holdSide: true,
        symbol: true,
        openPrice: true,
        closePrice: true,
        openTime: true,
        closeTime: true,
        closeAmount: true,
        marginAmount: true,
        follower: true,
      },
      where: { traderId },
      order: {
        openTime: 'DESC',
      },
      take: 1,
    });
    // return await this.orderRespository.findBy({ traderId });
  }
}
