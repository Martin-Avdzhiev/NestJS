import { useEffect, useState } from "react";
import { New } from "../../Types/NewsTypes";
import { calculateDaysBeforeDate } from "../../services/dateService";
import { getNewsByCategory } from "../../services/newsService";

import "./ColumnContainer.css";
export default function ColumnContainer({index,category} : {index:number, category:string}){
    const [firstCategoryNews, setFirstCategoryNews] = useState<New[]>([]);
    useEffect(() => {
        getNewsByCategory(category)
            .then((data: New[]) => setFirstCategoryNews(data))
            .catch((error) => console.log(error));
    }, [])
    return (
        <div className="column-container">
        {firstCategoryNews.length > 0 ? <div className="first-new-container">
            <h2 className="category-title">Fashion</h2>
            <div className="first-new-card-container">
                <div className="first-new-card-container-img-wrapper">
                    <img
                        src={firstCategoryNews[index].imageUrl}
                        alt={firstCategoryNews[index].title} />
                </div>
                <h4 style={{ color: "rgb(229,78,167)" }}>
                    {`${firstCategoryNews[0].category[0].toUpperCase()}${firstCategoryNews[index].category.slice(1)}`}
                </h4>
                <h3>{firstCategoryNews[0].title}</h3>
                <p className="first-new-timestamp" style={{ color: "rgb(155,155,155)" }}>
                    {calculateDaysBeforeDate(firstCategoryNews[0].createdAt)}
                </p>
                <p className="firstnew-subtitle">
                    {firstCategoryNews[index].title.length > 100 ?
                        `${firstCategoryNews[index].title.slice(0, 100)}...` :
                        `${firstCategoryNews[index].title.slice(0, 100)}`}
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
    )
}