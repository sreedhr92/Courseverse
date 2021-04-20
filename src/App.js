import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Details from './components/Details';
import {Switch, Route} from 'react-router-dom';


const App = () => {
  return ( <div>
    <div class="topnav">
  <a href="/homeurl">Home</a>
  <a href="/loginurl">Login</a>
  <a href="/signupurl">Signup</a>
  <a href="/detailsurl">About</a>
  </div>
    <br />
    <Switch>
      <Route path="/homeurl">
        <Home />
      </Route>
      <Route path="/loginurl">
        <Login />
      </Route>
      <Route path="/signupurl">
        <Signup />
      </Route>
      <Route path="/detailsurl">
        <Details />
      </Route>
    </Switch>
     </div>);
}
 
export default App;
