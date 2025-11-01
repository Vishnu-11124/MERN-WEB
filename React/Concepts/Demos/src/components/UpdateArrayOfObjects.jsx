import React, { useState } from 'react'

const UpdateArrayOfObjects = () => {

    const list = [
        {
            id: 1,
            title: "GOT",
            rating: "8.5"
        },
        {
            id:2,
            title: "DARK",
            rating: "8.0"
        },
        {
            id:3,
            title: "LOST",
            rating: "9.5"
        }
    ]
    
    const [seriesList, setSeriesList] = useState(list);

    const updateSeries = () => {
        setSeriesList(
            seriesList.map((series) => {
                return series.id === 2 ? {...series, rating: "9.0"} : series      
            })
        )
    }

  return (
    <div style={{ marginTop:"10px", backgroundColor: "red", padding: "4px"}}>
      <h1>Update Array of Objects - Series List</h1>
      {
        seriesList.map((series) => 
            <div style={{backgroundColor: "white", display:"inline-block", margin: "15px", padding: "5px"}}>
                <h3 key={series.id}>Title: {series.title}</h3>
                <h4 key={series.id}>Rating: {series.rating}</h4>
            </div>
        )
      }

      <button onClick={updateSeries}>Update Series</button>

    </div>
  )
}

export default UpdateArrayOfObjects
