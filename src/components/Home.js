import React, { useState, useEffect } from "react";
//import SearchMovie from "./SearchMovie.js";
import FeaturedMovies from './FeaturedMovies.js';
import MovieReviews from './MovieReviews.js';

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

    /*const handleSearch=(e)=> {
        e.preventDefault()
        setQuery(e.target.value)
        console.log(setQuery)
    }*/

    return(
        <div className="container ">
            
            {
                display === "movieReviews" ?
                <FeaturedMovies movies={movies} setDisplay={setDisplay} setMovieOnDisplay={setMovieOnDisplay}/>
                :
                <MovieReviews setDisplay={setDisplay} movieOnDisplay={movieOnDisplay} setMoviesOnDisplay={setMovieOnDisplay}/>   
            }
        </div>
    )
}
//<SearchMovie movies={movies} handleSearch={handleSearch}/>
export default Home;