import { Container, Row, Col, Card } from 'react-bootstrap';


export default function Logout() {
    
      
    
    

  return (
    <Container>
        <h1 className="my-3">Logged Out</h1>
        <Row>
            <Col md={4}>
                <Card className='my-3'>
                    <Card.Body>                             
                    <Card.Text>You are logged out</Card.Text>      
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}
