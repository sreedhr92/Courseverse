import React from 'react';
import {Switch, Route, NavLink,Redirect} from 'react-router-dom';
import AddCourse from './AddCoure';
import Dashboard from './Dashboard';
import Enroll from './Enroll';
const Faculty = () => {
    return ( <div className="lp_bg">
        <div className="nav_in_2">
        <NavLink to="/enrollurl">Explore</NavLink>
  <NavLink to="/dashboardurl">Dashboard</NavLink>
  <NavLink to="/addurl">Add Course</NavLink>
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