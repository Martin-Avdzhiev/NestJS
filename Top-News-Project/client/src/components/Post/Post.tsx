import { useParams } from 'react-router-dom';

import Categories from "../Main/MainPage/SecondNews/Categories/Categories";
import FeaturedPosts from "../Main/MainPage/SecondNews/FeaturedPosts/FeaturedPosts";


import "./Post.css";

export default function Post() {
    const { id } = useParams();
    console.log(id)

    return (
        <div className="main-second-news-container-wrapper">
            <div className="main-second-news-container">
                <div className="main-container-post">

                </div>
                <div className="side-container-categories">
                    <Categories />
                    <FeaturedPosts />
                </div>
            </div>
        </div>
    )
}