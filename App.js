import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Stars from './components/Stars';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import Movie from './components/Movie';
import MovieList from './components/MovieList';


function App() {
//  const [reviews, setReviews] = useState([]);
//  const [form, setForm] = useState({ movieTitle: '', review: ''});


const [movies, setMovies] = useState ([
  {
  title: "One Missed Call",
  year: 2003, 
  image: "https://static.wikia.nocookie.net/listofdeaths/images/6/68/One_Missed_Call_poster.jpg/revision/latest?cb=20201222035834",
  summary: "One night at a party, Yumi's friend gets a weird voice message on her cell phone. The message is dated two days in the future and she can hear her own scream in it. Two days later Yumi's friend dies and Yumi starts to wonder if it had anything to do with the phone call. As fear starts spreading among the students at Yumi's school, Yumi soon realizes that she's also got one missed call."
  }, 
  {
  title: "Premonition",
  year: 2004, 
  image: "https://m.media-amazon.com/images/M/MV5BMTRjOWY5NTktZTZiZC00OTU4LWFiZjktZjMzMzllNWZjYjhhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  summary: "Premonition tells a chilling tale of a man who picks up a newspaper which foretells the future, including the tragic premonition of his daughter’s death in a car crash."
  }, 
  {
  title: "Ringu",
  year: 1998, 
  image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Ringu_%281998%29_Japanese_theatrical_poster.jpg",
  summary: "Two teenagers, Masami and Tomoko, talk about a videotape recorded by a boy in Izu which is fabled to bear a curse that kills the viewer seven days after watching. Tomoko reveals that a week ago, she and three of her friends watched a weird tape and received a call after watching. Tomoko goes downstairs and witnesses her TV turn on by itself. She later hears startling noises and turns around, only to be killed by an unseen force. Days later, Asakawa Reiko, a reporter investigating the popularity of the video curse, discovers that her niece Tomoko, and her three other friends, mysteriously died at the same time, on the same night, with their faces twisted in fear. She also discovers that Masami became insane from witnessing Tomoko's death and is institutionalized in a mental hospital. After stumbling upon Tomoko's photos from the past week, Reiko finds that the four teenagers stayed in a rental cabin in Izu."
  }, 

]); 
  
 return (
    <div className="App">
      <h1>Asian Horror Movie Reviews</h1>
    <MovieList />
     
    </div>
  );
}

export default App;
