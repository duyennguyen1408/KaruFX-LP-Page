import React from "react";
import "./Header.scss";

function header() {
    return (
        <div className="heading">
            <div className="heading__title">
                <img src="./img/arrow-left.png" />
                <h2>FX口座情報</h2>
            </div>

            <div className="heading__image">
                <img src="./img/Header_img.png" alt="Title Image" />
            </div>
        </div>
    );
}

export default header;
