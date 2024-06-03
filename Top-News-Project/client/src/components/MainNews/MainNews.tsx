import { useEffect, useState } from "react";

import { getMainNews } from "../../services/newsService";
import { New } from "../../Types/NewsTypes";

import "./MainNews.css";

export default function MainNews() {
    const [mainNews, setMainNews] = useState<New[]>([]);
    const [cardScales, setCardScales] = useState<{ [key: string]: number[] }>({});
    const handleZoomIn = (cardId: string) => {
        setCardScales((prevScales) => ({
            ...prevScales,
            [cardId]: [1.1, 0.8],
        }));
    };

    const handleZoomOut = (cardId: string) => {
        setCardScales((prevScales) => ({
            ...prevScales,
            [cardId]: [1, 0.6],
        }));
    };
    useEffect(() => {
        getMainNews()
            .then((data: New[]) => setMainNews(data))
            .catch((error) => console.log(error));

    }, [])
    return (
        <>
            <div className="main-new-container">
                {mainNews.map((x) => (
                    <div className="wrapper-main-new-card">

                        <div
                            className="main-new-card"
                            key={x._id}
                            onMouseEnter={() => handleZoomIn(x._id)}
                            onMouseLeave={() => handleZoomOut(x._id)}
                            style={{
                                backgroundImage: `url(${x.imageUrl})`,
                                backgroundColor: "black",
                                transform: `scale(${cardScales[x._id] ? cardScales[x._id][0] : 1})`,
                                transition: "transform 0.2s ease-in-out"
                            }}>
                            <div className="main-new-overlay"
                                style={{
                                    opacity: `${cardScales[x._id] ? cardScales[x._id][1] : 0.6}`,
                                    transition: "opacity 0.2s ease-in-out",
                                }}
                            ></div>
                            <p className={`main-new-parahraph-${x.category}`}>{x.category}</p>
                            <h2>{x.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

