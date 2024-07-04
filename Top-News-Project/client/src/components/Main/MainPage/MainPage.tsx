import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';

import { getMainNews } from "../../../services/newsService";
import { New } from "../../../Types/NewsTypes";
import SecondNews from "./SecondNews/SecondNews";
import Spinner from "../../Spinner/Spinner";
import MainNews from "./MainNews/MainNews.tsx";

import "./MainPage.css";


export default function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [mainNews, setMainNews] = useState<New[]>([]);


    const isUnder600Width = useMediaQuery({ query: '(max-width: 600px)' });
    const isUnder1023Width = useMediaQuery({ query: '(max-width: 1023px)' });

    useEffect(() => {
        getMainNews()
            .then((data: New[]) => {
                if (isUnder600Width) {
                    setMainNews(data.slice(0, 1));
                }
                else if (isUnder1023Width) {
                    setMainNews(data.slice(0, 2));
                }
                else {
                    setMainNews(data);
                }
                setIsLoading(false);
            })
            .catch((error) => console.log(error));

    }, [isUnder600Width, isUnder1023Width])
    return (
        <>
            {isLoading ? <Spinner /> :
                <>
                    <div className="main-new-container">
                        {mainNews.map((x) => (
                            <MainNews oneNew={x} key={x._id} length={mainNews.length}/>

                        ))}
                    </div>
                    <SecondNews />
                </>
            }
        </>
    )
}

