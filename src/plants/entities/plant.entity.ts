import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
