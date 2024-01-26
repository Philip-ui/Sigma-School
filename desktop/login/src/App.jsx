import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import Login from './pages/Login';
import Profile from './pages/Profile';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/RequireAuth';
import Logout from './pages/Logout';
import Home from './pages/Home';



export default function App() {
   const [token, setToken] = useLocalStorage("token", null);
   return (
    <AuthContext.Provider value={{ token, setToken}}>
    <BrowserRouter>
    <Routes>
       <Route element={<Home />} path='/'/> 
       <Route element={<Login />} path='/login'/> 
       <Route element={ 
         <RequireAuth>
            <Profile />
         </RequireAuth>
      }
       path='/profile'
      />
      <Route element={<Logout />} path='/logout'/>
    </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
   );
}
