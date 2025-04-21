
import React,{useState} from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  let [todos,setTodos] = useState([
    {id:1,text:'Learn React',completed:false},
    {id:2,text:'Build a React App',completed:false},
    {id:3,text:'Deploy the React App',completed:false}
  ]);

  function handleComplete(id){
    setTodos(prevTodos=>
      prevTodos.map(todo=>
        todo.id==id ? {...todo,completed:true} : todo
      )
    )
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
