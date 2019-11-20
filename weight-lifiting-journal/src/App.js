import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";


import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import WorkoutList from './components/WorkoutList';
import Workout from "./components/Workout";
import CreateWorkoutForm from './components/CreateWorkoutForm';
import axiosWithAuth from "./utils/axiosWithAuth";
import EditWorkoutForm from './components/EditWorkout';


function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    //----------------- Get request here for Workout exercise
    axiosWithAuth()
    .get('https://weight-lift-journal-dev.herokuapp.com/api/workouts')
    .then(res=>{
      setWorkouts(res.data)
      
    })
    .catch(err=>{
      console.log(err, "error")
    })

    
}, []);

  return (
    <Router>
      <div className="App">
        <Nav />


        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />

        {/* <PrivateRoute path='/workout' component={WorkoutList} /> */}
        <PrivateRoute  path='/workout-list' component={WorkoutList} />
        <PrivateRoute  path='/add-workout' component={CreateWorkoutForm}/>
        <Route exact path="/workout/:id" render={props => <Workout {...props} workouts={workouts} />} />
        <PrivateRoute  path='/edit-workout/:id' component={EditWorkoutForm} />

      </div>
    </Router>
  );
}

export default App;
