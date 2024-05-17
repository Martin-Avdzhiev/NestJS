import { IsNotEmpty, IsString } from "class-validator";

export class CreateNewDto{
    
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    content:string;
}