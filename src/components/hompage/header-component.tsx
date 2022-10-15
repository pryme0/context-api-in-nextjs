import React from "react";
import styled from "styled-components";
// import logo from './rickandmorty.png'

export const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <HeaderText><LogoImage src={"./rickandmorty.png"} alt="logo" /></HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #decbcb;
  padding: 30px 0px;
`;

const HeaderText = styled.h3`
padding: 0px;
margin: 0px;
font-weight: 600;
font-size: 20px;
`;

const LogoImage = styled.img`
width: 150px;
height: 50px;
`;
