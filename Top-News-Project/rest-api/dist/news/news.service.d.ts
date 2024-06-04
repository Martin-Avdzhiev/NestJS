/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model } from "mongoose";
import { New } from "src/models/New";
import { NewDto } from "./dtos/New.dto";
export declare class NewsService {
    private newModel;
    constructor(newModel: Model<New>);
    getNews(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, New, "find", {}>;
    getNewsByCateogry(category: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, New, "find", {}>;
    getNewById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, New, "findOne", {}>;
    createNew(NewDto: NewDto): Promise<import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    editNew(id: string, data: NewDto): Promise<import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteNew(id: string): Promise<import("mongoose").Document<unknown, {}, New> & New & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    catchError(error: any): any;
}
