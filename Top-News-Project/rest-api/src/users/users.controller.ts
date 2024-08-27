import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { LoginUserDto, UserDto } from "./dtos/User.dto";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get("/")
    async getUsers() {
        try {
            const users = await this.usersService.getUsers();
            return users;
        } catch (error) {
            return this.usersService.catchError(error);
        }
    }

    @Get("/:id")
    async getUserById(@Param("id") id: string) {
        try {
            const user = await this.usersService.getUserById(id);
            return user;
        } catch (error) {
            return this.usersService.catchError(error);
        }
    }

    @Post("/login")
    @UsePipes(new ValidationPipe())
    async loginUser(
        @Body("username") username:string,
        @Body("password") password:string
    ) {
        try {
            const user = await this.usersService.LoginUser(username,password);
            return user;
        } catch (error) {
            if (error.message == "duplicate") {
                const duplicatedValue = error.duplicateValue;
                const responseError = {
                    message: [`This ${duplicatedValue} already exist!`],
                    error: "duplicate",
                    statusCode: 400
                }
                throw responseError;
            }
            return this.usersService.catchError(error);
        }
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    async createUser(@Body() UserDto: UserDto) {
        try {
            const newUser = await this.usersService.createUser(UserDto);
            return newUser;
        } catch (error) {
            if (error.message == "duplicate") {
                const duplicatedValue = error.duplicateValue;
                const responseError = {
                    message: [`This ${duplicatedValue} already exist!`],
                    error: "duplicate",
                    statusCode: 400
                }
                throw responseError;
            }
            return this.usersService.catchError(error);
        }
    }

    @Put("/edit/:id")
    @UsePipes(new ValidationPipe())
    async editUser(@Body() data: UserDto, @Param("id") id: string) {
        try {
            const editedUser = await this.usersService.editUser(id, data);
            return `You updated ${editedUser.username}`;
        } catch (error) {
            return this.usersService.catchError(error);
        }
    }
    @Delete("/delete/:id")
    async deleteUser(@Param("id") id: string) {
        try {
            const deletedUser = await this.usersService.deleteUser(id);
            return `You deleted ${deletedUser.username}`;
        } catch (error) {
            return this.usersService.catchError(error);
        }
    }
}