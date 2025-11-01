import React, { useState } from 'react'

const UpdateObject = () => {

    const [movieData, setMovieData] = useState({
        movieTitle: "The Lion King",
        rating: "8.5"
    })

    const updateRating = () => {
        setMovieData({...movieData, rating: "9.0"})
    }
  return (
    <div style={{marginLeft: "18px", backgroundColor: "lightpink", padding: "8px"}}>
      <h1>Movies Data</h1>
      <h2>Movie: {movieData.movieTitle}</h2>
      <h3>Ratings : {movieData.rating}</h3>
      <button onClick={updateRating}>Update Rating</button>
    </div>
  )
}

export default UpdateObject
