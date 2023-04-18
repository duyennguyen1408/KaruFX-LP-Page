import React from "react";
import "./First_content.css";

function First_content() {
    return (
        <div className="Container">
            <img
                className="Container__title"
                src="./img/First-content-title.png"
            />

            <div className="Container__content1">
                <img
                    className="Container__content1__img-left"
                    src="./img/Second-content-ad.png" //thay img của second-content vì ảnh chất lượng hơn
                ></img>

                <div className="Container__content1__paragraph">
                    <img
                        className="Container__content1__paragraph-1"
                        src="./img/First-content-mark2.png"
                    />
                    <ul
                        className="Container__content1__paragraph-2"
                        type="none"
                    >
                        <li>
                            <img src="./img/First-content-mark.png" />
                            <span>
                                {" "}
                                初心者にもわかりやすい
                                <span className="change-color">取引ツール</span>
                            </span>
                        </li>
                        <li>
                            <img src="./img/First-content-mark.png" />
                            <span>
                                {" "}
                                <span className="change-color">
                                    約4,000円から
                                </span>
                                気軽に取引OK
                            </span>
                        </li>
                        <li>
                            <img src="./img/First-content-mark.png" />
                            <span>
                                {" "}
                                取引情報・分析機能
                                <span className="change-color">が充実！</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="Container__content2">
                <img src="./img/First-content-title2.png" />
                <p>さっそく口座開設してみる</p>
            </div>
        </div>
    );
}

export default First_content;
