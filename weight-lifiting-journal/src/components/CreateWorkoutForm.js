import React,{useState} from 'react';
import { connect } from 'react-redux'
import { addWorkout } from '../action';
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
                <input
                    type='text'
                    placeholder='Workout Name'
                    name='name'
                    onChange={handleChange}
                    value={newWorkout.name}
                    required
                />
                <br/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
const mapStatetoProps = state => {
    return{
        userData: state.userData
    }
}
export default connect(mapStatetoProps, { addWorkout } )(CreateWorkoutForm)