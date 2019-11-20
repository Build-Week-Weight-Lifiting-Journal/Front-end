import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'
import axiosWithAuth  from '../utils/axiosWithAuth'
import { fetchingUserData } from '../action'
import Workout from './Workout';


const WorkoutList = props => {


    // const [userData, setUserData] = useState({});

    // useEffect(()=> {

    //     axiosWithAuth()
    //     .get(`https://weight-lift-journal-dev.herokuapp.com/api/users/profile`)
    //     .then(async res => {
    //         await setUserData(res)
    //         // console.log('this from useEffect from workoutlist', res)
    //     })
    //     .catch(err => console.log('workoutList err', err))
    // },[])
    
    // console.log(userData.data,'from workoutlist axioswithauth')

    useEffect(()=>{
        props.fetchingUserData()
        console.log('inside useEffect', props.userData)
    },[props.fetchingUserData, props.userData.username])

    props.userData && console.log('outside of the useEffect', props.userData.username) || console.log('work')

    // if(props.userData.workouts){
    //     console.log('workout data', props.userData.workouts[])
    // }

    return(
            <div>
                <h1>Welcome {props.userData.username}</h1>
                {
                props.userData.workouts && props.userData.workouts.map(work => (
                    <button onClick={() => props.history.push(`/workout/${work.id}`)}>{work.workout_name}</button>    
                ))
                }
            </div>
    )
}

const mapStateToProps = state => {
    return{
        userData: state.userData,
        getUserData: state.getUserData
    }
}

export default connect(mapStateToProps, { fetchingUserData })(WorkoutList)

// export default WorkoutList