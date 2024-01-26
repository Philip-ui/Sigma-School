import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSchedule() {
  const setTodoSchedules = useContext(TodoContext).setTodoSchedules;
  const todoSchedules = useContext(TodoContext).todoSchedules;
  const navigate = useNavigate();
  const id = parseInt(useParams().id);
  const currentTodo = todoSchedules.filter((todoSchedule) => todoSchedule.id === id)[0];
  const [title, setTitle] = useState(currentTodo.title);
  const [dateScheduled, setDateScheduled] = useState(currentTodo.dateScheduled);  
  const [timeScheduled, setTimeScheduled] = useState(currentTodo.timeScheduled); 
  const [completed, setCompleted] = useState(currentTodo.completed);

  function updateTodo(event) {
    event.preventDefault();
    const updatedTodos = todoSchedules.map((todoSchedule) => {
      if (todoSchedule.id === id) {
        return { id, title, dateScheduled, timeScheduled, completed };
      }
      return todoSchedule;
    });
    setTodoSchedules(updatedTodos);
    navigate("/Schedule");
  }

  return (
    <Container>
      <h1 className="my-3">Edit Song</h1>
      <Form onSubmit={updateTodo}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Song Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder=""
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            value={dateScheduled}
            onChange={(e) => setDateScheduled(e.target.value)}
            type="text"            
            placeholder=""
           
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            value={timeScheduled}
            onChange={(e) => setTimeScheduled(e.target.value)}
            type="text"            
            placeholder=""
            
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="completed"
          label="Mark as completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mb-3"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}