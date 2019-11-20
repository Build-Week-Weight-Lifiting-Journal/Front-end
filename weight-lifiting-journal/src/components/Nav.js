import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import useDarkMode from "../hooks/useDarkMode";

const Nav = props => {
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("messages");
    props.history.push("/");
  };

  const [DarkMode, setUseDarkMode] = useDarkMode(false);

  const toggleDarkMode = e => {
    e.preventDefault();
    setUseDarkMode(!DarkMode);
  };

  const NavDiv = styled.div`
    background-color: black;
    padding: 1%;
  `;

  const Center = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  `;
  const LinkDiv = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
  `;

  const NavTitle = styled.h2`
    margin: 0 0;
  `;

  const Mode = styled.button`
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
    outline: none;
  `;

  return localStorage.getItem("token") ? (
    <NavDiv>
      <Center>
        <div>
          <NavTitle>Weight Lifiting Journal</NavTitle>
        </div>

        <LinkDiv>
          <NavLink className="link box" to="/workout-list">
            Work Out List
          </NavLink>
          <NavLink className="link box add" to="/add-workout">
            +
          </NavLink>
          <NavLink className="link box out" onClick={logOut} to="/">
            logOut
          </NavLink>

          {DarkMode === true ? (
            <Mode
              onClick={toggleDarkMode}
              className={DarkMode ? "dark-button dark-mode" : "dark-button"}
            >
              <span role="img" aria-label="sun">
                🌞
              </span>
            </Mode>
          ) : (
            <Mode
              onClick={toggleDarkMode}
              className={DarkMode ? "dark-button dark-mode" : "dark-button"}
            >
              <span role="img" aria-label="moon">
                🌑
              </span>
            </Mode>
          )}
        </LinkDiv>
      </Center>
    </NavDiv>
  ) : (
    <NavDiv>
      <Center>
        <div>
          <NavTitle>Weight Lifiting Journal</NavTitle>
        </div>

        <LinkDiv>
          <NavLink className="link box" to="/">
            Home
          </NavLink>
          <NavLink className="link box" to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink className="link box real" to="/login">
            Sign In
          </NavLink>

          {DarkMode === true ? (
            <Mode
              onClick={toggleDarkMode}
              className={DarkMode ? "dark-button dark-mode" : "dark-button"}
            >
              <span role="img" aria-label="sun">
                🌞
              </span>
            </Mode>
          ) : (
            <Mode
              onClick={toggleDarkMode}
              className={DarkMode ? "dark-button dark-mode" : "dark-button"}
            >
              <span role="img" aria-label="moon">
                🌑
              </span>
            </Mode>
          )}
        </LinkDiv>
      </Center>
    </NavDiv>
  );
};

export default withRouter(Nav);
