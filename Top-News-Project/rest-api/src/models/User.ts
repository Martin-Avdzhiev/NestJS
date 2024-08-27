import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class User {

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, minlength: 4, unique: true })
    username: string;

    @Prop({ required: true, minlength: 6 })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);