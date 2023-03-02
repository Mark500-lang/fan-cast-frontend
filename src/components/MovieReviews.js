import React from "react";

function MovieReviews({setDisplay, movieOnDisplay}){
    const {title, release_date, starring, quote} = movieOnDisplay

    const handleClick =()=>{
        setDisplay("movieReviews")
        console.log(setDisplay)
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
                    <div className="rating">
                        <label>Your Rating /10</label>
                        <input class="form-control form-control-sm" type="text" placeholder="...rating"></input>
                    </div>
                    <div className="reviews">
                        <label>Your Review</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="...review"></textarea>
                    </div>
                </div>
            </form>
            <div>
                <h1 className='text-center'>Reviews</h1>
                {
                    
                    movieOnDisplay.reviews && movieOnDisplay.reviews.map((review)=>{
                    return (
                        <div className="card">
                        <h3>Rating: {review.score}</h3>
                        <h4>{review.comment}</h4>
                        </div>
                      )  
                    })
                }
            </div>
            <div className="returnButton">
                <button className="btn btn-danger" onClick={handleClick}><i className="fa-solid fa-arrow-right-to-bracket"></i></button> 
            </div>
        </div>
    )
}

export default MovieReviews;