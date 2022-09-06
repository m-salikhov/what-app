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
    try {
      let [key, value]: string[] = Object.entries(getUserDto)[0];
      const user = await this.userRepo.findOne({
        where: { [key]: value },
      });
      return user ? user : 'User not found';
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async deleteUser(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    return await this.userRepo.remove(user);
  }
}
