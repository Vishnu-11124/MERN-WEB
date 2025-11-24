import FetchTodo from "./components/FetchTodo"
import { Suspense } from "react"


const App = () => {
  return (
    
      <Suspense>
        <h1>React 19 </h1>
        <FetchTodo />
      </Suspense>
  )
}

export default App
