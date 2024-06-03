import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class New {

    @Prop({ required: true, unique: true, minlength: 5 })
    title: string;

    @Prop({ required: true, minlength: 10 })
    content: string;

    @Prop({ required: true, minlength: 10 })
    imageUrl: string;
}

export const NewSchema = SchemaFactory.createForClass(New);