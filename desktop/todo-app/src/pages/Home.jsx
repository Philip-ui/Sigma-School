import { Container } from 'react-bootstrap';
import { useContext } from "react";
import { Button, Badge, Card, Col, Row } from "react-bootstrap";
import { TodoContext } from '../Context/TodoContext';
import { useNavigate } from "react-router-dom";


export default function Home() {
    //const todos = useContext(TodoContext).todos;
    const { todos, setTodos } = useContext(TodoContext);
  
    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
      };
    const navigate = useNavigate();
    const handleEditTodo = (id) => {           
        navigate(`/edit/${id}`);       
    }
    

function CardGroup({ todos }) {
    return todos.map((todo) => {        
        const completed = todo.completed;
        const bg =completed ? "success" : "danger";
        return (
            <Col md={4} key={todo.id}>
              <Card className="my-3">
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <Badge bg={bg} className="me-2">{!completed && "Not"} Completed</Badge>
                    <Button className="me-2" variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                    <Button variant="secondary" onClick={() => handleEditTodo(todo.id)}>Edit</Button>
                </Card.Body>
              </Card>

            </Col>
        );
    });
}

return (
    <Container>
        <h1 className="my-3">Your todos</h1>
        <Row>
            <CardGroup todos={todos} />
        </Row>
    </Container>
);

}