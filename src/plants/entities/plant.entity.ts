import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nom: string;

  @Column()
  soleil: string;

  @Column('int')
  arrosage: number;

  @Column({ length: 255 })
  categorie: string;

  @Column({ length: 255 })
  image: string;

  @Column({ nullable: false, type: 'int' })
  user_id: number;

  @ManyToOne(() => User, (user) => user.plants)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
