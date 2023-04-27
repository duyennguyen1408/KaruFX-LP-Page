import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./Comment.css";
import axios from "axios";

function Comment({ handleClick, id }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true); // Till the data is fetch using API the Loading page will show.

            const response = await axios.get("./data/Comment.json"); // Await make wait until that promise (axios.get(url)) settles and return data
            console.log(response);
            setPosts(response.data); // After fetching, data stored it in posts state.
            setLoading(false); // Close Loading page
        };
        loadPost(); // call Function
    }, []);

    const found = posts.find((obj) => {
        return obj.id === id;
    });
    return (
        <div>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {found && (
                        <div className="Container4" key={posts.id}>
                            <Title img={found.title} />
                            <Content content={found.content} />
                            <Close handleClick={() => handleClick(false)} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const Title = ({ img }) => {
    return (
        <div>
            <div className="Container4__title">
                <img src={img} />
                <span>クチコミ一覧</span>
                <hr />
            </div>
        </div>
    );
};

const Content = ({ content }) => (
    <div>
        {content.map((text) => {
            return (
                <div>
                    <div className="Container4__content">
                        <img src="./img/Pic.png" />
                        <span dangerouslySetInnerHTML={{ __html: text }}></span>
                    </div>
                    <hr />
                </div>
            );
        })}
    </div>
);

const Close = ({ handleClick }) => (
    <div>
        <div className="Container4__button">
            <p>公式サイトを見る</p>
            <button onClick={handleClick}>閉じる</button>
        </div>
    </div>
);
export default Comment;
