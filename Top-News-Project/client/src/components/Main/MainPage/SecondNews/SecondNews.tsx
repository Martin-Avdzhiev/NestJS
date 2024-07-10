import LatestArticles from "../../LatestArticles/LatestArticles";
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
                        <ColumnContainer index={0} category={"food"} />
                        <ColumnContainer index={0} category={"environment"} />
                        <LatestArticles/>
                    </div>
                    <div className="side-container-categories">
                        <Categories />
                        <FeaturedPosts limit={3} />
                    </div>
                </div>
            </div>
        </>
    )
}

//{firstCategoryNews.map((x) => ())} 
