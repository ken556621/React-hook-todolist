import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn Hook",
      done: false
    },
    {
      text: "Eat something",
      done: false
    },
    {
      text: "Write some code",
      done: false
    }
  ])

  const addTodo = (item) => {
    const newTodos = [...todos, {text: item, done: false}];
    setTodos(newTodos);
  }

  const compeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = true;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      {todos.map((todo, index) => 
        <Todo todo={todo} key={index} index={index} compeleteTodo={compeleteTodo} deleteTodo={deleteTodo}/>
      )}
      <Input addTodo={addTodo}/>
    </div>
  )
}



const Todo = ({todo, index, compeleteTodo, deleteTodo}) => {
  return (
    <div style={{textDecoration: todo.done ? "line-through" : ""}} id={index}>
      {todo.text}
      <div>
        <button onClick={() => compeleteTodo(index)}>Compelete !</button>
      </div>
      <div>
        <button onClick={() => deleteTodo(index)}>Delete !</button>
      </div>
    </div>
  )
}



const Input = ({addTodo}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add list" onChange={e => setText(e.target.value)}></input>
    </form>
  )
}

export default App;