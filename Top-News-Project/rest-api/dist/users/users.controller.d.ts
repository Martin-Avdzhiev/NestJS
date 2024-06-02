import { UsersService } from "./users.service";
import { UserDto } from "./dtos/User.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<any>;
    getUserById(id: string): Promise<any>;
    createUser(UserDto: UserDto): Promise<any>;
    editUser(data: UserDto, id: string): Promise<any>;
    deleteUser(id: string): Promise<any>;
}
