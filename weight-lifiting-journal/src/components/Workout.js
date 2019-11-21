import React, { useState, useEffect } from 'react';

import axiosWithAuth from "../utils/axiosWithAuth";

import { connect } from 'react-redux'

import { deleteWorkout, editWorkout, deleteExercise } from '../action'

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

const Delete = styled.button`
    background-color: #e6474e;
    color: white;
`
const Edit = styled.button`
    background-color: #207eea;
    color: white;
`
const Add = styled.button`
    background-color: #2ab72a;
    color: white;
`

const Input = styled.input`
    margin: 55px 1px 15px 4px;
    padding: 15px 2px;
    color: black;
    border: none;
    font-size: 1.4rem;
    border-bottom: 4px black solid;
    outline: none;
    border-radius: 16px
`

const Submit = styled.button`
    color: white;
    background-color: green;
    padding: 17px 20px;
    border-radius: 10px
    margin: 0 9px;
    border: none;
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
                        <Input
                            type='text'
                            placeholder='New WorkOut Name'
                            onChange={handleChange}
                            value={newName.name}
                            name='name'
                        />
                        
                        <Submit type='submit'>Submit</Submit>
                    </form>
            }
            <div>
            <Edit className='mulit-button' onClick={() => setIsEditing(true)}> Edit Workout Name </Edit>
            <Delete className='mulit-button' onClick={() => props.deleteWorkout(props.match.params.id)}> Delete Workout </Delete>
            </div>
            <Add className='mulit-button'> Add Exercise </Add>

            <h2>Exercises</h2>
            {
                workout.exercises && workout.exercises.map(exercise => (
                <CardHolder key={workout.exercises.exercise_id}>
                    <h2>{exercise.exercise_name}</h2>
                    <p>Region: {exercise.region}</p>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                    <button onClick={() => props.deleteWorkout(exercise.exercise_id)}>Delete</button>
                </CardHolder>
                ))
            }
            
        </Center>
    )
}

export default connect( null, { deleteWorkout, editWorkout, deleteExercise } )(Workouts)

// export default Workouts