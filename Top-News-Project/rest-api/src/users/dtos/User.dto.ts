import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty({ message: "Username is required!" })
    @IsString({ message: "Please enter a valid username!" })
    username: string;

    @IsNotEmpty({ message: "Password is required!" })
    @IsString({ message: "Please enter a valid password!" })
    password: string;
}

export class UserDto {
    @IsNotEmpty({ message: "Email is required!" })
    @IsEmail({}, { message: "Please enter a valid email!" })
    email: string;

    @IsNotEmpty({ message: "Username is required!" })
    @IsString({ message: "Please enter a valid username!" })
    username: string;

    @IsNotEmpty({ message: "Password is required!" })
    @IsString({ message: "Please enter a valid password!" })
    password: string;
}
