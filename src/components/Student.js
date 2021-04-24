import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Enroll from './Enroll';
const Student = () => {
    return ( <div className="lp_bg">
        <div class="nav_in">
  <Link to="/enrollurl">Explore</Link>
  <Link to="/dashboardurl">Dashboard</Link>
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
    </div> );
}
 
export default Student;