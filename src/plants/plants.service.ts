import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant) private plantsRepository: Repository<Plant>,
  ) {}

  async create(createPlantDto: CreatePlantDto) {
    const plant = this.plantsRepository.create(createPlantDto);
    const result = await this.plantsRepository.save(plant);
    return result;
  }

  async findAll() {
    return await this.plantsRepository.find();
  }

  async findOne(id: number) {
    const found = await this.plantsRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Plants with the id ${id} not found`);
    }
    return found;
  }

  async update(id: number, updatePlantDto: UpdatePlantDto) {
    const plant = await this.findOne(id);
    const newPlant = this.plantsRepository.merge(plant, updatePlantDto);
    const result = await this.plantsRepository.save(newPlant);
    return result;
  }

  // async remove(id: number) {
  //   const result = await this.plantsRepository.delete({ id });
  //   if (result.affected < 1) {
  //     throw new NotFoundException(`Plant with id : ${id} not found`);
  //   }
  //   return `Plant with id : ${id} has been deleted`;
  // }

  async remove(id: number) {
    const found = await this.findOne(id);
    await this.plantsRepository.remove(found);
    return `Plant with id : ${id} has been deleted`;
  }
}
