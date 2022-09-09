import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Post('getuser')
  async getUser(@Body() getUserDto: GetUserDto) {
    const _user = await this.usersService.getUser(getUserDto);
    const { password, ...user } = _user;
    return user;
  }

  @Delete(':id')
  delOneCar(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
