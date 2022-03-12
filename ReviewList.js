import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

// a container inside of a Movie that houses Review components.

const ReviewList = ({ reviews }) => { 
    return (
        <div className="reviewList">
            <h2>Reviews</h2>
            {reviews.map(review => (
                <Review review={review} />
            ))}
        </div>
    );
};

export default ReviewList