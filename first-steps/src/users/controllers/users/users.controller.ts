import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    Req,
    Res,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';


const users2: UserDto[] = [
    { name: "Marto", email: "Marto@abv.bg", id: 1 },
    { name: "Gosho", email: "Gosho@abv.bg", id: 2 },
    { name: "Ivan", email: "Ivan@abv.bg", id: 3 },
    { name: "Pesho", email: "Pesho@abv.bg", id: 4 },
    { name: "Hristo", email: "Hristo@abv.bg", id: 5 },
]

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { };
    @Get()
    getUsers(@Query("sortBy") sortBy: string, @Query("limit") limit: number) {
        const fetchedUsers = this.userService.fetchUsers(sortBy, limit);
        return fetchedUsers;
    }

    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number, @Res() response: Response) {
        const user: UserDto | string = this.userService.fetchUserById(id);
        if (typeof user == "string") {
            return response.status(404).send({ message: user })
        }
        return response.send(user);
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    createUser(@Body() data:UserDto, @Res() response: Response) {
        const newUser = this.userService.createUser(data);
        return response.send(newUser);
    }
    @Put("edit/:id")
    @UsePipes(new ValidationPipe())
    editUser(@Param("id", ParseIntPipe) id: number, @Body() userData: UserDto, @Res() response: Response) {
        const user:UserDto|string = this.userService.editUser(id,userData);
        if (typeof user == "string") {
            return response.status(404).send({ message: user })
        }
        return response.send(user);
    }
    @Delete("delete/:id")
    deleteUser(@Param("id", ParseIntPipe) id: number, @Res() response: Response) {
        const user:UserDto|string = this.userService.deleteUser(id);
        if (typeof user == "string") {
            return response.status(404).send({ message: "User is not found!" });
        }
        return response.status(200).send(user);
    }
}
