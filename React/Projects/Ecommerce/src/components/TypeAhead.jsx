import React, { useEffect, useState } from 'react'

const STATUS = {
    LOADING: "Loading...",
    ERROR: "Error",
    SUCCESS:"Success"
}

const TypeAhead = () => {

    const [userSearch, setUserSearch] = useState('')
    const [status, setStatus] = useState(STATUS.LOADING)
    const [results, setResults] = useState([])

    useEffect(() => {
        const abortController = new AbortController();
        const {signal} = abortController
        const fetchResults = async () => {
            try {
                setStatus(STATUS.LOADING)
                const response = await fetch('https://dummyjson.com/products', {signal})
                const data = await response.json()
                console.log(data)
                setResults(data.products)
                setStatus(STATUS.SUCCESS)  
            
            } catch (error) {
               if (error.name === 'AbortError') {
                setStatus(STATUS.ERROR)
               }
            }
        }

        fetchResults()

        return () => {
            abortController.abort();
        }
    }, [userSearch])

  return (
    <div>
      <input 
      type="text" 
      placeholder='Use me to find items'
      value={userSearch}
      onChange={(e)=> setUserSearch(e.target.value)}
      />
      {
        status === STATUS.LOADING && <div>Loading...</div>
      }
      {
        status === STATUS.ERROR && <div>There was an error. Please try again.</div>
      }
      {
        status === STATUS.SUCCESS && results.length > 0 && (
            <ul>
                {
                    results.map((result) => (
                        <li key={result.id}>{result.title}</li>
                    ))
                }
            </ul>
        )
      }
    </div>
  )
}

export default TypeAhead
