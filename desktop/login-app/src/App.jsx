import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { LoginoutContext } from './LoginoutContext';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/RequireAuth';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";


function HandleLogout() { 
   const authContext = useContext(AuthContext);
   const loginoutContext = useContext(LoginoutContext);
   const navigate = useNavigate(); 
   const handleLogout = () => {
      loginoutContext.setIsLoggedIn(false);
      authContext.setToken('');
      navigate('/logout');
    };
  
    return (
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    );
}

function Layout() {
   return (
     <>
       <Navbar bg="light" variant="light">
         <Container>           
           <Nav>
             <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/login">Login</Nav.Link>
             <Nav.Link href="/dashboard">Dashboard</Nav.Link>
             <Nav.Link href="/profile">Profile</Nav.Link>
             <Nav.Link href="/logout">
              <HandleLogout />
            </Nav.Link>
           </Nav>
         </Container>
       </Navbar>
       <Outlet />
     </>
   );
 }

export default function App() {
   const [token, setToken] = useLocalStorage("token", null);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   

   return (
   <AuthContext.Provider value={{ token, setToken}}>
    <LoginoutContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
       <Route index element={<Home />} /> 
       <Route path='login' element={<Login />} /> 
       
       <Route path='dashboard' element={ 
         <RequireAuth>
            <Dashboard />
         </RequireAuth>
      }       
      />
      <Route path='profile' element={ 
         <RequireAuth>
            <Profile />
         </RequireAuth>
      }       
      />
      <Route path='logout' element={<Logout />} />
     </Route>
    </Routes>
    </BrowserRouter>
    </LoginoutContext.Provider>
   </AuthContext.Provider>
   );
}

