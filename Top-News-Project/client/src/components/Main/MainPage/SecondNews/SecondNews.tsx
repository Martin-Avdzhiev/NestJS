import Categories from "./Categories/Categories";
import ColumnContainer from "./ColumnContainer/ColumnContainer";
import FeaturedPosts from "./FeaturedPosts/FeaturedPosts";

import "./SecondNews.css";

export default function SecondNews() {

    return (
        <>
            <div className="main-second-news-container-wrapper">
                <div className="main-second-news-container">
                    <div className="main-container-post">
                        <ColumnContainer index={0} category={"fashion"} />
                        <ColumnContainer index={0} category={"lifestyle"} />
                    </div>
                    <div className="side-container-categories">
                        <Categories />
                        <FeaturedPosts />

                    </div>
                </div>
            </div>
        </>
    )
}

//{firstCategoryNews.map((x) => ())} 
