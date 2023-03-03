import React, { useState } from "react";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function MovieReviews({setDisplay, movieOnDisplay, setMoviesOnDisplay}){
    const {id, title, release_date, starring, quote} = movieOnDisplay

//setting state for form data
    const [formData, setFormData]= useState({
        myscore: "",
        mycomment: "",
        user: "",
        movie: `${id}`
    })
//post review to database
    const handleSubmit = (event)=>{
        event.preventDefault()
        //console.log(`${id}`)
        setMoviesOnDisplay({...movieOnDisplay.reviews,formData})
        fetch("/reviews" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response)=> response.json())
        .then(data=> console.log(data));
    }

    const handleOnChange=(event)=>{
        formData[event.target.name]=event.target.value
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }
//delete review
    function handleDelete(e){
        e.preventDefault()
        var remove = e.target.value
        console.log(remove)
        //parentElementremove
        fetch(`/reviews/${remove}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

//return to featured movies
    const handleClick =()=>{
        setDisplay("movieReviews")
    }

    return(
        <div className="">
            <div className="card text-center">
                <h1>Title: {title}</h1>
                <h4>Starring: {starring}</h4>
                <h5>Movie Quote: {quote}</h5>
                <h6>Release Date: {release_date}</h6>
            </div>
            <form>
                <div className="form-group">
                    <h4 className="text-center">Add Review</h4>
                    <div>
                        <label>Your Rating /10</label>
                        <input name='myscore' className="form-control form-control-sm" type="number" id="score" placeholder="...rating" onChange={handleOnChange} value={formData.myscore}></input>
                    </div>
                    <div>
                        <label>Your Review</label>
                        <textarea name='mycomment' className="form-control" id="comment" rows="2" placeholder="...review" onChange={handleOnChange} value={formData.mycomment}></textarea>
                    </div>
                    <div>
                        <label>User Id</label>
                        <input name='user' className="form-control form-control-sm" type="number" id="user" placeholder="...user id" onChange={handleOnChange} value={formData.user}></input>
                    </div>
                    
                    <div>
                        <button className='btn btn-primary mb-2' type='submit' onClick={handleSubmit}>Post Review</button>
                    </div>
                </div>
            </form>
            <div>
                <h1 className='text-center'>Reviews</h1>
                {
                    movieOnDisplay.reviews && movieOnDisplay.reviews.map((review)=>{
                    return (
                        <div className="card" key={review.id}>
                            <h3>Rating: {review.score}</h3>ew
                            <p>{review.comment}</p>
                            <div>
                                <button type='delete' onClick={handleDelete} value={review.id} className='btn btn-danger btn-sm'>Delete Review</button>
                            </div>
                        </div>
                      )  
                    })
                }
            </div>
            <div className="returnButton">
                <button className="btn btn-danger" onClick={handleClick} ><i className="fa-solid fa-arrow-right-to-bracket"></i></button> 
            </div>
        </div>
    )
}
/*<div>
                        <label>Movie Id</label>
                        <input name='movie' className="form-control form-control-sm" type="number" id="movie" placeholder="...movie id" onChange={handleOnChange} value={formData.movie}></input>
                    </div>*/
export default MovieReviews;