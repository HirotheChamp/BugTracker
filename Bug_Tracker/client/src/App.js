import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from './components/Sidebar';

import Reports from './views/Reports';
import Messages from './views/Messages';
import Support from './views/Support';
import Home from './views/Home';
import Login from './views/Login';
import Registration from './views/Registration';
import './App.css'
import BarChart from './Charts/BarChart';



    
function App() {
 
  return (

    <BrowserRouter>
     <Sidebar/>
    
     <Switch>

    
    
   
       <Route path='/' exact component={Home} />  
        <Route path='/reports' component={Reports}/>
      <Route path='/messages' component={Messages}/>
      <Route path='/Support' component={Support}/>

      <Route path='/register'>
      <Registration/>
    </Route>
    <Route path='/login'>
      <Login/>
    </Route> 
    </Switch>

    </BrowserRouter>

    
  );
}
    
export default App;
