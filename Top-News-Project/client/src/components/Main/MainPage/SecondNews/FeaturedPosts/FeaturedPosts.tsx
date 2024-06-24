import { useEffect, useState } from "react";

import { New } from "../../../../../Types/NewsTypes";
import { CardScale } from "../../../../../Types/AnimationTypes";
import { getLatestNews } from "../../../../../services/newsService";
import { handleZoomIn, handleZoomOut } from "../../../../../animations/zoom";

import "./FeaturedPosts.css";
import { useNavigate } from "react-router-dom";

export default function FeaturedPosts() {
    const [latestNews, setLatestNews] = useState<New[]>([]);
    const [cardZoom, setCardZoom] = useState<{ [key: string]: CardScale }>({});

    const navigate = useNavigate();
    const redirectHandler = (id: string) => {
        navigate(`/post/${id}`);
    }

    useEffect(() => {
        getLatestNews(3).then((data) => setLatestNews(data));
    }, [])
    return (
        <>
            <div className="featured-posts-container">
                <h3 className="categories-title">Featured Posts</h3>
                <div className="featured-posts-wrapper">
                    {latestNews.length > 0 ? latestNews.map((x) => (
                         //TODO-1: Fix repeating results keys.
                        <div className="featured-post-card" key={x?._id + "123"}>
                            <div className="featured-post-img-conatainer">
                                <img
                                    onClick={() => redirectHandler(x?._id)}
                                    onMouseEnter={() => handleZoomIn(x?._id + "123", 1.1, setCardZoom)}
                                    onMouseLeave={() => handleZoomOut(x?._id + "123", 1, setCardZoom)}
                                    style={{
                                        transform: `scale(${x?._id ? cardZoom[x._id + "123"]?.zoom : 1})`,
                                        transition: "transform 0.3s ease-in-out",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        width: "100%"
                                    }}
                                    src={x.imageUrl} alt={x.title} />
                            </div>
                            <div className="featured-post-info">
                                <p className={`featured-post-category main-new-parahraph-${x.category}-color`}>{x.category[0].toUpperCase() + x.category.slice(1)}</p>
                                <h3 onClick={() => redirectHandler(x?._id)}
                                    className="featured-post-title red-text-animation"
                                    style={{ transition: "color 0.3s ease-in-out" }}>{x.title}</h3>
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
        </>
    )
}