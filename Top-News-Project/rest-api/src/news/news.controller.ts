import { Body, Controller, Post } from "@nestjs/common";
import { NewsService } from "./news.service";
import { CreateNewDto } from "./dtos/New.dto";
import { Error, MongooseError } from "mongoose";

@Controller("news")
export class NewsController {
    constructor(private newsService: NewsService) { }

    @Post("/create")
    async createNew(@Body() createNewsDto: CreateNewDto) {
        try {
            const newNew = await this.newsService.createNew(createNewsDto);
            return `You created ${newNew.title}`;
        } catch (error) {
            if (error instanceof MongooseError) {
                return error.message
            } else {
                return error
            }
        }
    }
}