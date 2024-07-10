import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CategoriesLength } from "../../../../../Types/NewsTypes";
import { getNewsCateriesLength } from "../../../../../services/newsService";

import "./Categories.css";
import "./Categories-animation.css";

export default function Categories() {
    const [cateogriesLength, setCategoriesLength] = useState<CategoriesLength>(
        {
            environment: 0,
            fashion: 0,
            food: 0,
            lifestyle: 0,
            music: 0,
            technology: 0
        }
    );

    useEffect(() => {
        getNewsCateriesLength().then((data) => setCategoriesLength(data));
    }, []);

    return (
        <>
            <div className="categories-container">
                <h3 className="categories-title" style={{ marginTop: "0" }}>Categories</h3>
                <div className="list-of-categories">
                    {<Link to={"/categories/environment"}>
                        <div className="name-and-number-of-posts-wrapper">
                            <p className="category-name">Environment</p>
                            <p className="category-number-of-posts">{cateogriesLength.environment}</p>
                        </div>
                    </Link>}
                    {<Link  to={"/categories/fashion"}>
                        <div className="name-and-number-of-posts-wrapper">
                            <p className="category-name">Fashion</p>
                            <p className="category-number-of-posts">{cateogriesLength.fashion}</p>
                        </div>
                    </Link>}
                    {<Link to={"/categories/food"}>
                        <div className="name-and-number-of-posts-wrapper">
                            <p className="category-name">Food</p>
                            <p className="category-number-of-posts">{cateogriesLength.food}</p>
                        </div>
                    </Link>}
                    {<Link to={"/categories/lifestyle"}>
                        <div className="name-and-number-of-posts-wrapper">
                            <p className="category-name">Lifestyle</p>
                            <p className="category-number-of-posts">{cateogriesLength.lifestyle}</p>
                        </div>
                    </Link>}
                    {<Link to={"/categories/music"}>
                        <div className="name-and-number-of-posts-wrapper">
                            <p className="category-name">Music</p>
                            <p className="category-number-of-posts">{cateogriesLength.music}</p>
                        </div>
                    </Link>}
                    {<Link to={"/categories/technology"}>
                        <div className="name-and-number-of-posts-wrapper">
                            <p className="category-name">Technology</p>
                            <p className="category-number-of-posts">{cateogriesLength.technology}</p>
                        </div>
                    </Link>}
                </div>
            </div>
        </>
    )
}