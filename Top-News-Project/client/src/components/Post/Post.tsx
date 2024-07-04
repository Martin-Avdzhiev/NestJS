import Categories from "../Main/MainPage/SecondNews/Categories/Categories";
import FeaturedPosts from "../Main/MainPage/SecondNews/FeaturedPosts/FeaturedPosts";
import MainPost from './PostCard/PostCard';

import "./Post.css";
import AlsoLike from "./AlsoLike/AlsoLike";
import { useEffect, useState } from "react";
import { getNewById, getNews } from "../../services/newsService";
import { useParams } from "react-router-dom";
import { New } from "../../Types/NewsTypes";

export default function Post() {
    const { id } = useParams<string>();
    const [bottomPosts, setBottomPosts] = useState<New[]>([]);
    const [alsoLikePosts, setAlsoLikePosts] = useState<New[]>([]);
    const [post, setPost] = useState<New>({
        title: "",
        subtitle: "",
        content: "",
        imageUrl: "",
        category: "",
        writer: "",
        _id: "",
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    })

    useEffect(() => {
        if (id) {
            const randomIndex = Math.floor(Math.random() * 10);
            Promise.all([
                getNewById(id).then((data) => setPost(data)),
                getNews().then((data) => {
                    setBottomPosts(data.slice(randomIndex, randomIndex + 2));
                    setAlsoLikePosts(data.slice(0, 6));
                })
            ]).catch((error) => console.log(error));

        }
    }, [])
    return (
        <>
            <div className="bigger-main-one-post-container-wrapper">
                <div className="big-main-one-post-container-wrapper">
                    <div className="main-one-post-container-wrapper">
                        <MainPost />
                        <div className="side-container-categories">
                            <Categories />
                            <FeaturedPosts />
                        </div>
                    </div>
                    <AlsoLike />
                </div>
            </div>


        </>
    )
}