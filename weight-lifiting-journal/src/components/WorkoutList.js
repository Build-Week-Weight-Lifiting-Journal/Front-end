import React,{useEffect} from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
// import axiosWithAuth  from '../utils/axiosWithAuth'
import { fetchingUserData } from '../action'
// import Workout from './Workout';
import styled from 'styled-components'
import PeaceImg from '../image/undraw_mindfulness_scgo.svg'

const PeaceImgStyle = styled.img`
    max-width: 100%;
    width: 40%;
    margin: 0 auto;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;

`

const WorkoutList = props => {

    const WorkoutListButton = styled.button`
        border: none;
        background: rgb(9,9,121);
        background: linear-gradient(3deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
        font-family: sans-serif;
        font-size: 1.8rem;
        cursor: pointer;
        margin: 25px 45px;
        padding: 30px 50px;
        border-radius: 30px;
        color: white;
        transition: 1s;
        :hover{
            color: black;
            box-shadow: 6px 7px 10px 3px black;
        }
    `

    useEffect(()=>{
        props.fetchingUserData()
        console.log('inside useEffect', props.userData)
    },[props.fetchingUserData, props.userData.username])

    // props.userData && console.log('outside of the useEffect', props.userData.username) || console.log('work')

    // if(props.userData.workouts){
    //     console.log('workout data', props.userData.workouts[])
    // }


    if(!props.userData.workouts){
        console.log('You need to add work out')
    }else{
        console.log('here is your work')
    }

    return(
            <Center>
                <h1>Welcome {props.userData.username}</h1>
                {
                props.userData.workouts && props.userData.workouts.map(work => (
                    <WorkoutListButton key={props.userData.workouts.id} onClick={() => props.history.push(`/workout/${work.id}`)}>{work.workout_name}</WorkoutListButton>    
                ))
                }
                <PeaceImgStyle src={PeaceImg} />
            </Center>
    )
}

const mapStateToProps = state => {
    return{
        userData: state.userData,
        getUserData: state.getUserData
    }
}

export default connect(mapStateToProps, { fetchingUserData })(withRouter(WorkoutList))

// export default WorkoutList