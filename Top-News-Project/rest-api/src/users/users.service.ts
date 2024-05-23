import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, MongooseError } from "mongoose";
import { User } from "src/models/User";
import { UserDto } from "./dtos/User.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    getUsers() {
        const users = this.userModel.find();
        return users;
    }

    getUserById(id:string) {
        const user = this.userModel.findById(id);
        return user;
    }

    createUser(UserDto: UserDto) {
        const createdUser = new this.userModel(UserDto).save();
        return createdUser;
    }

    async editUser(id: string, data: UserDto) {
        const editedUser = (await this.userModel.findByIdAndUpdate(id, data, { returnDocument: "after" })).save();
        if (!editedUser) { throw new HttpException("User is not found", 404) };
        return editedUser;
    }
    async deleteUser(id: string) {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        if (!deletedUser) { throw new HttpException("User is not found", 404) };
        return deletedUser;
    }

    catchError(error) {
        if (error instanceof MongooseError) {
            return error.message;
        }
        else if (error?.constructor?.name == "MongoServerError") {
            if (error.errorResponse.code == 11000) {
                const key = Object.keys(error.errorResponse.keyPattern)[0];
                return `Duplicate error: ${key}`
            }
            return error.errorResponse.errmsg;
        }
        else {
            return error;
        }
    }
}