import { useEffect, useState } from "react";

import { New } from "../../../Types/NewsTypes";
import { CardScale } from "../../../Types/AnimationTypes";
import { getLatestNews } from "../../../services/newsService";
import { handleZoomIn, handleZoomOut } from "../../../animations/zoom";
import { calculateDaysBeforeDate } from "../../../services/dateService";

import "./LatestArticles.css";

export default function LatestArticles(){
    const [latestNews, setLatestNews] = useState<New[]>([]);
    const [cardZoom, setCardZoom] = useState<{ [key: string]: CardScale }>({});
    useEffect(() => {
        getLatestNews(10).then((data) => setLatestNews(data));
    })
    return (
        <>
        <div className="latest-posts-container">
                <h3 className="categories-title main-new-parahraph-fashion-border-top">Latest Articles</h3>
                <div className="latest-posts-wrapper">
                    {latestNews.length > 0 ? latestNews.map((x) => (

                        <div className="latest-post-card" key={x?._id + "1234"}>
                            <div className="latest-post-img-conatainer">
                                <img
                                    onMouseEnter={() => handleZoomIn(x?._id + "1234", 1.1, setCardZoom)}
                                    onMouseLeave={() => handleZoomOut(x?._id + "1234", 1, setCardZoom)}
                                    style={{
                                        transform: `scale(${x?._id ? cardZoom[x._id + "1234"]?.zoom : 1})`,
                                        transition: "transform 0.3s ease-in-out",
                                        overflow: "hidden",
                                        cursor: "pointer"
                                    }}
                                    src={x.imageUrl} alt={x.title} />
                            </div>
                            <div className="latest-post-info">
                                <p className={`latest-post-category main-new-parahraph-${x.category}-color`}>{x.category[0].toUpperCase() + x.category.slice(1)}</p>
                                <h3 className="latest-post-title">{x.title}</h3>
                                <p className="latest-post-timestamp">{calculateDaysBeforeDate(x.createdAt)}</p>
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
        </>
    )
}