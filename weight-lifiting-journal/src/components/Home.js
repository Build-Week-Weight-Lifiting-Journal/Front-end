import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const SideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  width: 200px;
  height: 100vh;
`;

const LogoDiv = styled.div`
  color: red;
`;

const Text1Div = styled.div`
  display: flex;
  color: black;
  height: 100px;
  width: 150px;
  background: whitesmoke;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Text2Div = styled.div`
  display: flex;
  color: black;
  height: 100px;
  width: 150px;
  background: whitesmoke;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Text3Div = styled.div`
  display: flex;
  color: black;
  height: 100px;
  width: 150px;
  background: whitesmoke;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Home = () => {
  // useEffect(()=> {
  //     axios
  //     .get(`https://weight-lift-journal-dev.herokuapp.com/api/users`)
  //     .then(res => console.log(res.data))
  //     .catch(err => err);

  // },[])

  // useEffect(()=> {
  //     axios
  //     .get(`https://weight-lift-journal-dev.herokuapp.com/api/users/getby/6`)
  //     .then(res => console.log(res.data))
  //     .catch(err => err);

  // },[])

  return (
    <div>
      <SideBarDiv>
        <Text1Div>some text</Text1Div>

        <Text2Div>more text</Text2Div>

        <Text3Div>some more text</Text3Div>
      </SideBarDiv>

      <LogoDiv>Logo</LogoDiv>
    </div>
  );
};

export default Home;
