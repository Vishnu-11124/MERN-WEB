import { use } from "react"


const FetchTodo = () => {
    const data = use(
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .catch(err => console.log(err))
    )
  return (
    <div>
      <h1>Fetch Todo</h1>
      <p>{data.title}</p>
    </div>
  )
}

export default FetchTodo
