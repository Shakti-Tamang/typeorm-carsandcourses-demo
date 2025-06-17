import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { CoursesModule } from './courses/courses.module';
import { Car } from './cars/entities/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "root123",
  "database": "nestjs_tutorial",
  "entities": [Car],
  "synchronize": true
}
  ), CarsModule, CoursesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
