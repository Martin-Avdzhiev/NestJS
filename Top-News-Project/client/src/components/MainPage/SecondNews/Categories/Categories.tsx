import "./Categories.css";
import "./Categories-animation.css";

export default function Categories() {
    return (
        <>
            <div className="categories-container">
                <h3 className="categories-title">Categories</h3>
                <div className="list-of-categories">
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Environment</p>
                        <p className="category-number-of-posts">3</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Fashion</p>
                        <p className="category-number-of-posts">5</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Food</p>
                        <p className="category-number-of-posts">6</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Lifestyle</p>
                        <p className="category-number-of-posts">8</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Music</p>
                        <p className="category-number-of-posts">0</p>
                    </div>
                    <div className="name-and-number-of-posts-wrapper">
                        <p className="category-name">Technology</p>
                        <p className="category-number-of-posts">2</p>
                    </div>
                </div>
            </div>
        </>
    )
}