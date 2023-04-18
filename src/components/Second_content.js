import React from "react";
import "./Second-content.css";

function Second_content() {
    return (
        <div className="Container2">
            <img src="./img/Second-content-img1.png" />
            <img src="./img/Second-content-img2.png" />

            <div className="Container2__content">
                <div className="Container2__content__heading">
                    <img src="./img/Second-content-h1.png" />
                    <hr />
                </div>

                <div className="Container2__content__text">
                    <div className="Container2__content__text--left">
                        <img src="./img/Second-content-left.png" />
                        <img src="./img/Second-content-ad.png" />
                    </div>

                    <div className="Container2__content__text--right">
                        <img
                            className="Container2__content__text--right1"
                            src="./img/Second-content-right.png"
                        />
                        <img src="./img/Second-content-ad2.png" />
                    </div>
                </div>

                <p className="Container2__content__arrow">公式サイトを見る</p>

                <ul className="Container2__content__list" type="none">
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
                            <span className="change-color">約4,000円から</span>
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

                <div className="Container2__content__message">
                    <img src="./img/Second-content-chatbox.png" />
                    <span>クチコミを見てみる</span>
                </div>

                <p>キャンペーン情報</p>

                <img src="./img/Second-content-ad3.png" />
                <p className="Container2__content__arrow">
                    キャンペーンの詳細を見る
                </p>
            </div>
            <hr />
        </div>
    );
}

export default Second_content;
