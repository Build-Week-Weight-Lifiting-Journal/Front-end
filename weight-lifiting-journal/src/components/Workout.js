import React, { useState, useEffect } from 'react';

import axiosWithAuth from "../utils/axiosWithAuth";

const Workouts = props => {

    console.log('This is coming from workout file', props.match.params.id)

    const [workout, setWorkout] = useState({})

    
    useEffect(() => {
        axiosWithAuth()
        .get(`https://weight-lift-journal-dev.herokuapp.com/api/workouts/${props.match.params.id}`)
        .then(res => {
            // setExercises(res.data.exercises)
            setWorkout(res.data)
        })
        .catch(err => console.log(err))
    },[])

    // console.log(exercises)

    return(
        <div>
            <h1>{workout.workout_name}</h1>
            <button> Edit Workout Name </button>
            <button> Add Exercise </button>
            <button> Delete Workout </button>

            <h2>Exercises</h2>
            {
                workout.exercises && workout.exercises.map(exercise => (
                <div>
                    <h2>{exercise.exercise_name}</h2>
                    <p>Region: {exercise.region}</p>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                </div>
                ))
            }
            
        </div>
    )
}

export default Workouts