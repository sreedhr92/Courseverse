import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Details from './components/Details';
import {Switch, Route, NavLink} from 'react-router-dom';
import Faculty from './components/Faculty';
import Student from './components/Student';
import {BrowserRouter as Router} from 'react-router-dom'


const App = () => {
  return ( <div>
    <div className="topnav">
  <NavLink to="/homeurl">Home</NavLink>
  <NavLink to="/loginurl">Login</NavLink>
  <NavLink to="/signupurl">Signup</NavLink>
  {/*<NavLink to="/detailsurl">About</NavLink>
  <NavLink to="/studenturl">Student</NavLink>
  <NavLink to="/facultyurl">Faculty</NavLink>*/}
  <NavLink to="/logout">Logout</NavLink>
  </div><br /><br />
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
      <Route path="/facultyurl">
        <Router>
            <Faculty />
        </Router>
      </Route>
      <Route path="/studenturl">
        <Router>
        <Student />
        </Router>
      </Route>
    </Switch>
     </div>);
}
 
export default App;
