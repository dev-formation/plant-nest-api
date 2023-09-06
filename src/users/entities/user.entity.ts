import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Plant } from '../../plants/entities/plant.entity';

// Pour paramétrer un nom de table
// différent du nom de la classe
// @Entity({ name: 'utilisateur' })
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => Plant, (plant) => plant.user, { eager: true })
  plants: Plant[];
}
