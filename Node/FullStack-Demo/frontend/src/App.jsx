import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h1><center><b>Full Stack App</b></center></h1>
      <div>
        <h1>Jokes</h1>
        <p>Available Jokes : {jokes.length}</p>
        {
          jokes.map((joke) => {
            return (
              <div key={joke.div}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
