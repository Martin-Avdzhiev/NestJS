import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { NewsService } from "./news.service";
import { NewDto } from "./dtos/New.dto";
import { isValidCategory } from "src/validation/newsModelValidation";
@Controller("news")
export class NewsController {
    constructor(private newsService: NewsService) { }


    @Get("/")
    async getNews() {
        try {
            const news = await this.newsService.getNews();
            return news;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }

    
    
    @Get("/categories/:category")
    async getNewsByCategory(@Param("category") category:string) {
        try {
            const news = await this.newsService.getNewsByCateogry(category.toLowerCase());
            return news;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }

    @Get("/featured-posts")
    async getLastNews(@Query("limit") limit:number) {
        try {
            const latestNews = await this.newsService.getLastNews(limit);
            return latestNews;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }
    
    @Get("/:id")
    async getNewById(@Param("id") id: string) {
        try {
            const oneNew = await this.newsService.getNewById(id);
            return oneNew;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    async createNew(@Body() NewDto: NewDto) {
        try {
            if (!isValidCategory(NewDto.category)) {
                throw new HttpException(`${NewDto.category} is not valid category!`, 400);
            }
            const newNew = await this.newsService.createNew(NewDto);
            return `You created ${newNew.title}`;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }

    @Put("/edit/:id")
    @UsePipes(new ValidationPipe())
    async editNew(@Body() data: NewDto, @Param("id") id: string) {
        try {
            const editedNew = await this.newsService.editNew(id, data);
            return `You updated ${editedNew.title}`;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }
    @Delete("/delete/:id")
    async deleteNew(@Param("id") id: string) {
        try {
            const deletedNew = await this.newsService.deleteNew(id);
            return `You deleted ${deletedNew.title}`;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }
}