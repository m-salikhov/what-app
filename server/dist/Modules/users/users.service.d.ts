import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { GetUserDto } from './dto/get-user.dto';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    createUser(user: CreateUserDto): Promise<User>;
    getUser(getUserDto: GetUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
