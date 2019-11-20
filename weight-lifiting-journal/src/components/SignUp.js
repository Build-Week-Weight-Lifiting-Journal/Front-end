import React, { useState } from "react";
import { connect } from 'react-redux'
import { signUp } from '../action';
import styled from 'styled-components'



  const SignupDiv = styled.div`
      border-radius: 35px;
      border: 2px solid #43b2d6;
      max-width: 800px;
      margin: 4% auto;
      box-shadow: 8px 10px 15px 7px black;
      background-color: #1f1f11;
      color: white;
  `

  const Label = styled.label`
    font-family: sans-serif;
    font-size: 1.6rem;
    margin: 0 0 0 0;
  `
  const Input = styled.input`
    padding: 10px 0px 10px 20px;
    font-family: sans-serif;
    font-size: 1.2rem;
    border: none;
    border-radius: 18px;
    outline: none;
    margin: 20px 0;
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
    margin: 20px 0;

    :hover{
      background-color: #3a9867;
      color: black
    }
  `

const SignUp = props => {
  const [signup, setsignup] = useState({ username: "", password: "", email: '' });

  const handleSubmit = event => {
    event.preventDefault();
    props.signUp(signup)
    props.history.push('/login')
    setsignup({ username: "", password: "", email: '' });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
    
  };

  // form
  return (
    <SignupDiv>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>

        <Label> Username </Label> 

        <br/>

        <Input
          required
          type="text"
          name="username"
          placeholder="Username"
          value={signup.username}
          onChange={handleChange}
        />

        <br/>

        <Label>Email</Label>

        <br/>

        <Input
          required
          type="email"
          name="email"
          placeholder="Email"
          value={signup.email}
          onChange={handleChange}
        />

        <br/>

        <Label>Password</Label>

        <br/>

        <Input
          required
          type="password"
          name="password"
          placeholder="Password"
          value={signup.password}
          onChange={handleChange}
        />

        <br/>

        <Button type='submit'>Sign Up</Button>
        
      </form>
    </SignupDiv>
  );
};

export default connect(null, { signUp })(SignUp)


// export default SignUp;
