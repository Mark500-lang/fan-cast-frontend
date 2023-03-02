import React, { useState, useEffect } from "react";
import FeaturedMovies from './FeaturedMovies.js';

function Home(){

    const [movies, setMovies] = useState();

    useEffect(()=>{
        fetch("/movies", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(r=>r.json())
        .then((response)=>{
            console.log(response)
            setMovies(response)
        })

    }, [])    

    return(
        <div className="container ">
            <FeaturedMovies/>
        </div>
    )
}

export default Home;