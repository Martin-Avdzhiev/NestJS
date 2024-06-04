import { New } from "../Types/NewsTypes";

const url = import.meta.env.VITE_API_URL;

export async function getMainNews(){
        const response = await fetch(url);
        const data: New[] = (await response.json()).slice(0,3);
        return data;
}

export async function getNewsByCategory(category:string){
        const response = await fetch(`${url}/${category}`);
        const data: New[] = await response.json();
        return data;
}