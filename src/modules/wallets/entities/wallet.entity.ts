import { User } from "src/modules/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("wallet")
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.wallet)
  @JoinColumn()
  user: User;

  @Column()
  units: number;

  @Column()
  cents: number;
}
