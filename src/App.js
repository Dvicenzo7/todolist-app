import Header from "./components/header";
import Form from "./components/form";
import React,{useState}  from "react";
import List from "./components/list";


function App() {

  const [todos, setTodos] = useState([{id:0,todo:"this is a simple task"}])

  return (
    <div className="App">
      
      <Header/>
      <Form setTodo={setTodos} Len={todos.length}/>
      <List todoList={todos} setTodo={setTodos}/>
    </div>
  );
}

export default App;
