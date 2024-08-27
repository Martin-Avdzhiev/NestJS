"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const User_1 = require("../models/User");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    getUsers() {
        const users = this.userModel.find();
        return users;
    }
    getUserById(id) {
        const user = this.userModel.findById(id);
        return user;
    }
    async createUser(UserDto) {
        try {
            const createdDocument = new this.userModel(UserDto);
            return await createdDocument.save();
        }
        catch (error) {
            if (error.name == "MongoServerError") {
                if (error.code == 11000) {
                    const duplicateValue = Object.keys(error.keyValue)[0];
                    throw ({ message: "duplicate", duplicateValue });
                }
            }
            throw error;
        }
    }
    async editUser(id, data) {
        const editedUser = (await this.userModel.findByIdAndUpdate(id, data, { returnDocument: "after" })).save();
        if (!editedUser) {
            throw new common_1.HttpException("User is not found", 404);
        }
        ;
        return editedUser;
    }
    async deleteUser(id) {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new common_1.HttpException("User is not found", 404);
        }
        ;
        return deletedUser;
    }
    catchError(error) {
        if (error instanceof mongoose_2.MongooseError) {
            return error.message;
        }
        else if (error?.constructor?.name == "MongoServerError") {
            if (error.errorResponse.code == 11000) {
                const key = Object.keys(error.errorResponse.keyPattern)[0];
                return `Duplicate error: ${key}`;
            }
            return error.errorResponse.errmsg;
        }
        else {
            return error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(User_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map