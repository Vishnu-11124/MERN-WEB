
import './App.css'
import AppName from './components/AppName'
import AddToDos from './components/AddToDos'
import TodoList from './components/TodoList'
function App() {

  let list = [
    {
      task : "Buy Milk",dueDate : '04/07/2023'
    },
    {
      task : "Go to college",dueDate : '04/07/2023'
    },
    {
      task : "Do evening workout",dueDate : '04/07/2023'
    }
  ]

  return (
    <>
      <AppName/>
      <AddToDos/>
      <TodoList tasks = {list}/>
      
    </>
  )
}

export default App
