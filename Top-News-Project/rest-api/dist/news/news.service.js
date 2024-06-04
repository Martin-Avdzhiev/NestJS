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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const New_1 = require("../models/New");
let NewsService = class NewsService {
    constructor(newModel) {
        this.newModel = newModel;
    }
    getNews() {
        const news = this.newModel.find();
        return news;
    }
    getNewsByCateogry(category) {
        const news = this.newModel.find({ category: category });
        return news;
    }
    getNewById(id) {
        const oneNew = this.newModel.findById(id);
        if (!oneNew) {
            throw new common_1.HttpException("New is not found", 404);
        }
        ;
        return oneNew;
    }
    createNew(NewDto) {
        const createdNew = new this.newModel(NewDto).save();
        return createdNew;
    }
    async editNew(id, data) {
        const editedNew = (await this.newModel.findByIdAndUpdate(id, data, { returnDocument: "after" })).save();
        if (!editedNew) {
            throw new common_1.HttpException("New is not found", 404);
        }
        ;
        return editedNew;
    }
    async deleteNew(id) {
        const deletedNew = await this.newModel.findByIdAndDelete(id);
        if (!deletedNew) {
            throw new common_1.HttpException("New is not found", 404);
        }
        ;
        return deletedNew;
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
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(New_1.New.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NewsService);
//# sourceMappingURL=news.service.js.map