import React, {useState} from 'react';
import styled from "styled-components"


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
    const [login, setLogin] = useState({ userName: "", password: "" });
  
    const handleSubmit = event => {
      event.preventDefault();
      setLogin({ userName: "", password: "" });
    };
  
    const handleChange = event => {
      setLogin({ ...login, [event.target.name]: event.target.value });
      console.log(event.target.name, event.target.value);
    };

    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
        <ContainerDiv>

          <label>
            UserName:
            <input
              required
              type="text"
              name="userName"
              placeholder="Username"
              value={login.userName}
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
              value={login.password}
              onChange={handleChange}
              />
          </label>
  
          <button>Log In</button>
          <button>Clear</button>

        </ContainerDiv>
        </form>
      </div>
    );
  };
  
export default Login;