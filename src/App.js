
import './App.css';
import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {

  const [todos, setTodos] = useState([])

  const addTask = (text) => {
    if(text) {
      const newTask = {
        id: Math.random().toString(36).substr(2,9), //выводит рандомное значение
        task: text,
        complete: false,
      }
      setTodos(...todos, newTask)
    }

  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id )])
  }

  const chacngeToggle = (id) => {
    setTodos(
      [
        ...todos.map(todo => todos.id === id ? {
          ...todo,
          complete: !todo.complete
        }:{...todo} )
      ]
    )
  }


  return (
    <div className="App">
      <header>
      <h2>Количество задач - {todos.length} </h2>
      </header>
      
      {  todos.map((todo, index) => {
          return (
            <ToDo 
            key={todo.id}
            todo={todo}
            toggleTask={chacngeToggle}
            removedTask={removeTask}
            />
          )
        })
      }
      <ToDoForm addTask={addTask} />

    </div>
  );
}

export default App;
