import React, { Component } from 'react';
import {Switch, Route, Link,Redirect} from 'react-router-dom';
import AddCourse from './AddCoure';
import Dashboard from './Dashboard';
import Enroll from './Enroll';
const Faculty = () => {
    return ( <div className="lp_bg">
        <div class="nav_in_2">
        <Link to="/enrollurl">Explore</Link>
  <Link to="/dashboardurl">Dashboard</Link>
  <Link to="/addurl">Add Course</Link>
  </div>
  <br />
  <Switch>
  <Route path="/enrollurl">
        <Enroll />
   </Route>
   <Route path="/dashboardurl">
        <Dashboard />
    </Route>
    <Route path="/addurl">
        <AddCourse />
    </Route>
  </Switch>
  <Redirect to="/enrollurl" />
    </div> );
}
 
export default Faculty;