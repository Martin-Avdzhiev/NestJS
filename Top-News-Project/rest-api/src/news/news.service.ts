import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { New } from "src/models/New";
import { CreateNewDto } from "./dtos/New.dto";

@Injectable()
export class NewsService {
    constructor(
        @InjectModel(New.name) private newModel: Model<New>) { }

    createNew(createNewDto: CreateNewDto) {
        const newNew = new this.newModel(createNewDto);
        return newNew.save();
    }
}