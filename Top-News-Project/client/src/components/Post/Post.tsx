import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getNewById } from '../../services/newsService';
import { New } from '../../Types/NewsTypes';

import Categories from "../Main/MainPage/SecondNews/Categories/Categories";
import FeaturedPosts from "../Main/MainPage/SecondNews/FeaturedPosts/FeaturedPosts";


import "./Post.css";
import { calculateDaysBeforeDate } from '../../services/dateService';

export default function Post() {
    const { id } = useParams<string>();
    const [post, setPost] = useState<New>({
        title: "",
        subtitle: "",
        content:"",
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
            getNewById(id).then((data) => setPost(data));
        }
    }, [id])

    return (
        <div className="bigger-main-one-post-container-wrapper">
            <div className="big-main-one-post-container-wrapper">
                <div className="main-one-post-container-wrapper">
                    {post.title &&
                        <div className="main-one-post-container">
                            <div className="one-post-head">
                                <p className={`main-new-parahraph-${post.category}-color`}>{`${post.category[0].toUpperCase()}${post.category.slice(1)}`}</p>
                                <h2>{post.title}</h2>
                                <p style={{ fontSize: "14px", color: "rgb(155,155,155)" }}>
                                    {calculateDaysBeforeDate(post.createdAt)} by {post.writer}
                                </p>
                            </div>
                            <div className="one-post-img-container">
                                <img src={post.imageUrl} alt={post.title} />
                            </div>
                            <div className="one-post-content">
                                <p style={{ 
                                    fontSize: "16px", color: "rgb(155,155,155)",
                                    marginTop: "2em"
                                    }}>
                                    Written by <span className="one-post-writer">{post.writer}</span>
                                </p>
                                <div className="one-post-text-container">
                                <p className="one-post-subtitle">{post.subtitle}</p>
                                <p className="one-post-text">{post.content}</p>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="side-container-categories">
                        <Categories />
                        <FeaturedPosts />
                    </div>
                </div>
            </div>
        </div>
    )
}