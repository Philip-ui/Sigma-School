import { useContext } from "react";
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import { Outlet} from 'react-router-dom';
import TodoScheduleA from "../components/TodoScheduleA";
import { TodoContext } from "../contexts/TodoContext";

export default function Schedule() {
  const todoSchedules = useContext(TodoContext).todoSchedules;
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/layout">Vocals Learning Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>           
            <Nav.Link href="/addschedule">Add Schedule</Nav.Link> 
            <Nav.Link href="/logout">Logout</Nav.Link>                      
          </Nav>          
        </Container>
      </Navbar>
      <Outlet />      
    <Container>
      <h1 className="my-3">Schedule</h1>
      <Row>
        <CardGroup todoSchedules={todoSchedules} />
      </Row>
    </Container>
    </>
  );
}

function CardGroup({ todoSchedules }) {
  return todoSchedules.map((todoSchedule) => {
    return (
      <Col md={4} key={todoSchedule.id}>
        <TodoScheduleA todoSchedule={todoSchedule} />
      </Col>
    );
  });
}
