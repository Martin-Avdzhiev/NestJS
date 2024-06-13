import Categories from "../Categories/Categories";
import ColumnContainer from "../ColumnContainer/ColumnContainer";

import "./SecondNews.css";

export default function SecondNews() {

    return (
        <>
            <div className="main-second-news-container-wrapper">
                <div className="main-second-news-container">

                    <ColumnContainer index={0} category={"fashion"} />
                    <ColumnContainer index={0} category={"lifestyle"} />
                    <Categories />
                    <div className="featured-posts">

                    </div>
                </div>
            </div>
        </>
    )
}

//{firstCategoryNews.map((x) => ())} 
