import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePlantDto {
  @IsNotEmpty()
  @Length(3)
  @IsString()
  nom: string;

  soleil: string;
  arrosage: number;
  categorie: string;
  image: string;
}
