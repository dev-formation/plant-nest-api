import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nom: string;

  @Column()
  soleil: string;

  @Column('int')
  arrosage: number;

  @Column({ length: 500 })
  categorie: string;

  @Column({ length: 500 })
  image: string;
}
