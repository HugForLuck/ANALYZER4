import { SYMBOL } from 'src/connectors/bitget/enums/symbol.enum';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  holdMode: string;

  @Column()
  leverage: number;

  @Column()
  holdSide: string;

  @Column()
  symbol: SYMBOL;

  @Column()
  openPrice: number;

  @Column()
  closePrice: number;

  @Column()
  openTime: number;

  @Column()
  closeTime: number;

  @Column()
  closeAmount: number;

  @Column()
  marginAmount: number;

  @Column()
  follower: number;

  @Column()
  traderId: string;
}
