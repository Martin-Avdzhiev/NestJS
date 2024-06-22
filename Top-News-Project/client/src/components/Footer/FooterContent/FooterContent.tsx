import { useEffect, useState } from "react";

import { getLatestNews } from "../../../services/newsService";
import { New } from "../../../Types/NewsTypes";
import FooterCard from "./FooterCard/FooterCard";
import "./FooterContent.css";

export default function FooterContent() {
    const [popularNews, setPopularNews] = useState<New[]>([]);
    const [talkedAbout, setTalkedAbout] = useState<New[]>([]);
    useEffect(() => {
        getLatestNews(4).then((data) => setPopularNews(data));
        getLatestNews(8).then((data) => setTalkedAbout(data.slice(0,4)));
    })

    return (
        <div className="footer-content-wrapper">
            <div className="footer-content">
                <div className="footer-card-wrapper">
                    <h2>Most popular</h2>
                    <FooterCard news={popularNews} />
                </div>
                <div className="footer-card-wrapper">
                    <h2>Talked about</h2>
                    <FooterCard news={talkedAbout} />
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