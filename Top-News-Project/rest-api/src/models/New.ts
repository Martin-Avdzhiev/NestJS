import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Categories } from "src/validation/newsModelValidation";

@Schema()
export class New {

    @Prop({ required: true, unique: true, minlength: 5 })
    title: string;

    @Prop({ required: true, minlength: 10 })
    content: string;

    @Prop({ required: true })
    imageUrl: string;

    @Prop({ required: true, minlength: 10 })
    subTitle: string;

    @Prop({ required: true })
    writer: string;

    @Prop({ required: true })
    category: Categories;
}

export const NewSchema = SchemaFactory.createForClass(New);