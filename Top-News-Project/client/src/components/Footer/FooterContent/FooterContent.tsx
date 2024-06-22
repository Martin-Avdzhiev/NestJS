import { useEffect, useState } from "react";

import { getLatestNews } from "../../../services/newsService";
import { New } from "../../../Types/NewsTypes";
import { calculateDaysBeforeDate } from "../../../services/dateService";

import "./FooterContent.css";

export default function FooterContent() {
    const [popularNews, setPopularNews] = useState<New[]>([]);
    const [talkedAbout, setTalkedAbout] = useState<New[]>([]);
    useEffect(() => {
        getLatestNews(4).then((data) => setPopularNews(data));
        getLatestNews(7).then((data) => setTalkedAbout(data.slice(4)));
    })

    return (
        <div className="footer-content-wrapper">
            <div className="footer-content">
                <div className="footer-most-popular">
                    <h2>Most popular</h2>
                    {popularNews.length > 0 ? popularNews.map((x) => (
                        <div className="footer-most-popular-card" key={x._id}>
                            <div className="footer-card-img-wrapper">
                                <img src={x.imageUrl} alt={x.title} />
                            </div>
                            <div className="footer-card-info">
                                <h4
                                    className="footer-card-title red-text-animation"
                                    style={{
                                        transition: "color 0.3s ease-in-out",
                                    }}>
                                    {x.title}
                                </h4>
                                <p className="footer-card-timestamp">{calculateDaysBeforeDate(x.createdAt)}</p>
                            </div>
                        </div>
                    )) : null}
                </div>
                <div className="footer-talked-about">
                    <p>1</p>
                </div>
                <div className="footer-side-div">
                    <p>1</p>

                    <div className="footer-video">


                    </div>
                    <div className="footer-join-us"></div>

                </div>
            </div>
        </div>
    )
}