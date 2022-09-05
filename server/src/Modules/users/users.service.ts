import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const userCheck = await this.userRepo.findOne({
      where: { email: user.email },
    });
    if (userCheck)
      throw new ConflictException('Email уже существует в системе');

    const hash = await bcrypt.hash(user.password, 8);

    return await this.userRepo.save({
      ...user,
      password: hash,
    });
  }

  async getUser(getUserDto: GetUserDto): Promise<User | string> {
    if ('id' in getUserDto) {
      const user = await this.userRepo.findOne({
        where: { id: getUserDto.id },
      });
      return user ? user : 'User not found';
    }
    if ('email' in getUserDto) {
      const user = await this.userRepo.findOne({
        where: { email: getUserDto.email },
      });
      return user ? user : 'User not found';
    }
    if ('username' in getUserDto) {
      const user = await this.userRepo.findOne({
        where: { username: getUserDto.username },
      });
      return user ? user : 'User not found';
    }
    throw new BadRequestException('invalid request argument');
  }

  async deleteUser(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    return await this.userRepo.remove(user);
  }
}
