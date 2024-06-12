import { useEffect, useState } from "react";

import { getMainNews } from "../../services/newsService";
import { New } from "../../Types/NewsTypes";
import SecondNews from "../SecondNews/SecondNews";
import Spinner from "../Spinner/Spinner";

import "./MainPage.css";
import { calculateDaysBeforeDate } from "../../services/dateService";
import { handleZoomIn, handleZoomOut } from "../../animations/zoom";
import { handleOpacityIn, handleOpacityOut } from "../../animations/opacity";
export default function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [mainNews, setMainNews] = useState<New[]>([]);
    const [cardScales, setCardScales] = useState<{ [key: string]: {zoom:number, opacity :number} }>({});

    useEffect(() => {
        getMainNews()
            .then((data: New[]) => {
                setMainNews(data)
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [])
    return (
        <>
            {isLoading ? <Spinner /> : null}
            <div className="main-new-container">
                {mainNews.map((x) => (
                    <div className="wrapper-main-new-card" key={x._id}>


                        <div
                            className="main-new-card"
                            onMouseEnter={() => {
                                handleZoomIn(x._id, 1.1, setCardScales);
                                handleOpacityIn(x._id, 0.8, setCardScales);
                            }}
                            onMouseLeave={() => {
                                handleZoomOut(x._id, 1, setCardScales);
                                handleOpacityOut(x._id, 0.6, setCardScales);
                            }}
                            style={{
                                backgroundImage: `url(${x.imageUrl})`,
                                backgroundColor: "black",
                                transform: `scale(${cardScales[x._id] ? cardScales[x._id].zoom : 1})`,
                                transition: "transform 0.2s ease-in-out"
                            }}>
                            <div className="main-new-overlay"
                                style={{
                                    opacity: `${cardScales[x._id] ? cardScales[x._id].opacity : 0.6}`,
                                    transition: "opacity 0.2s ease-in-out",
                                }}
                            ></div>
                            <p className={`main-new-parahraph-${x.category}`}>{`${x.category[0].toUpperCase()}${x.category.slice(1)}`}</p>
                            <h2>{x.title}</h2>
                            <p className="main-card-timestamp">{calculateDaysBeforeDate(x.createdAt)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SecondNews />
        </>
    )
}

