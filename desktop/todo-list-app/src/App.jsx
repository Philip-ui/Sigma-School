import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import Button from "react-bootstrap/Button"


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function TodoList({todos}) {
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo} 
          <Button variant="danger" className="ms-3 mb-2" onClick={() => deleteTodo(index)}>
            Delete
          </Button>
          </li>
        ))}
      </ul>

    );
  }

  function deleteTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className="m-3">
        <input
           type="text"
           value={newTodo}
           onChange={(event)=> setNewTodo(event.target.value)}
        />
        <Button variant="primary" className="ms-3 mb-2" onClick={addTodo}>
         Add
        </Button>
        <div>
        <TodoList todos={todos} />
        </div>
      </div>
    </>
  )
}

export default App
