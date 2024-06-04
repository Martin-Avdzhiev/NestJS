import { useEffect, useState } from "react";

import { getNewsByCategory } from "../../services/newsService";
import { New } from "../../Types/NewsTypes";
import { calculateDaysBeforeDate } from "../../services/dateService";

import "./SecondNews.css";

export default function SecondNews() {
    const [firstCategoryNews, setFirstCategoryNews] = useState<New[]>([]);
    useEffect(() => {
        getNewsByCategory("fashion")
            .then((data: New[]) => setFirstCategoryNews(data))
            .catch((error) => console.log(error));
    }, [])
    return (
        <>
            <div className="main-second-news-container-wrapper">
                <div className="main-second-news-container">
                    <div className="column-container">
                        {firstCategoryNews.length > 1 ? <div className="first-new-container">
                            <h2>Fashion</h2>
                            <img
                                src={firstCategoryNews[0].imageUrl}
                                alt={firstCategoryNews[0].title} />
                            <h4 style={{ color: "rgb(229,78,167)" }}>
                                {firstCategoryNews[0].category}
                            </h4>
                            <p className="first-new-timestamp">
                                {calculateDaysBeforeDate(firstCategoryNews[0].createdAt)}
                            </p>
                            <p className="firstnew-subtitle">
                                {firstCategoryNews[0].subtitle}
                            </p>
                        </div>

                            : null}
                    </div>
                    <div className="column-container">

                    </div>
                    <div className="categories-container">

                    </div>
                    <div className="featured-posts">

                    </div>
                </div>
            </div>
        </>
    )
}

//{firstCategoryNews.map((x) => ())} 
