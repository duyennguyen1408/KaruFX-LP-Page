import React from "react";
import { Rating } from "react-simple-star-rating";
import "./Star_rating.css";

function Star_rating(props) {
    return (
        <div className="Rate">
            <Rating
                size={20}
                initialValue={Math.floor(props.rating)}
                readonly
            />

            <span>{props.rate}</span>
        </div>
    );
}

export default Star_rating;
