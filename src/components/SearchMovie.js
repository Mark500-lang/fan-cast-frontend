import React, { useState, useEffect } from "react";

function SearchMovie(){
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
            console.log(response)
        })
    
    }


    return(
        <form className="d-flex form-inline my-2 my-lg-0" onSubmit={handleSearch}>
            <input name="title" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={title} onChange={(event)=>setTitle(event.target.value)}/>
            <button className="btn btn-sm btn-outline-secondary" type="submit" onSubmit={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}
//onChange={handleSearch}
export default SearchMovie;