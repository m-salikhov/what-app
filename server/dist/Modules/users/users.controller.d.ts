import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getLastTen(uuid: string): Promise<string>;
    createUser(user: CreateUserDto): Promise<import("./entity/user.entity").User>;
    getUser(getUserDto: GetUserDto): Promise<{
        id: string;
        username: string;
        role: "user" | "superuser" | "admin";
        email: string;
        date: number;
    }>;
    delOneCar(id: string): Promise<import("./entity/user.entity").User>;
}
