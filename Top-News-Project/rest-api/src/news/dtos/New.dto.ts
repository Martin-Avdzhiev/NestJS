import { IsNotEmpty, IsString } from "class-validator";

export class NewDto{
    
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    content:string;

    @IsNotEmpty()
    @IsString()
    imageUrl:string;

    @IsNotEmpty()
    @IsString()
    subtitle:string;

    @IsNotEmpty()
    @IsString()
    writer:string;

    @IsNotEmpty()
    @IsString()
    category:string;
}