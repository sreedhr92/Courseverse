import React from 'react';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

const App = () => {
  return ( <div>
    <Link to="/homeurl">Click this for Home page</Link><br / >
    <Link to="/loginurl">Click this for Login page</Link><br / >
    <Link to="/signupurl">Click this for Signup page</Link><br / >
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