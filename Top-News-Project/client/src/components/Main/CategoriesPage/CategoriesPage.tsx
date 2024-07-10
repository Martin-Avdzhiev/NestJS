import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { New } from "../../../Types/NewsTypes";
import { getNewsByCategory } from "../../../services/newsService";
import { calculateDaysBeforeDate } from "../../../services/dateService";
import { handleZoomIn, handleZoomOut } from "../../../animations/zoom";
import { CardScale } from "../../../Types/AnimationTypes";

import FeaturedPosts from "../MainPage/SecondNews/FeaturedPosts/FeaturedPosts";

import "./CategoriesPage.css";

export default function CategoriesPage() {
    const { category } = useParams();
    const [news, setNews] = useState<New[]>([]);
    const [cardScales, setCardScales] = useState<{ [key: string]: CardScale }>({});

    const navigate = useNavigate();
    const redirectHandler = (id: string) => {
        navigate(`/post/${id}`);
    }


    useEffect(() => {
        if (category) {
            getNewsByCategory(category).then((data) => setNews(data));
        }
    }, [])

    return (
        <>
            <div className="category-page-container-wrapper">
                <div className="category-page-container">
                    <h3
                        className={`category-page-title main-new-parahraph-${category}-border-top`}>
                        category - {category}
                    </h3>
                    <div className="category-page-posts-container">
                        {news.length > 0 ?
                            news.map((x) => (
                                <div className="category-post-card">
                                    <div className="category-post-img-container"
                                        onClick={() => redirectHandler(x._id)}>
                                        <img src={x.imageUrl} alt={x.title}
                                            onMouseEnter={() => {
                                                handleZoomIn(x._id, 1.15, setCardScales);
                                            }}
                                            onMouseLeave={() => {
                                                handleZoomOut(x._id, 1, setCardScales);
                                            }}
                                            style={{
                                                transform: `scale(${cardScales[x._id] ? cardScales[x._id].zoom : 1})`,
                                                transition: "transform 0.3s ease-in-out",
                                                width: "100%"
                                            }}
                                        />
                                    </div>
                                    <div className="category-post-info">
                                        <p className={`latest-post-category main-new-parahraph-${category}-color`}>{category && category[0].toString().toUpperCase() + category.slice(1)}</p>
                                        <h2 className="red-text-animation"
                                            style={{ transition: "color 0.3s ease-in-out 0s" }}>{x.title}</h2>
                                        <p className="category-post-timestamp">{calculateDaysBeforeDate(x.createdAt)}</p>
                                    </div>
                                </div>
                            ))
                            : null}
                    </div>
                </div>
                <div className="side-container-categories">
                    <FeaturedPosts limit={5} />
                </div>
            </div>
        </>
    )
}