import { UserDto } from "src/users/dtos/User.dto";

type nestJsError = {
    message: string[];
    error : string;
    statusCode:number;
}

export function validateCreateUser(error:string | nestJsError){
    if(typeof error == "string"){
        if(error.includes("Duplicate")){
            const duplicate = error.split(": ")[1];
            console.log(duplicate)
        }
    }
}