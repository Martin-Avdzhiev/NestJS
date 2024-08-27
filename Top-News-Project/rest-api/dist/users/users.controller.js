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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const User_dto_1 = require("./dtos/User.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUsers() {
        try {
            const users = await this.usersService.getUsers();
            return users;
        }
        catch (error) {
            return this.usersService.catchError(error);
        }
    }
    async getUserById(id) {
        try {
            const user = await this.usersService.getUserById(id);
            return user;
        }
        catch (error) {
            return this.usersService.catchError(error);
        }
    }
    async loginUser(username, password) {
        try {
            const user = await this.usersService.LoginUser(username, password);
            return user;
        }
        catch (error) {
            if (error.message == "duplicate") {
                const duplicatedValue = error.duplicateValue;
                const responseError = {
                    message: [`This ${duplicatedValue} already exist!`],
                    error: "duplicate",
                    statusCode: 400
                };
                throw responseError;
            }
            return this.usersService.catchError(error);
        }
    }
    async createUser(UserDto) {
        try {
            const newUser = await this.usersService.createUser(UserDto);
            return newUser;
        }
        catch (error) {
            if (error.message == "duplicate") {
                const duplicatedValue = error.duplicateValue;
                const responseError = {
                    message: [`This ${duplicatedValue} already exist!`],
                    error: "duplicate",
                    statusCode: 400
                };
                throw responseError;
            }
            return this.usersService.catchError(error);
        }
    }
    async editUser(data, id) {
        try {
            const editedUser = await this.usersService.editUser(id, data);
            return `You updated ${editedUser.username}`;
        }
        catch (error) {
            return this.usersService.catchError(error);
        }
    }
    async deleteUser(id) {
        try {
            const deletedUser = await this.usersService.deleteUser(id);
            return `You deleted ${deletedUser.username}`;
        }
        catch (error) {
            return this.usersService.catchError(error);
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)("/login"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)("username")),
    __param(1, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Post)("/create"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.UserDto, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editUser", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map