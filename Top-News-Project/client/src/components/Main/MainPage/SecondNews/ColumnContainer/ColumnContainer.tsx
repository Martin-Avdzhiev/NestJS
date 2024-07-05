import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { New } from "../../../../../Types/NewsTypes";
import { calculateDaysBeforeDate } from "../../../../../services/dateService";
import { getNewsByCategory } from "../../../../../services/newsService";
import { handleZoomIn, handleZoomOut } from "../../../../../animations/zoom";

import "./ColumnContainer.css";
import { CardScale } from "../../../../../Types/AnimationTypes";
export default function ColumnContainer({ index, category }: { index: number, category: string }) {
    const [cardZoom, setCardZoom] = useState<{ [key: string]: CardScale }>({});
    const [firstCategoryNews, setFirstCategoryNews] = useState<New[]>([]);

    const navigate = useNavigate();
    const redirectHandler = (id: string) => {
        navigate(`/post/${id}`);
    }

    useEffect(() => {
        getNewsByCategory(category)
            .then((data: New[]) => {
                setFirstCategoryNews(data)
            })
            .catch((error) => console.log(error));
    }, [])
    return (
        <div className="column-container">
            {firstCategoryNews.length > 0 ?
                <div className="first-new-container">
                    <h2 className={`category-title main-new-parahraph-${firstCategoryNews[index].category}-border-top`}>
                        {firstCategoryNews[index].category}
                    </h2>
                    <div className="first-new-card-container">
                        <div className="first-new-card-container-img-wrapper" style={{ width: "90%", margin: "0 auto" }}
                        >
                            <img
                                onClick={() => redirectHandler(firstCategoryNews[index]._id)}
                                onMouseEnter={() => handleZoomIn(firstCategoryNews[index]._id, 1.1, setCardZoom)}
                                onMouseLeave={() => handleZoomOut(firstCategoryNews[index]._id, 1, setCardZoom)}
                                style={{
                                    transform: `scale(${firstCategoryNews[index]._id ? cardZoom[firstCategoryNews[index]._id]?.zoom : 1})`,
                                    transition: "transform 0.3s ease-in-out",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    width: "100%"
                                }}
                                src={firstCategoryNews[index].imageUrl}
                                alt={firstCategoryNews[index].title} />
                        </div>
                        <h4 className={`main-new-parahraph-${firstCategoryNews[index].category}-color`}>
                            {`${firstCategoryNews[0].category[0].toUpperCase()}${firstCategoryNews[index].category.slice(1)}`}
                        </h4>
                        <h3
                            onClick={() => redirectHandler(firstCategoryNews[index]._id)}
                            className="red-text-animation"
                            style={{
                                transition: "color 0.3s ease-in-out"
                            }}>
                            {firstCategoryNews[0].title}</h3>
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
                                    <img
                                        onClick={() => redirectHandler(x._id)}
                                        onMouseEnter={() => handleZoomIn(x._id, 1.05, setCardZoom)}
                                        onMouseLeave={() => handleZoomOut(x._id, 1, setCardZoom)}
                                        style={{
                                            transform: `scale(${x._id ? cardZoom[x._id]?.zoom : 1})`,
                                            transition: "transform 0.3s ease-in-out",
                                            overflow: "hidden",
                                            cursor: "pointer",
                                            width: "100%"
                                        }}
                                        src={x.imageUrl} alt={x.title} />
                                </div>
                                <div className="secondary-new-card-info">
                                    <p className={`main-new-parahraph-${x.category}-color`}>
                                        {`${x.category[0].toUpperCase()}${x.category.slice(1)}`}
                                    </p>
                                    <h3 className="red-text-animation"  onClick={() => redirectHandler(x._id)} style={{
                                        transition: "color 0.3s ease-in-out"
                                    }}
                                    >{x.title.length > 20 ?
                                        `${x.title.slice(0, 20)}...` :
                                        `${x.title.slice(0, 20)}`}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                : null}
        </div>
    )
}