import React,{useState} from 'react';
import { connect } from 'react-redux';
import { editWorkout } from '../action'

const EditWorkout = props => {

    const [newName, setNewname] = useState({
        name: ''
    })

    const handleChange = e => {
        setNewname({
            ...newName,
            [e.target.name]: e.target.value
        })
    }

    console.log(props);

    const handleSubmit = e => {
        e.preventDefault()
        props.editWorkout(newName, props.match.params.id)
        setNewname({
            name: ''
        })
    }


    return(
        <div>
            <h1>Edit Workout Name</h1>
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
        </div>
    )
}

export default connect(null, { editWorkout})(EditWorkout)

// export default EditWorkout;