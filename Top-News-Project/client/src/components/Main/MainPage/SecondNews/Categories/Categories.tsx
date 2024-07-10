import { useEffect, useState } from "react";

import "./Categories.css";
import "./Categories-animation.css";
import { CategoriesLength } from "../../../../../Types/NewsTypes";
import { getNewsCateriesLength } from "../../../../../services/newsService";

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
    },[]);

    return (
        <>
            <div className="categories-container">
                <h3 className="categories-title" style={{ marginTop: "0" }}>Categories</h3>
                <div className="list-of-categories">
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Environment</p>
                        <p className="category-number-of-posts">{cateogriesLength.environment}</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Fashion</p>
                        <p className="category-number-of-posts">{cateogriesLength.fashion}</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Food</p>
                        <p className="category-number-of-posts">{cateogriesLength.food}</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Lifestyle</p>
                        <p className="category-number-of-posts">{cateogriesLength.lifestyle}</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Music</p>
                        <p className="category-number-of-posts">{cateogriesLength.music}</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Technology</p>
                        <p className="category-number-of-posts">{cateogriesLength.technology}</p>
                    </div>
                </div>
            </div>
        </>
    )
}