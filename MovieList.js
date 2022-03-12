import React from 'react'; 
import Movie from './Movie';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import App from '../App';


// a container for all the Movie components and their data.


    export default class MovieList extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                movies: props.movies,
                Title: props.title,
                Image: props.image,
                Year: props.year,
                Summary: props.summary
    
            };
        }
    
    render() {

  let movies; 
   
  return ( 
        
        movies.map((movie, index) => (
            <div>
                <img src={movie.image} alt=""></img>
              
                <div className='card-header text-white'>
                 {movie.title}</div>
             <div className='card-body'>
               Year: {movie.year} 
               {movie.summary} 
            </div>
            <div className='card-footer'>

            {movie.reviews} 
            {movies}
            </div>
            </div>
        ))
       
        )

    };
        
}