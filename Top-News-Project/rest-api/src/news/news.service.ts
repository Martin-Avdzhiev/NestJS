import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, MongooseError } from "mongoose";
import { New } from "src/models/New";
import { NewDto } from "./dtos/New.dto";

@Injectable()
export class NewsService {
    constructor(@InjectModel(New.name) private newModel: Model<New>) { }

    getNews() {
        const news = this.newModel.find();
        return news;
    }

    getNewsByCateogry(category: string) {
        const news = this.newModel.find({ category: category });
        return news;
    }

    getNewById(id: string) {
        const oneNew = this.newModel.findById(id);
        if (!oneNew) { throw new HttpException("New is not found", 404) };
        return oneNew;
    }

    async getLastNews(limit: number) {
        const data = await this.newModel.find({}).sort([["date", -1]])
        const latestNews = data.slice(data.length - limit);
        return latestNews;
    }

    createNew(NewDto: NewDto) {
        const createdNew = new this.newModel(NewDto).save();
        return createdNew;
    }

    async editNew(id: string, data: NewDto) {
        const editedNew = (await this.newModel.findByIdAndUpdate(id, data, { returnDocument: "after" })).save();
        if (!editedNew) { throw new HttpException("New is not found", 404) };
        return editedNew;
    }
    async deleteNew(id: string) {
        const deletedNew = await this.newModel.findByIdAndDelete(id);
        if (!deletedNew) { throw new HttpException("New is not found", 404) };
        return deletedNew;
    }

    catchError(error) {
        if (error instanceof MongooseError) {
            return error.message;
        }
        else if (error?.constructor?.name == "MongoServerError") {
            if (error.errorResponse.code == 11000) {
                const key = Object.keys(error.errorResponse.keyPattern)[0];
                return `Duplicate error: ${key}`
            }
            return error.errorResponse.errmsg;
        }
        else {
            return error;
        }
    }
}