import React, { useState } from "react";

const SignUp = props => {
  const [signup, setsignup] = useState({ userName: "", password: "" });

  const handleSubmit = event => {
    event.preventDefault();
    setsignup({ userName: "", password: "" });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
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

export default SignUp;
