import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { New, NewSchema } from "src/models/New";
import { NewsService } from "./news.service";
import { NewsController } from "./news.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: New.name,
                schema: NewSchema
            },
        ])
    ],
    providers: [NewsService],
    controllers: [NewsController]
})

export class NewsModule {}