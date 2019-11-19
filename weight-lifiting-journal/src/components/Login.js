import React, {useState} from 'react';
import styled from "styled-components"
import { connect } from 'react-redux';
import { login } from '../action';


const ContainerDiv = styled.div`
        border-radius: 35px;
        border: 2px solid #43b2d6;
        max-width: 800px;
        margin: 4% auto;
        box-shadow: 8px 10px 15px 7px black;
        background-color: #1f1f11;
        color: white;

            label{
              font-family: sans-serif;
              font-size: 1.6rem;
              margin: 0 0 0 0;
            }

            input{
              padding: 10px 0px 10px 20px;
              font-family: sans-serif;
              font-size: 1.2rem;
              border: none;
              border-radius: 18px;
              outline: none;
              margin: 20px 0;
            }

            button{
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
                
            }


`

const Login = props => {
    const [loginInfo, setLogininfo] = useState({ username: "", password: "" });
  
    const handleSubmit = event => {
      event.preventDefault();
      props.login(loginInfo)
      setLogininfo({ username: "", password: "" });
    };
  
    const handleChange = event => {
      setLogininfo({ ...loginInfo, [event.target.name]: event.target.value });
      console.log(event.target.name, event.target.value);
    };

    return (
      <div>
        <ContainerDiv>

        <h1>Log In</h1>

        <form onSubmit={handleSubmit}>

          <label>Username</label>

          <br/>

          <input
            required
            type="text"
            name="username"
            placeholder="username"
            value={loginInfo.username}
            onChange={handleChange}
            />

          <br/>

          <label>Password</label>

          <br/>

          <input
            required
            type="password"
            name="password"
            placeholder="password"
            value={loginInfo.password}
            onChange={handleChange}
            />
          
          <br/>

          <button type='submit'>Log In</button>

        </form>
        </ContainerDiv>
      </div>
    );
  };
  
export default connect(null, { login })(Login)


// export default Login;