import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./First_content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import React_modal from "../React_modal/React_modal";
import Comment from "../Comment/Comment";

Modal.setAppElement("#root");
function First_content() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);

            const response = await axios.get("./data/Content.json");
            console.log(response);
            setPosts(response.data);
            setLoading(false);
        };
        loadPost();
    }, []);
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {loading ? (
                    "Loading..."
                ) : (
                    <div>
                        {posts &&
                            posts.map((item) => (
                                <SwiperSlide>
                                    <div className="Container" key={item.id}>
                                        <Title img={item.title} />

                                        <Content_1
                                            img={item.ad}
                                            img1={item.img1}
                                            text={item.text}
                                            content={item.content}
                                        />

                                        <Content_2
                                            img={item.img}
                                            id={item.commentID}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </div>
                )}
            </Swiper>
        </div>
    );
}

const Title = ({ img }) => (
    <div>
        <img className="Container__title" src={img} />
    </div>
);

const Content_1 = ({ img, img1, text, content }) => (
    <div>
        <div className="Container__content1">
            <img className="Container__content1__img-left" src={img}></img>

            <div className="Container__content1__paragraph">
                <div className="Container__content1__paragraph-1">
                    {img1 && <img src={img1} />}
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                </div>

                {content.map((text1) => {
                    return (
                        <div>
                            <ul
                                className="Container__content1__paragraph-2"
                                type="none"
                            >
                                <li>
                                    <img src="./img/First-content-mark.png" />
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: text1,
                                        }}
                                    ></span>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

const Content_2 = ({ img, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (value) => {
        setIsOpen(value);
    };
    return (
        <div>
            <div className="Container__content2">
                <img src={img} />
                <div className="Container__content2__arrow">
                    <button onClick={() => handleClick(true)}>
                        さっそく口座開設してみる
                    </button>
                    <React_modal isOpen={isOpen}>
                        <Comment id={id} handleClick={handleClick} />
                    </React_modal>
                    <img src="./img/arrow-right.png" />
                </div>
            </div>
        </div>
    );
};

export default First_content;
