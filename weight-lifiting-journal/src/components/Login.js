import React, {useState} from 'react';
import styled from "styled-components"
import { connect } from 'react-redux';
import { login } from '../action';


const ContainerDiv = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        width:35%;
        
        margin: 0 auto;

      

            label{
                justify-content:space-evenly;
                padding:25px 0;
            }
            button{
                width:15%;
                margin: 1% auto;
                
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
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
        <ContainerDiv>

          <label>
            username:
            <input
              required
              type="text"
              name="username"
              placeholder="username"
              value={loginInfo.username}
              onChange={handleChange}
              />
          </label>
  
          <label>
            Password:
            <input
              required
              type="password"
              name="password"
              placeholder="password"
              value={loginInfo.password}
              onChange={handleChange}
              />
          </label>
  

          <button type='submit'>Log In</button>

        </ContainerDiv>
        </form>
      </div>
    );
  };
  
export default connect(null, { login })(Login)


// export default Login;