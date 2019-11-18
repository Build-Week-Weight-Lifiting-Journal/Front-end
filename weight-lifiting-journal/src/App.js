import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';

import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import WorkoutList from './components/WorkoutList';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />

        <PrivateRoute path='/workout' component={WorkoutList} />

      </div>
    </Router>
  );
}

export default App;
