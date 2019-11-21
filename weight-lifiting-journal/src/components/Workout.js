import React, { useState, useEffect } from 'react';

import axiosWithAuth from "../utils/axiosWithAuth";

import { connect } from 'react-redux'

import { deleteWorkout, editWorkout } from '../action'

import styled from 'styled-components'

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

const Workouts = props => {


    // console.log('This is coming from workout file', props.match.params.id)

    const [workout, setWorkout] = useState({})
    const [isEditing, setIsEditing] = useState(false);

    const [newName, setNewname] = useState({
        name: ''
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`https://weight-lift-journal-dev.herokuapp.com/api/workouts/${props.match.params.id}`)
        .then(res => {
            // setExercises(res.data.exercises)
            setWorkout(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const handleChange = e => {
        setNewname({
            ...newName,
            [e.target.name]: e.target.value
        })

        console.log(props.match.params.id, "workout ID", workout.id)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.editWorkout(newName, props.match.params.id)
        setIsEditing(!isEditing);
        props.history.push('/workout-list')
        setNewname({
            name: ''
        })
    }

    return(
        <Center>
            {
                !isEditing 
                    ? <h1>{workout.workout_name}</h1>
                    : 
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='New WorkOut Name'
                            onChange={handleChange}
                            value={newName.name}
                            name='name'
                        />
                        <br/>
                        <button type='submit'>Submit</button>
                    </form>
            }
            <button onClick={() => setIsEditing(true)}> Edit Workout Name </button>
            <button> Add Exercise </button>
            <button onClick={() => props.deleteWorkout(props.match.params.id)}> Delete Workout </button>

            <h2>Exercises</h2>
            {
                workout.exercises && workout.exercises.map(exercise => (
                <CardHolder key={workout.exercises.exercise_id}>
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

export default connect( null, { deleteWorkout, editWorkout } )(Workouts)

// export default Workouts