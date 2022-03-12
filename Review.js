import React from "react";

const Review = ({review}) => { 
    return (
        <div className="reviewItem">
            <h2>{review.movieTitle} </h2>
            <p>{review.review}</p>
        </div>
    )
}
export default Review
//A text review a user can leave on a movie.
