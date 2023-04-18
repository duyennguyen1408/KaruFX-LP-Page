import React from "react";
import "./Header.css";

function header() {
    return (
        <div className="heading">
            <h2 className="heading__title">FX口座情報</h2>
            <div className="heading__image">
                <img src="./img/Header_img.png" alt="Title Image" />
            </div>
        </div>
    );
}

export default header;
