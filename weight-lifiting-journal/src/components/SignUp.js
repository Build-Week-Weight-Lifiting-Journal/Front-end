import React, { useState } from "react";
import { connect } from 'react-redux'
import { signUp } from '../action';

const SignUp = props => {
  const [signup, setsignup] = useState({ userName: "", password: "", email: '' });

  const handleSubmit = event => {
    event.preventDefault();
    props.SignUp(signup)
    setsignup({ userName: "", password: "", email: '' });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
    
  };
  // form
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input
            required
            type="text"
            name="userName"
            placeholder="First Name"
            value={signup.userName}
            onChange={handleChange}
          />
        </label>

        <label>
          UserName:
          <input
            required
            type="email"
            name="email"
            placeholder="email"
            value={signup.email}
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
            value={signup.password}
            onChange={handleChange}
          />
        </label>

        <button>Sign UP</button>
      </form>
    </div>
  );
};

export default connect(null, { signUp })(SignUp)


// export default SignUp;
