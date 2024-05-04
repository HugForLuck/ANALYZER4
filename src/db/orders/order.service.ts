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

  async getLastOrderTime({ traderId }: Trader): Promise<Order[]> {
    return await this.orderRespository.find({
      select: {
        openTime: true,
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
