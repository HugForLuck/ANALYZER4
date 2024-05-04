import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trader } from './trader.entity';
import { CONNECTOR } from 'src/connectors/connector.enum';
import { Order } from '../orders/order.entity';

@Injectable()
export class TraderService {
  constructor(
    @InjectRepository(Trader) private traderRespository: Repository<Trader>,
  ) {}

  async findAll(): Promise<Trader[]> {
    return await this.traderRespository.find();
  }

  async findOne(traderId: string): Promise<Trader | null> {
    return await this.traderRespository.findOneBy({ traderId });
  }

  async find(connector: CONNECTOR): Promise<Trader[]> {
    return await this.traderRespository.findBy({ connector, isActive: true });
  }

  async create(trader: Trader): Promise<Trader> {
    return await this.traderRespository.save(trader);
  }

  async remove(id: string): Promise<void> {
    await this.traderRespository.delete(id);
  }
}
