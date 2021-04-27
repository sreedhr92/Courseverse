import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Details from './components/Details';
import {Switch, Route, Link} from 'react-router-dom';
import Faculty from './components/Faculty';
import Student from './components/Student';
import {BrowserRouter as Router} from 'react-router-dom'


const App = () => {
  return ( <div>
    <div className="topnav">
  <Link to="/homeurl">Home</Link>
  <Link to="/loginurl">Login</Link>
  <Link to="/signupurl">Signup</Link>
  <Link to="/detailsurl">About</Link>
  <Link to="/studenturl">Student</Link>
  <Link to="/facultyurl">Faculty</Link>
  <Link to="#">Logout</Link>
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
