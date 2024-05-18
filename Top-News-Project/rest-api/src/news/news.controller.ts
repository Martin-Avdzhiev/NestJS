import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { NewsService } from "./news.service";
import { NewDto } from "./dtos/New.dto";

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
    @UsePipes(new ValidationPipe())
    async deleteNew(@Param("id") id: string) {
        try {
            const deletedNew = await this.newsService.deleteNew(id);
            return `You deleted ${deletedNew.title}`;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }
}