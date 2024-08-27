import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Error, Model, MongooseError } from "mongoose";
import { User } from "src/models/User";
import { LoginUserDto, UserDto } from "./dtos/User.dto";
import { validateCreateUser } from "src/validation/userModelValidation";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async getUsers() {
        const users = await this.userModel.find();
        return users;
    }

   async  getUserById(id:string) {
        const user = await this.userModel.findById(id);
        return user;
    }

   async LoginUser(username:string, password:string) {
        try {  
            const user = await this.userModel.findOne({username,password});
            return user
        } 
        catch (error) {
            if(error.name == "MongoServerError"){
                if(error.code == 11000){
                    const duplicateValue = Object.keys(error.keyValue)[0];
                    throw ({message : "duplicate", duplicateValue});
                }
            }
            throw error
        }
    }

   async createUser(UserDto: UserDto) {
        try {  
            const createdDocument = new this.userModel(UserDto);
            return await createdDocument.save();
        } 
        catch (error) {
            if(error.name == "MongoServerError"){
                if(error.code == 11000){
                    const duplicateValue = Object.keys(error.keyValue)[0];
                    throw ({message : "duplicate", duplicateValue});
                }
            }
            throw error
        }
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