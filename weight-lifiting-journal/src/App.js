import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";


import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import PrivateRoute from './components/PrivateRoute';
import WorkoutList from './components/WorkoutList';
import Workout from "./components/Workout";
import CreateWorkoutForm from './components/CreateWorkoutForm';
import axiosWithAuth from "./utils/axiosWithAuth";

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    //----------------- Get request here for Workout exercise
}, []);

  return (
    <Router>
      <div className="App">
        <Nav />


        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />

        {/* <PrivateRoute path='/workout' component={WorkoutList} /> */}
        <Route  path='/workout-list' component={WorkoutList} />
        <Route  path='/add-workout' component={CreateWorkoutForm}/>
        <Route exact path="/workout/:id" render={props => <Workout {...props} workouts={workouts} />} />

      </div>
    </Router>
  );
}

export default App;
