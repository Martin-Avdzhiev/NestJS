import Categories from "../Main/MainPage/SecondNews/Categories/Categories";
import FeaturedPosts from "../Main/MainPage/SecondNews/FeaturedPosts/FeaturedPosts";
import MainPost from './PostCard/PostCard';

import "./Post.css";
import AlsoLike from "./AlsoLike/AlsoLike";

export default function Post() {

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
                    <AlsoLike/>
                </div>
            </div>


        </>
    )
}