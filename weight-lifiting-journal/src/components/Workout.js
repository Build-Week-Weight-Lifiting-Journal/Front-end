import React, { useState, useEffect } from 'react';

import axiosWithAuth from "../utils/axiosWithAuth";

import styled from 'styled-components'

const Workouts = props => {

    const Center = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
    const CardHolder = styled.div`
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        border: 2px solid lightskyblue;
        align-items: center;
        margin: 28px 40px;
        padding: 9px 0px;
        border-radius: 20px;
    `

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
        <Center>
            <h1>{workout.workout_name}</h1>
            <button> Edit Workout Name </button>
            <button> Add Exercise </button>
            <button> Delete Workout </button>

            <h2>Exercises</h2>
            {
                workout.exercises && workout.exercises.map(exercise => (
                <CardHolder>
                    <h2>{exercise.exercise_name}</h2>
                    <p>Region: {exercise.region}</p>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                </CardHolder>
                ))
            }
            
        </Center>
    )
}

export default Workouts