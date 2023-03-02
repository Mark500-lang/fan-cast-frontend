import React from "react";

function Cards ({movie, setDisplay, setMovieOnDisplay, container}){

    const {title, release_date, starring} = movie

    function handleClick(){
        if(!container) {
            setMovieOnDisplay(movie)
            setDisplay("movieSwitch")
            console.log(setDisplay)
        } else {
            console.log(movie)
        }
    }
    return(
        <div className="card movieCard" onClick={handleClick}>
            <h3>{title}</h3>
            <h5>{starring}</h5>
            <h6>{release_date}</h6>
        </div>
    )
}

export default Cards;