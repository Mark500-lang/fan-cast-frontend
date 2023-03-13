import React, { useState } from "react";

function SearchMovie({setDisplay, setMovieOnDisplay}){
    const [title, setTitle] = useState("")

    function handleSearch(e) {
        e.preventDefault()
        console.log()
        
        fetch(`/movies/${title}`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(r=>r.json())
        .then((response)=>{
            setMovieOnDisplay(response)
            console.log(response)
            setDisplay("movieSwitch")
        })
        
    }


    return(
        <form id="searchBar" className="d-flex form-inline my-2 my-lg-0" onSubmit={handleSearch}>
            <input name="title" className="form-control mr-sm-2 search-field" type="search" placeholder="Search" aria-label="Search" value={title} onChange={(event)=>setTitle(event.target.value)}/>
            <button className="btn btn-sm btn-outline-secondary" type="submit" onSubmit={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}
//onChange={handleSearch}
export default SearchMovie;