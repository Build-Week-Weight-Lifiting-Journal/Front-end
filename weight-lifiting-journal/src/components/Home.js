import React from 'react'
import Fitness1 from "../Images/Fitness1.jpg"
import Fitness2 from "../Images/Fitness2.jpg"
import Fitness3 from "../Images/Fitness3.jpg"
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SidePanel = styled.div`
    background-color: black;
    width: 20%;
    height:1000px;
  
`

const Container = styled.div`
    display: flex;

        .logo{
            margin: 0 auto;
        }

`

const ImgDiv = styled.div`
    height:90%;
    width:80%;
    margin: 0 auto;
   
        img{
            height:55%;
            width:25%;
         
        }
`


const Home = () => {



    return(
       
        <Container>

        <SidePanel/>
           
        <div className = "logo">
            <h1>Your Journey Begins Here</h1>
            <ImgDiv>
                <img src = {Fitness1} alt = "deadlift"/>
                <img src = {Fitness2} alt = "deadlift"/>
                <img src = {Fitness3} alt = "deadlift"/>
        <section className='buttons'>

            <NavLink className='home-link' to='/login'>Log In</NavLink>
            <NavLink className='home-link' to='/sign-up'>Sing Up</NavLink>
        </section>
            </ImgDiv>
        </div> 
        </Container>
      
    )
}
//generic comment 
export default Home