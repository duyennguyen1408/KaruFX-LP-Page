import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="Container3">
            <div className="Container3__icon">
                <img src="./img/Footer-1.png" />
                <span>予想画面</span>
            </div>
            <div className="Container3__icon">
                <img src="./img/Footer-2.png" />
                <span>口座比較</span>
            </div>
            <div className="Container3__icon">
                <img src="./img/Footer-3.png" />
                <span>タイムライン</span>
            </div>
            <div className="Container3__icon">
                <img src="./img/Footer-4.png" />
                <span>スクール</span>
            </div>
            <div className="Container3__icon">
                <img src="./img/Footer-5.png" />
                <span>成績</span>
            </div>
        </div>
    );
}

export default Footer;
