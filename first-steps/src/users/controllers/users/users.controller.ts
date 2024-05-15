import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

const users = [
    { name: "Marto", id: 1 },
    { name: "Gosho", id: 2 },
    { name: "Ivan", id: 3 },
    { name: "Pesho", id: 4 },
    { name: "Hristo", id: 5 },
]

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query("sortBy") sortBy: string, @Query("limit") limit: number) {
        if (sortBy == "asc") {
            return users.slice().sort((a, b) => a.name.localeCompare(b.name)).slice(0, limit || users.length);
        }
        else if (sortBy == "dsc") {
            return users.slice().sort((a, b) => b.name.localeCompare(a.name)).slice(0, limit || users.length);
        }
        return users.slice(0, limit || users.length);
    }

    @Get("posts")
    getUsersPosts() {
        return [{
            username: "asd",
            email: "asd@abv.bg",
            posts: [1, 2, 3]
        }];
    }

    @Post("/create")
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        return response.send("Created")
    }
    @Post("/createbody")
    createUserBody(@Body() userData: CreateUserDto) {
        console.log(userData);
        return {}
    }
    @Get(":id/:postId")
    getUserById(@Param() id: string, @Param() postId: string, @Res() response: Response) {
        return response.send({ username: "Marto", id });
    }

}
