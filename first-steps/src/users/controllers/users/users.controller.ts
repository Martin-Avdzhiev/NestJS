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

const users: UserDto[] = [
    { name: "Marto", email: "Marto@abv.bg", id: 1 },
    { name: "Gosho", email: "Gosho@abv.bg", id: 2 },
    { name: "Ivan", email: "Ivan@abv.bg", id: 3 },
    { name: "Pesho", email: "Pesho@abv.bg", id: 4 },
    { name: "Hristo", email: "Hristo@abv.bg", id: 5 },
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
    @Get(":id/:postId")
    getUserById(@Param("id", ParseIntPipe) id: number, @Param("postId") postId: string, @Res() response: Response) {
        return response.send({ username: "Marto", id, postId });
    }

    @Post("/create")
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        return response.send("Created")
    }
    @Post("/createbody")
    @UsePipes(new ValidationPipe())
    createUserBody(@Body() userData: UserDto) {
        console.log(userData);
        return {}
    }
    @Put("edit/:id")
    @UsePipes(new ValidationPipe())
    editUser(@Param("id", ParseIntPipe) id : number, @Body() userData:UserDto, @Res() response: Response){
        const userIndex:number = users.findIndex((x) => x.id == id);
        if(userIndex == -1){
            return  response.status(404).send({message:"User is not found!"});
        }
        users.splice(userIndex,1,userData);
        return response.status(200).send(users[userIndex]);
    }
    @Delete("delete/:id")
    deleteUser(@Param("id",ParseIntPipe) id: number, @Res() response: Response){
        const userIndex:number = users.findIndex((x) => x.id == id);
        if(userIndex == -1){
          return  response.status(404).send({message:"User is not found!"});
        }
        const user = users[userIndex];
        users.splice(userIndex,1);
        return response.status(200).send(user);
    }
}
