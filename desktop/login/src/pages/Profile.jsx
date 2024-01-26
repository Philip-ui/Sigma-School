import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useContext, } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";


export default function Profile() {   
    
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();    
    
    function handleLogout() {        
            authContext.setToken('');            
            navigate('/Logout');
         
        // Add your logout logic here
        // For example, clear the user's session or token
        // Redirect the user to the login page
      }  
  return (
    <Container>
        <h1 className="my-3">User Profile</h1>
        <Row>
            <Col md={4}>
                <Card className='my-3'>
                    <Card.Body>
                        <Card.Text>Name: Kok Onn</Card.Text>
                        <Card.Text>Email: kokonn@sigmascholl.co</Card.Text>
                        <Button variant="danger" onClick={handleLogout} >Logout</Button>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}
