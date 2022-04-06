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

import './App.css'
import BarChart from './Charts/BarChart';



    
function App() {
 
  return (

    <BrowserRouter>
     <Sidebar/>
    
     <Switch>
     {/* <Route path='/register'>
      <Registration/>
    </Route>
    <Route path='/'>
      <Login/>
    </Route> */}
    
    
   
       <Route path='/' exact component={Home} />  
        <Route path='/reports' component={Reports}/>
      <Route path='/messages' component={Messages}/>
      <Route path='/Support' component={Support}/>

    
    </Switch>

    </BrowserRouter>

    
  );
}
    
export default App;
