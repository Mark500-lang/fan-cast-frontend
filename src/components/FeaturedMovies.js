import React from "react";
import Cards from "./Cards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function FeaturedMovies({movies, setDisplay, setMovieOnDisplay}){

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

    const FeaturedFilms= movies && movies.map((movie)=> <Cards movie={movie}
            setDisplay={setDisplay}
            setMovieOnDisplay={setMovieOnDisplay}
            key={movie.id}
            />)
    return(
        <>
          <h1 className='text-center'>Featured Films</h1>
          <div className="container">
            {FeaturedFilms}
          </div>
        </>
    )
}
/*<div className="container "></div><div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>*/
export default FeaturedMovies;