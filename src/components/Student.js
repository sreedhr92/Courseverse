import React from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Dashboard from './Dashboard';
import Enroll from './Enroll';
const Student = () => {
    return ( <div className="lp_bg">
        <div className="nav_in">
  <NavLink to="/enrollurl">Explore</NavLink>
  <NavLink to="/dashboardurl">Dashboard</NavLink>
  </div>
  <br />
  <Switch>
  <Route path="/enrollurl">
        <Enroll />
   </Route>
   <Route path="/dashboardurl">
        <Dashboard />
    </Route>
  </Switch>
  <Redirect to="/enrollurl" />
    </div> );
}
 
export default Student;