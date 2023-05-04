import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./Comment.scss";
import axios from "axios";

interface Props {
    handleClick(value: boolean): void;
    id: number;
}

const Comment: React.FC<Props> = ({ handleClick, id }) => {
    
    const [loading, setLoading] = useState<any>(false);
    const [posts, setPosts] = useState<any>([]);

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


    const found = posts.find((obj)  => {
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

const handleClick = (id: string) => {
    console.log(id);
}

const Title: React.FC<{ img: string}> = ({ img }) => {
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

const Content: React.FC<{content: string[]}> = ({ content}) => (
    <div>
        {content.map((text:string) => {
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

const Close: React.FC<{handleClick():void}> = ({ handleClick }) => (
    <div>
        <div className="Container4__button">
            <p>公式サイトを見る</p>
            <button onClick={handleClick}>閉じる</button>
        </div>
    </div>
);
export default Comment;
