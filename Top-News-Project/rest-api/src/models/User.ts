import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({ required: true, minlength: 4, unique: true })
    username: string;

    @Prop({ required: true, minlength: 6 })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);