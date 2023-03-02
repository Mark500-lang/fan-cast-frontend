import React from "react";

function SearchMovie(){

    return(
        <form className="d-flex form-inline my-2 my-lg-0" >
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-sm btn-outline-secondary" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}

export default SearchMovie;