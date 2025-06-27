import React,{useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,input])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map((todo, index) => {
            return (
              <div className="todo" key={index}>
                <div className="left">
                  <input type="checkbox" name="" id="" />
                  <p>{todo}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;