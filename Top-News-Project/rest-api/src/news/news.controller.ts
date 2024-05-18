import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { NewsService } from "./news.service";
import { CreateNewDto } from "./dtos/New.dto";

@Controller("news")
export class NewsController {
    constructor(private newsService: NewsService) { }

    @Get("/")
    async getNews(){
        try {
            const news = await this.newsService.getNews();
            return news;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    async createNew(@Body() createNewsDto: CreateNewDto) {
        try {
            const newNew = await this.newsService.createNew(createNewsDto);
            return `You created ${newNew.title}`;
        } catch (error) {
            return this.newsService.catchError(error);
        }
    }


}