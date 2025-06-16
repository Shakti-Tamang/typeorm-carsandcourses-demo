import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CarsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
