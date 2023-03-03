import React, { useState, useEffect } from "react";

function SearchMovie({setMovies}){
    const [titleSearch, setTitleSearch] = useState({title: ""})

    function handleSearch(e) {
        e.preventDefault()
        const title = titleSearch.map((t)=>t.title)
        console.log(title)
        
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

    const handleOnChange=(event)=>{
        titleSearch[event.target.name] = event.target.value
        setTitleSearch({
            ...titleSearch,
            [event.target.name]:event.target.value
        })
    }

    return(
        <form className="d-flex form-inline my-2 my-lg-0" onSubmit={handleSearch}>
            <input name="title" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange} value={titleSearch.title}/>
                <button className="btn btn-sm btn-outline-secondary" type="submit" onSubmit={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}
//onChange={handleSearch}
export default SearchMovie;