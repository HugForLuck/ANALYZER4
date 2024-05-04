import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trader {
  @PrimaryColumn()
  traderId: string;

  @Column()
  name: string;

  @Column()
  connector: string;

  @Column()
  isActive: boolean;
}
