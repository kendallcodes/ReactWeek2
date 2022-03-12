import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import App from "../App";
import Review from "./Review";



//	Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)

    
    const Movie = ({ image, summary, year, title}) => {


            return (
                <div id="movie">
                <h2 id="movieTitle"> {this.props.Title}</h2> 
                <img id="movieImage" src={this.props.Image} alt='' className="movieImage" height = "400px"/> 
                <p id="movieSummary">Summary: {this.props.Summary}</p>
               <ul>
                    <li id="movieYear"> Year {this.props.Year} </li>
                </ul>
                
                <ReviewList />
                <ReviewForm />
                </div>
                
            );
        
    
    }
    
    export default Movie

        
        
 



