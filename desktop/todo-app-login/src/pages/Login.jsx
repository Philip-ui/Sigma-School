import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import { LoginoutContext } from '../LoginoutContext';

export default function Login() {
    const [user, setUser] = useState("");
    const [id, setId] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const loginoutContext = useContext(LoginoutContext);    

    function Login() {
        const isCorrectUser = user === "haris";
        const isCorrectId = id === "1";
        setIsLoggedIn(!isLoggedIn);        
        if (isCorrectUser && isCorrectId) {
            authContext.setToken('1234');
            loginoutContext.setIsLoggedIn(true);         
            navigate('/profile');
            
        }
        else {
          setUser('');
          setId('');
          navigate('/Login');          
        }
    }
    
          
    return (
        <Container>
            <h1 className="my-3">Login to your account</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />                    
                </Form.Group>
                <Button variant="primary" onClick={Login}>Login</Button>
            </Form>
        </Container>
    )
}