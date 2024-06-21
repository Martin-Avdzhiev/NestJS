import { useEffect, useState } from "react";

import { New } from "../../../../../Types/NewsTypes";
import { CardScale } from "../../../../../Types/AnimationTypes";
import { getLatestNews } from "../../../../../services/newsService";
import { handleZoomIn, handleZoomOut } from "../../../../../animations/zoom";

import "./FeaturedPosts.css";

export default function FeaturedPosts() {
    const [latestNews, setLatestNews] = useState<New[]>([]);
    const [cardZoom, setCardZoom] = useState<{ [key: string]: CardScale }>({});
    useEffect(() => {
        getLatestNews(3).then((data) => setLatestNews(data));
    })
    return (
        <>
            <div className="featured-posts-container">
                <h3 className="categories-title">Featured Posts</h3>
                <div className="featured-posts-wrapper">
                    {latestNews.length > 0 ? latestNews.map((x) => (

                        <div className="featured-post-card" key={x?._id + "123"}>
                            <div className="featured-post-img-conatainer">
                                <img
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
                                <h3 className="featured-post-title">{x.title}</h3>
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
        </>
    )
}