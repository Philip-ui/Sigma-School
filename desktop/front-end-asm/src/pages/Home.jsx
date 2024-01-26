import { useContext } from "react";
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import { Outlet} from 'react-router-dom';
import TodoCard from "../components/TodoCard";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
  const todos = useContext(TodoContext).todos;
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/layout">Vocals Learning Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>            
            <Nav.Link href="/add">Add Songs</Nav.Link> 
            <Nav.Link href="/schedule">Schedule</Nav.Link> 
            <Nav.Link href="/logout">Logout</Nav.Link>                      
          </Nav>          
        </Container>
      </Navbar>
      <Outlet />      
    <Container>
      <h1 className="my-3">Songs To Learn</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
    </>
  );
}

function CardGroup({ todos }) {
  return todos.map((todo) => {
    return (
      <Col md={4} key={todo.id}>
        <TodoCard todo={todo} />
      </Col>
    );
  });
}
