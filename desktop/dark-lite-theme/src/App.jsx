import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App(){
    const [theme,setTheme]=useState(false);
    

    const toggleClick=()=>{
        setTheme(!theme)
    }
    useEffect(()=>{
        if(theme==true){
            document.body.classList.add("dark");            
        }else{
            document.body.classList.remove("dark");                      
        }
    })

    return(
      
            <div className="text-center">
              <h1>Theme Switcher</h1>
              <br />
              {theme?"Dark Theme":"Light Theme"}  
              <br /> <br /><br />                       
              <button onClick={toggleClick}>{"Toggle Theme"}</button>  
            </div>
    );
}
export default App;


