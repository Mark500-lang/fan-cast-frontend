import React, { useState, useEffect } from "react";

function SearchMovie({ handleSearch }){
    const [movie, setMovie] = useState();
    const [title, setTitle] = useState("")
//${title}
    function handleSearch(e) {
        e.preventDefault()
        setTitle(e.target.value)
        console.log(title)
        
        fetch(`/movies/Oldboy`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(r=>r.json())
        .then((response)=>{
            setMovie(response)
        })
    
    }

    return(
        <form className="d-flex form-inline my-2 my-lg-0" onSubmit={handleSearch}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-sm btn-outline-secondary" type="submit" onSubmit={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}
//onChange={handleSearch}
export default SearchMovie;