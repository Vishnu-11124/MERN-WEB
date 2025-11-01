import React from 'react'

const Person = ({img, name, email}) => {
  return (
    <div>
      <h1><center>Developer Info</center></h1>
      <img src={img} alt="image" width={100} />
      <h2>Developed by {name}</h2>
      <h3>Contact: {email}</h3>
      <button onClick={() => {
        alert('Currently not available!')
      }}>More Info</button>
      
    </div>
  )
}

export default Person
