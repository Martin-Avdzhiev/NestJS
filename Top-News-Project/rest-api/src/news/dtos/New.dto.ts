import { IsNotEmpty, IsString } from "class-validator";

export class NewDto{
    
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    content:string;
}