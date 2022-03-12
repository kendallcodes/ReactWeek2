import React, { useState } from "react";
import App from "../App";


//a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

export const ReviewForm = ({form, reviews, setForm, setReviews}) => { 

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => { 
        e.preventDefault()
        setReviews([...reviews, form])
        setForm({ movieTitle: '', review: ''});
    };

        return (
        <form className="form" onSubmit={handleSubmit} >
            <h2>Review a Movie</h2> 
            <label htmlFor="movieTitle">Movie Title:</label>
           <input 
           type="text"
           placeholder="Movie Name"
           id="movieTitle"
           name="movieTitle"
           value={form.movieTitle}
           onChange={handleChange}
            />
            
            <label htmlFor="review">Review</label>
            <textarea
            value={form.review}
            placeholder="Enter your review here..."
            id="review"
            name="review"
            onChange={handleChange}
            />
            {/* <label>Movie Rating: </label>
            <Stars /> */}
            <button type="submit">Submit</button>
        </form>
        );
};
export default ReviewForm