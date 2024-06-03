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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("./news.service");
const New_dto_1 = require("./dtos/New.dto");
const newsModelValidation_1 = require("../validation/newsModelValidation");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    async getNews() {
        try {
            const news = await this.newsService.getNews();
            return news;
        }
        catch (error) {
            return this.newsService.catchError(error);
        }
    }
    async getNewById(id) {
        try {
            const oneNew = await this.newsService.getNewById(id);
            return oneNew;
        }
        catch (error) {
            return this.newsService.catchError(error);
        }
    }
    async createNew(NewDto) {
        try {
            if (!(0, newsModelValidation_1.isValidCategory)(NewDto.category)) {
                throw new common_1.HttpException(`${NewDto.category} is not valid category!`, 400);
            }
            const newNew = await this.newsService.createNew(NewDto);
            return `You created ${newNew.title}`;
        }
        catch (error) {
            return this.newsService.catchError(error);
        }
    }
    async editNew(data, id) {
        try {
            const editedNew = await this.newsService.editNew(id, data);
            return `You updated ${editedNew.title}`;
        }
        catch (error) {
            return this.newsService.catchError(error);
        }
    }
    async deleteNew(id) {
        try {
            const deletedNew = await this.newsService.deleteNew(id);
            return `You deleted ${deletedNew.title}`;
        }
        catch (error) {
            return this.newsService.catchError(error);
        }
    }
};
exports.NewsController = NewsController;
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getNews", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getNewById", null);
__decorate([
    (0, common_1.Post)("/create"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [New_dto_1.NewDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "createNew", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [New_dto_1.NewDto, String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "editNew", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "deleteNew", null);
exports.NewsController = NewsController = __decorate([
    (0, common_1.Controller)("news"),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
//# sourceMappingURL=news.controller.js.map