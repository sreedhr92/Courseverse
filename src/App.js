import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

const App = () => {
  return ( <div>
    <div class="topnav">
  <a href="/homeurl">Home</a>
  <a href="/loginurl">Login</a>
  <a href="/signupurl">Signup</a>
  <a href="#about">About</a>
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
    </Switch>
     </div>);
}
 
export default App;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}