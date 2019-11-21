import React,{useState} from 'react';
import { connect } from 'react-redux'
import { addWorkout } from '../action';
import styled from 'styled-components';
import Imgworkout from '../image/undraw_yoga_248n.svg'

const Input = styled.input`
    border: none;
    margin: 25px 0;
    padding: 15px 20px;
    color: black;
    font-size: 1.4rem;
    border-bottom: 4px black solid;
    outline: none;
    border-radius: 15px
`
const Add = styled.button`
    border: none;
    padding: 15px 30px;
    background-color: #38ce38;
    color: white;
    font-size: 1rem;
    border-radius: 20px

    :hover{
        color: #38ce38;
        background-color: white
        border: 1px solid #38ce38;
    }
`

const Image = styled.img`
    max-width: 100%
    width: 20%;
    margin: 35px 0;
`


const CreateWorkoutForm = props => {

    console.log(props.userData.id)

    const [newWorkout, setNewWorkout] = useState({name: ''})

    const handleChange = e => {
        setNewWorkout({...newWorkout, [e.target.name]: e.target.value})
        console.log(e.target.name, e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addWorkout(props.userData.id, newWorkout);
        setNewWorkout({name: ''})
    }
    return(
        <div>
            <h1>New Workout</h1>
            <form onSubmit={handleSubmit} >
                <Input
                    type='text'
                    placeholder='Workout Name'
                    name='name'
                    onChange={handleChange}
                    value={newWorkout.name}
                    required
                />
                <br/>
                <Add type='submit'>Submit</Add>
            </form>
            <Image src={Imgworkout} />
        </div>
    )
}
const mapStatetoProps = state => {
    return{
        userData: state.userData
    }
}
export default connect(mapStatetoProps, { addWorkout } )(CreateWorkoutForm)