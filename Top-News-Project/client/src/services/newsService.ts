import { CategoriesLength, New } from "../Types/NewsTypes";

const url = import.meta.env.VITE_API_URL;

export async function getNews(){
        const response = await fetch(`${url}/news`);
        const data: New[] = await response.json();
        return data;
}

export async function getMainNews(){
        const response = await fetch(`${url}/news`);
        const data: New[] = (await response.json()).slice(0,3);
        return data;
}

export async function getNewById(id:string){
        const response = await fetch(`${url}/news/${id}`);
        const data: New = await response.json();
        return data;
}

export async function getNewsByCategory(category:string){
        const response = await fetch(`${url}/news/categories/${category}`);
        const data: New[] = await response.json();
        return data;
}

export async function getNewsCateriesLength(){
        const response = await fetch(`${url}/news/categories`);
        const data: CategoriesLength = await response.json();
        return data;
}

export async function getLatestNews(limit:number){
        const response = await fetch(`${url}/news/latest-posts?limit=${limit}`);
        const data: New[] = await response.json();
        return data;
}
