import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './entities/car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}
    create(createCarDto:CreateCarDto):Promise<Car>{
        const car=this.carRepository.create(createCarDto);
        return this.carRepository.save(car);
    }
    findAll():Promise<Car[]>{
        return this.carRepository.find();
    }
    
  async findOne(id: number): Promise<Car> {
    const car = await this.carRepository.findOneBy({ id });
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
    const car = await this.findOne(id);
    Object.assign(car, updateCarDto);
    return this.carRepository.save(car);
  }

  async remove(id: number): Promise<void> {
    const car = await this.findOne(id);
    await this.carRepository.remove(car);
  }
}
