import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getLatestNews } from "../../../services/newsService";
import { New } from "../../../Types/NewsTypes";
import FooterCard from "./FooterCard/FooterCard";
import "./FooterContent.css";



export default function FooterContent() {
    const [popularNews, setPopularNews] = useState<New[]>([]);
    const [talkedAbout, setTalkedAbout] = useState<New[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        Promise.all([
            getLatestNews(4).then((data) => setPopularNews(data)),
            getLatestNews(8).then((data) => setTalkedAbout(data.slice(0, 4)))
        ])
            .then(() => {
                setIsLoading(false);
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            {!isLoading &&
                <div className="footer-content-wrapper">
                    <div className="footer-content">
                        <div className="footer-card-wrapper">
                            <h2 className="footer-container-title">Most popular</h2>
                            <FooterCard news={popularNews} />
                        </div>
                        <div className="footer-card-wrapper">
                            <h2 className="footer-container-title">Talked about</h2>
                            <FooterCard news={talkedAbout} />
                        </div>
                        <div className="footer-side-container">
                            <h2 className="footer-container-title">Video of the day</h2>
                            <div className="video-wrapper">
                                <iframe
                                    width="318"
                                    height="150"
                                    src="https://www.youtube.com/embed/XsEMu5UCy0g"
                                    title="Irish Stew of Sindidun - Take Me High (Official)"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="footer-join-us">
                                <h2 className="footer-container-title">Join us</h2>
                                <div className="footer-socials">
                                    <ul>
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                                        <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}