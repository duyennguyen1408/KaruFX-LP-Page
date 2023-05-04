import React from "react";
import { Rating } from "react-simple-star-rating";
import "./Star_rating.scss";

interface Props{
    rating:number;
    rate:number;
}

const Star_rating: React.FC<Props> = ({rating, rate}) => {
    return (
        <div className="Rate">
            <Rating
                size={20}
                initialValue={Math.floor(rating)}
                readonly
            />

            <span>{rate}</span>
        </div>
    );
}

export default Star_rating;
