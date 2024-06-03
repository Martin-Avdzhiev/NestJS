import { New } from "../Types/NewsTypes";

const url = "http://localhost:10000/news";
//"https://nestjs-28nx.onrender.com/news"

export async function getMainNews(){
        const response = await fetch(url);
        const data: New[] = (await response.json()).slice(0,3);
        return data;
}