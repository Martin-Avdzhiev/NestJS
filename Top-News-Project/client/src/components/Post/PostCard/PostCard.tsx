import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getNews, getNewById } from '../../../services/newsService';
import { New } from '../../../Types/NewsTypes';
import { handleZoomIn, handleZoomOut } from '../../../animations/zoom';

import { calculateDaysBeforeDate } from '../../../services/dateService';
import { CardScale } from '../../../Types/AnimationTypes';

import "./PostCard.css";

export default function MainPost() {
    const { id } = useParams < string > ();
    const [bottomPosts, setBottomPosts] = useState < New[] > ([]);
    const [post, setPost] = useState < New > ({
        title: "",
        subtitle: "",
        content: "",
        imageUrl: "",
        category: "",
        writer: "",
        _id: "",
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    })

    const [cardScales, setCardScales] = useState < { [key: string]: CardScale } > ({});

    const navigate = useNavigate();
    const redirectHandler = (id: string) => {
        navigate(`/post/${id}`);
    }

    useEffect(() => {
        if (id) {
            const randomIndex = Math.floor(Math.random() * 10);
            Promise.all([
                getNewById(id).then((data) => setPost(data)),
                getNews().then((data) => setBottomPosts(data.slice(randomIndex, randomIndex + 2)))
            ]).catch((error) => console.log(error));

        }
    }, [id])
    return (
        <>
            {post.title &&
                <div className="main-one-post-container">
                    <div className="one-post-head">
                        <p className={`main-new-parahraph-${post.category}-color`}>{`${post.category[0].toUpperCase()}${post.category.slice(1)}`}</p>
                        <h2>{post.title}</h2>
                        <p style={{ fontSize: "14px", color: "rgb(155,155,155)" }}>
                            {calculateDaysBeforeDate(post.createdAt)} by {post.writer}
                        </p>
                    </div>
                    <div className="one-post-img-container">
                        <img src={post.imageUrl} alt={post.title} />
                    </div>
                    <div className="one-post-content">
                        <p style={{
                            fontSize: "16px", color: "rgb(155,155,155)",
                            marginTop: "2em"
                        }}>
                            Written by <span className="one-post-writer">{post.writer}</span>
                        </p>
                        <div className="one-post-text-container">
                            <p className="one-post-subtitle">{post.subtitle}</p>
                            <p className="one-post-text">{post.content}</p>
                            <div className="footer-socials post-socials">
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
                    <div className="one-bottom-posts">
                        {bottomPosts.length > 0 ? bottomPosts.map((x) => (
                            //TODO-1:
                            <div key={x._id + "12345"}>
                                <div>
                                    <img
                                        onMouseEnter={() => {
                                            handleZoomIn(x._id, 1.1, setCardScales);
                                        }}
                                        onMouseLeave={() => {
                                            handleZoomOut(x._id, 1, setCardScales);
                                        }}
                                        onClick={() => redirectHandler(x._id)}
                                        style={{
                                            transform: `scale(${cardScales[x._id] ? cardScales[x._id].zoom : 1})`,
                                            transition: "transform 0.3s ease-in-out",
                                            cursor: "pointer"
                                        }}
                                        src={x.imageUrl} alt={x.title} />
                                </div>
                                <p className="red-text-animation"
                                    style={{
                                        transition: "color 0.3s ease-in-out",
                                    }}
                                    onClick={() => redirectHandler(x._id)}
                                >{x.title}</p>
                            </div>))
                            : null}
                    </div>
                </div>
            }
        </>
    )
}