import React, { useState, useEffect } from "react";
import FeaturedMovies from './FeaturedMovies.js';
import MovieReviews from './MovieReviews.js';
import SearchMovie from "./SearchMovie.js";

function Home(){

    const [movies, setMovies] = useState(); 
    
    const [display, setDisplay] = useState("movieReviews");
    const [movieOnDisplay, setMovieOnDisplay] = useState([]);

    useEffect(()=>{
        fetch("/movies", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(r=>r.json())
        .then((response)=>{
            setMovies(response)
        })

    }, [])    

    return(
        <div className="container ">
            <SearchMovie setMovieOnDisplay={setMovieOnDisplay} setDisplay={setDisplay}/>
            {
                display === "movieReviews" ?
                <FeaturedMovies movies={movies} setDisplay={setDisplay} setMovieOnDisplay={setMovieOnDisplay}/>
                :
                <MovieReviews setDisplay={setDisplay} movies={movies} movieOnDisplay={movieOnDisplay} setMovieOnDisplay={setMovieOnDisplay}/>   
            }
        </div>
    )
}

export default Home;