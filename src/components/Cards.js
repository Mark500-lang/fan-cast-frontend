import React from "react";

function Cards ({movie, setDisplay, setMovieOnDisplay, container}){

    const {title, starring} = movie

    function handleClick(){
        if(!container) {
            setMovieOnDisplay(movie)
            setDisplay("movieSwitch")
        } else {
            console.log(movie)
        }
    }
    return(
        <div className="card movieCard" onClick={handleClick}>
            <h3>{title}</h3>
            Starring: <h5>{starring}</h5>
        </div>
    )
}

export default Cards;