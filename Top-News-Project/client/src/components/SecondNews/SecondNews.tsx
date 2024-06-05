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
                            <h2 className="category-title">Fashion</h2>
                            <div className="first-new-card-container">
                                <div className="first-new-card-container-img-wrapper">
                                    <img
                                        src={firstCategoryNews[0].imageUrl}
                                        alt={firstCategoryNews[0].title} />
                                </div>
                                <h4 style={{ color: "rgb(229,78,167)" }}>
                                    {`${firstCategoryNews[0].category[0].toUpperCase()}${firstCategoryNews[0].category.slice(1)}`}
                                </h4>
                                <h3>{firstCategoryNews[0].title}</h3>
                                <p className="first-new-timestamp" style={{ color: "rgb(155,155,155)" }}>
                                    {calculateDaysBeforeDate(firstCategoryNews[0].createdAt)}
                                </p>
                                <p className="firstnew-subtitle">
                                    {firstCategoryNews[0].title.length > 100 ?
                                        `${firstCategoryNews[0].title.slice(0, 100)}...` :
                                        `${firstCategoryNews[0].title.slice(0, 100)}`}
                                </p>
                            </div>
                            <div className="secondary-news-container">
                                {firstCategoryNews.slice(1).map((x) => (
                                    <div className="secondary-new-card-container" key={x._id}>
                                        <div className="secondary-img-container">
                                            <img src={x.imageUrl} alt={x.title} />
                                        </div>
                                        <div className="secondary-new-card-info">
                                        <p style={{ color: "rgb(229,78,167)" }}>
                                            {`${x.category[0].toUpperCase()}${x.category.slice(1)}`}
                                        </p>
                                        <h3>{x.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
