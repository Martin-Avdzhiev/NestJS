import { User } from "../Types/User";

const url = import.meta.env.VITE_API_URL;

export async function createUser(data:User){
    const response = await fetch(`${url}/users/create`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const user: User = await response.json();
    return user;
}