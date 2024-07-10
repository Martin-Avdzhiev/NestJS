import { NewsService } from "./news.service";
import { NewDto } from "./dtos/New.dto";
export declare class NewsController {
    private newsService;
    constructor(newsService: NewsService);
    getNews(): Promise<any>;
    getNewsCategoriesLength(): Promise<any>;
    getNewsByCategory(category: string): Promise<any>;
    getLastNews(limit: number): Promise<any>;
    getNewById(id: string): Promise<any>;
    createNew(NewDto: NewDto): Promise<any>;
    editNew(data: NewDto, id: string): Promise<any>;
    deleteNew(id: string): Promise<any>;
}
