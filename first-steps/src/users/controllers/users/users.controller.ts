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
    UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { UsersService } from 'src/users/services/users/users.service';

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
    @UseGuards(AuthGuard)
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
