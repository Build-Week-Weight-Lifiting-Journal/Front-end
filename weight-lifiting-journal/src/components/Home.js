import React from 'react'
import Fitness1 from "../Images/Fitness1.jpg"
import Fitness2 from "../Images/Fitness2.jpg"
import Fitness3 from "../Images/Fitness3.jpg"
import styled from 'styled-components'

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
const Button = styled.button`
color: white;
background-color: #6ad06a;
border-radius: 20px;
border: 1px solid lime;
font-size: 1.2rem;
font-family: sans-serif;
transition: 1s;
padding:13px 20px;
cursor: pointer;
margin: 40px 45px;

:hover{
  background-color: #3a9867;
  color: black
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
        <section>
            <Button>Log In</Button>
            <Button>About</Button>
            <Button>Sign Up</Button>
        </section>
            </ImgDiv>
        </div> 
        </Container>
      
    )
}
//generic comment 
export default Home