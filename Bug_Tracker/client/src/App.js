import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import Login from './views/Login';
import Registration from './views/Registration';


    
function App() {
  return (
    
    <BrowserRouter>
     <Switch>
        
        <Route path="/register">
          <Registration />
        </Route>
    
       
        <Route exact path="/">
          <Login/>
        </Route>
        
        </Switch>
    </BrowserRouter>
    
  );
}
    
export default App;
