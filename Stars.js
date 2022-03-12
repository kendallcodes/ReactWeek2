import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; 

const Stars = () => { 

    const [rating, setRating] = useState(null); 
    const [hover, setHover] = useState(null);


    return (
    <div>
        {[ ...Array(5)].map((star, index) => { 
            const ratingValue = index + 1;

            return (
            <label>
                <input type="radio" 
                className='star-rating' 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
               
                /> 
                <FaStar 
                className='stars' 
                color={ratingValue <= hover || rating ? "#ffc107" : "#e4e5e9"} 
                size={50} 
                onMouseOver={() => setHover(ratingValue)}
                onMouseEnter={() => setHover(null)}
                />
           </label>
            );
        })}
          <p>The rating is {rating}.</p>
       </div>
    );

    
};

export default Stars; 