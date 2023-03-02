import React from "react";
import Cards from "./Cards";

function FeaturedMovies({movies, setDisplay, setMovieOnDisplay}){

    const FeaturedFilms= movies && movies.map((movie)=> <Cards movie={movie}
            setDisplay={setDisplay}
            setMovieOnDisplay={setMovieOnDisplay}
            key={movie.id}
            />)
    return(
        <>
        <h1 className='text-center'>Featured Films</h1>
        <div className="container ">
        
        {FeaturedFilms}
        </div>
        </>
    )
}

export default FeaturedMovies;