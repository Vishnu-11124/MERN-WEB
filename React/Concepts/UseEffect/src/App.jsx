import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DataFetch from './Components/DataFetch'
import FetchingPosts from './Components/FetchingPosts'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  },[count])

  return (
   <>
    <h1>The value is {count}</h1>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <div style={{display: 'flex', gap: '20px'}}>
      <div>
        <h1>Data fetching</h1>
        <DataFetch/>
      </div>
      <div>
        <h1>List of Posts</h1>
        <FetchingPosts />
      </div>
    </div>
   </>
  )
}

export default App
