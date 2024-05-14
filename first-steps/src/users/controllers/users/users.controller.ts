import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return [{username:"Marto", email: "marto@abv.bg"},{username:"Marto2", email: "marto2@abv.bg"}];
    }

    @Get("posts")
    getUsersPosts(){
        return [{
            username:"asd", 
            email: "asd@abv.bg", 
            posts: [1,2,3]
        }]
    }

    @Post("/create")
    createUser(@Req() request : Request, @Res() response: Response){
       console.log(request.body);
       return response.send("Created")
    }
    @Post("/createbody")
    createUserBody(@Body() userData : CreateUserDto){
       console.log(userData)
       return {}
    }

}
