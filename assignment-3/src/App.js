import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><NavLink to="/Courses">Courses</NavLink></li>
                <li><NavLink to="/Users">Users</NavLink></li>
              </ul>
            </nav>
          </header>
          <h1>Welcome to the assignment #3</h1>
          <ol style={{textAlign: 'left'}}>
            <li><strike>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</strike></li>
            <li><strike>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</strike></li>
            <li><strike>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</strike></li>
            <li><strike>Pass the course ID to the "Course" page and output it there</strike></li>
            <li><strike>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</strike></li>
            <li><strike>Load the "Course" component as a nested component of "Courses"</strike></li>
            <li><strike>Add a 404 error page and render it for any unknown routes</strike></li>
            <li><strike>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</strike></li>
          </ol>

          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route component={PageNotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
