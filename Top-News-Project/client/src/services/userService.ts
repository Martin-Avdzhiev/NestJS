import { User, UserError } from "../Types/User";

const url = import.meta.env.VITE_API_URL;

function validateUserData(data:User){
    if(data.username.length < 4){
        throw "Username must be at least 4 characters!";
    }
    else if(data.password.length < 6){
        throw "Password must be at least 6 characters!";
    }
}

export async function createUser(data:User | string){
    try {
        if(typeof data == "string"){
            throw data;
        }
        validateUserData(data);
        const response = await fetch(`${url}/users/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const user: User | UserError = await response.json();
        if("message" in user){
            throw user.message[0];
        }
        if(typeof data == "string"){
            throw data;
        }
        return user;
        
    } catch (error) {
      throw error
    }
}

