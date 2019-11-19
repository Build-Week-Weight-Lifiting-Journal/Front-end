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
                <input
                     type='text'
                     placeholder='Times'
                />
                <input
                     type='text'
                     placeholder='Data'
                />
                <input
                     type='text'
                     placeholder='Body Region'
                />
                <br/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default CreateWorkoutForm;