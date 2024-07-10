import { Categories, New } from "../Types/NewsTypes";

const url = import.meta.env.VITE_API_URL;

export async function getNews(){
        const response = await fetch(url);
        const data: New[] = await response.json();
        return data;
}

export async function getMainNews(){
        const response = await fetch(url);
        const data: New[] = (await response.json()).slice(0,3);
        return data;
}

export async function getNewById(id:string){
        const response = await fetch(`${url}/${id}`);
        const data: New = await response.json();
        return data;
}

export async function getNewsByCategory(category:string){
        const response = await fetch(`${url}/categories/${category}`);
        const data: New[] = await response.json();
        return data;
}

export async function getNewsCateriesLength(){
        const response = await fetch(`${url}/categories`);
        const data: Categories = await response.json();
        return data;
}

export async function getLatestNews(limit:number){
        const response = await fetch(`${url}/latest-posts?limit=${limit}`);
        const data: New[] = await response.json();
        return data;
}
