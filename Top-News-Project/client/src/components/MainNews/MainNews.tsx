import { useEffect, useState } from "react"
import { getMainNews } from "../../services/newsService"
import { New } from "../../Types/NewsTypes";

import "./MainNews.css";

export default function MainNews() {
    const [mainNews, setMainNews] = useState<New[]>([]);
    useEffect(() => {
        getMainNews()
        .then((data: New[]) => setMainNews(data))
        .catch((error) => console.log(error));

    }, [])
    return (
        <>
        <div className="main-new-container">
            {mainNews.map((x) => (
                <div key={x._id} className="main-new-card" style={{backgroundImage: `url(${x.imageUrl})`}}>
                    <div className="main-new-overlay"></div>
                    <p className={`main-new-parahraph-${x.category}`}>{x.category}</p>
                    <h2>{x.title}</h2>
                    </div>
            ))}
            </div>
        </>
    )
}