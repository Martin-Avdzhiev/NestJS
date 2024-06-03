import { New } from "../Types/NewsTypes";

const url = import.meta.env.VITE_API_URL;
console.log(url)

export async function getMainNews(){
        const response = await fetch(url);
        const data: New[] = (await response.json()).slice(0,3);
        return data;
}