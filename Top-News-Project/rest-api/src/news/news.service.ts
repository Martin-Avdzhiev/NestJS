import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, MongooseError } from "mongoose";
import { New } from "src/models/New";
import { CreateNewDto } from "./dtos/New.dto";

@Injectable()
export class NewsService {
    constructor(@InjectModel(New.name) private newModel: Model<New>) { }

    getNews() {
        const news = this.newModel.find();
        return news;
    }

    getNewById(id: string) {
        const oneNew = this.newModel.findById(id);
        return oneNew;
    }
    createNew(createNewDto: CreateNewDto) {
        const createdNew = new this.newModel(createNewDto).save();
        return createdNew;
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