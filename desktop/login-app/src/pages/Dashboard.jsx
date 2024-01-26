import { Container, Row, Col, Card } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';
//import { useContext } from 'react';
//import { LoginoutContext } from '../LoginoutContext';
//import { AuthContext } from '../AuthContext';


export default function Dashboard() {
   

  return (
    <Container>
        <h1 className="my-3">Dashboard</h1>
        <Row>
            <Col md={4}>
                <Card className='my-3'>
                    <Card.Body>
                        <Card.Title>Sigma School Analytics</Card.Title>
                        <Card.Text>People who graduate will get jobs: 80%</Card.Text>
                                               
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}