import React, { useState, useEffect } from 'react';

import axiosWithAuth from "../utils/axiosWithAuth";

import { connect } from 'react-redux'

import { deleteWorkout, editWorkout, deleteExercise,addExercise } from '../action'

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

const InputExercise = styled.input`
    margin: 0px 1px 15px 4px;
    padding: 6px 2px;
    color: black;
    border: none;
    font-size: 1rem;
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
    const [editExercise, setEditExercise] = useState(false);

    const [newExercise, setNewExercise] = useState({
        name: '',
        region: '',
        reps: '',
        sets: ''
    })

    const [newName, setNewname] = useState({
        name: ''
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`https://weight-lift-journal-dev.herokuapp.com/api/workouts/${props.match.params.id}`)
        .then(res => {
            // setExercises(res.data.exercises)
            setWorkout(res.data)
            console.log(workout)
        })
        .catch(err => console.log(err))
    },[])

    

    const handleChange = e => {
        setNewname({
            ...newName,
            [e.target.name]: e.target.value
        })

        // console.log(props.match.params.id, "workout ID", workout.id)
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

    //----------------------------------ADD NEW Exercise

    const handleExercise = e => {
        setNewExercise({
            ...newExercise,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
        // console.log(props.match.params.id, "workout ID", workout.id)
    }

    const handleSubmitExercise = e => {
        e.preventDefault()
        props.addExercise(props.match.params.id, newExercise)
        // props.history.push('/workout-list')
        setEditExercise(!editExercise);
        setNewExercise({
            name: '',
            region: '',
            reps: '',
            sets: ''
        })
    }

    //----------------------------

    console.log('Exercise Exercise Exercise Exercise', workout.exercises);

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
            <Add className='mulit-button' onClick={() => setEditExercise(true)}> Add Exercise </Add>

            {
                !editExercise
                ?<h2>Exercises</h2>
                :<form onSubmit={handleSubmitExercise}>
                    <InputExercise
                        type='text'
                        placeholder='New Exercise'
                        onChange={handleExercise}
                        value={newExercise.name}
                        name='name'
                        required
                    />
                    <br/>
                     <InputExercise
                        type='text'
                        placeholder='Region'
                        onChange={handleExercise}
                        value={newExercise.region}
                        name='region'
                        required
                    />
                    <br/>
                     <InputExercise
                        type='number'
                        placeholder='Reps'
                        onChange={handleExercise}
                        value={newExercise.reps}
                        name='reps'
                        required
                    />
                    <br/>
                     <InputExercise
                        type='number'
                        placeholder='Sets'
                        onChange={handleExercise}
                        value={newExercise.sets}
                        name='sets'
                        required
                    />
                    <br/>
                    <Submit className='mulit-button' type='submit'>ADD</Submit>
                </form>
            }
            {
                workout.exercises && workout.exercises.map(exercise => (
                <CardHolder key={workout.exercises.exercise_id}>
                    <h2>{exercise.exercise_name}</h2>
                    <p>Region: {exercise.region}</p>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                    <Delete className='mulit-button' onClick={() => props.deleteExercise(exercise.user_exercise_id)}>Delete</Delete>
                </CardHolder>
                ))
            }
            
        </Center>
    )
}

export default connect( null, { deleteWorkout, editWorkout, deleteExercise, addExercise } )(Workouts)

// export default Workouts