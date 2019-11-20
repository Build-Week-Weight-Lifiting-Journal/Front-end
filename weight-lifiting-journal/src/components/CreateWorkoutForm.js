import React from 'react';

const CreateWorkoutForm = props => {
    return(
        <div>
            <h1>New Workout</h1>
            <form>
                <input
                    type='text'
                    placeholder='Workout Name'
                />
                <br/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default CreateWorkoutForm;