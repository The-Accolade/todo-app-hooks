import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  // const [buttonText, changeButtonText] = useState('undo');
  // const changeText = text => changeButtonText(text)

  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button
          onClick={() => {
            completeTodo(index);
            // changeText(completeTodo? 'Completed' : 'Undo' ) I want to make the button toggle to undo that removes the styling
          }}
        >
          {/* {buttonText} here the text of the button is supposed to toggle between 'completed' and 'undo' and  carry out the action*/}
          Completed
        </button>
        <button
          onClick={() => {
            removeTodo(index);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input"
         placeholder="Add Todo" 
         value={value}
         onChange={e => setValue(e.target.value)} />  
     </form>
  )
}

function App() {
    const [todos, setTodos] = useState([
      {
        text: 'Learn React',
        isCompleted: false
      },
      {
        text: 'Meet with friends',
        isCompleted: false
      },
      {
        text: 'Create a todo app with react hooks',
        isCompleted: false
      }
    ]);

    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    }
    const completeTodo = (index)=> {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    }
    const removeTodo = (index)=> {
      const newTodos = [...todos];
      newTodos.splice(index, 1)
      setTodos(newTodos);
    }
    
    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
}


export default App;