import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './views/Login';
import Registration from './views/Registration';
import Reports from './views/Reports';
import Messages from './views/Messages';
import Support from './views/Support';
import Home from './views/Home';
import './App.css'

    
function App() {
  return (

    <BrowserRouter>
    <Sidebar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/reports' component={Reports}/>
      <Route path='/messages' component={Messages}/>
      <Route path='/Support' component={Support}/>

      
    </Switch>

    </BrowserRouter>
    // <BrowserRouter>
    //  <Switch>
        
    //     <Route path="/register">
    //       <Registration />
    //     </Route>
    
       
    //     <Route exact path="/">
    //       <Login/>
    //     </Route>
        
    //     </Switch>
    // </BrowserRouter>
    
  );
}
    
export default App;
