import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { New } from '../../../../Types/NewsTypes';
import { CardScale } from '../../../../Types/AnimationTypes';
import { handleZoomIn, handleZoomOut } from '../../../../animations/zoom';
import { handleOpacityIn, handleOpacityOut } from '../../../../animations/opacity';
import { calculateDaysBeforeDate } from '../../../../services/dateService';

import "./MainNews.css";

export default function MainNews({ oneNew, length }: { oneNew: New, length: number }) {

    const [cardScales, setCardScales] = useState<{ [key: string]: CardScale }>({});

    const navigate = useNavigate();
    const redirectHandler = (id: string) => {
        navigate(`/post/${id}`);
    }

    return (
        <>
            <div className="wrapper-main-new-card" key={oneNew._id} style={{    width: `calc(100% / ${length})`}}>
                <div
                    className="main-new-card"
                    onClick={() => redirectHandler(oneNew._id)}
                    onMouseEnter={() => {
                        handleZoomIn(oneNew._id, 1.1, setCardScales);
                        handleOpacityIn(oneNew._id, 0.8, setCardScales);
                    }}
                    onMouseLeave={() => {
                        handleZoomOut(oneNew._id, 1, setCardScales);
                        handleOpacityOut(oneNew._id, 0.6, setCardScales);
                    }}
                    style={{
                        backgroundImage: `url(${oneNew.imageUrl})`,
                        backgroundColor: "black",
                        transform: `scale(${cardScales[oneNew._id] ? cardScales[oneNew._id].zoom : 1})`,
                        transition: "transform 0.2s ease-in-out",
                        width: "100%"
                    }}>
                    <div className="main-new-overlay"
                        style={{
                            opacity: `${cardScales[oneNew._id] ? cardScales[oneNew._id].opacity : 0.6}`,
                            transition: "opacity 0.2s ease-in-out",
                        }}
                    ></div>
                    <p className={`main-new-parahraph-${oneNew.category}`}>{`${oneNew.category[0].toUpperCase()}${oneNew.category.slice(1)}`}</p>
                    <h2>{oneNew.title}</h2>
                    <p className="main-card-timestamp">{calculateDaysBeforeDate(oneNew.createdAt)}</p>
                </div>
            </div>
        </>
    )
}