import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { create } from 'domain';

// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  // private readonly users = [
  //   {
  //     id: 1,
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //     name: 'John Doe',
  //     email: 'john@example.com',
  //   },
  //   {
  //     id: 2,
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //     name: 'Maria Smith',
  //     email: 'maria@example.com',
  //   },
  // ];

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
}
