import { useState } from "react";

import { New } from "../../../../Types/NewsTypes";
import { calculateDaysBeforeDate } from "../../../../services/dateService";
import { handleZoomIn, handleZoomOut } from "../../../../animations/zoom";

import "./FooterCard.css";
import { CardScale } from "../../../../Types/AnimationTypes";
import { useNavigate } from "react-router-dom";

export default function FooterCard({ news }: { news: New[] }) {
    const [cardScales, setCardScales] = useState<{ [key: string]: CardScale }>({});

    const navigate = useNavigate();
    const redirectHandler = (id:string) => {
        navigate(`/post/${id}`);
    }
    
    return (
        <>
            {news.length > 0 ? news.map((x) => (
                <div className="footer-card" key={x._id + "qwerty"}>
                    <div className="footer-card-img-wrapper">
                        <img
                        onClick={()=> redirectHandler(x._id)}
                        onMouseEnter={() => handleZoomIn(x._id + "qwerty", 1.1, setCardScales)}
                        onMouseLeave={() => handleZoomOut(x._id + "qwerty", 1, setCardScales)}
                            style={{
                                transform: `scale(${cardScales[x._id + "qwerty"] ? cardScales[x._id + "qwerty"].zoom : 1})`,
                                transition: "transform 0.2s ease-in-out",
                                cursor: "pointer"
                            }}
                            src={x.imageUrl} alt={x.title} />
                    </div>
                    <div className="footer-card-info">
                        <h4
                            onClick={()=> redirectHandler(x._id)}
                            className="footer-card-title red-text-animation"
                            style={{
                                transition: "color 0.3s ease-in-out",
                            }}>
                            {x.title}
                        </h4>
                        <p className="footer-card-timestamp">
                            {calculateDaysBeforeDate(x.createdAt)}
                        </p>
                    </div>
                </div>
            )) : null}
        </>
    )
}