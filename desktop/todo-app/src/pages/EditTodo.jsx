import { useContext, useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { TodoContext } from "../Context/TodoContext";
import { useNavigate, useParams } from "react-router-dom";


export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { todos, setTodos } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setCompleted(todo.completed);
    }
  }, [id, todos]);

  const handleEditTodo = (event) => {
    event.preventDefault();
    const editedTodos = todos.map((todo) => {
      if (todo.id === parseInt(id)) {
        return { ...todo, title, description, completed };
      }
      return todo;
    });
    setTodos(editedTodos);
    navigate("/");
  };

  return (
    <Container>
      <h1 className="my-3">Edit Todo</h1>
      <Form onSubmit={handleEditTodo}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"           
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="completed"
          label="Mark as completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mb-3"
          required
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
