import React from "react";
import styled from "styled-components";
import { HeaderComponent } from "./header-component";
import { Sidebar } from "./side-bar";

export const HomeComponent = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderComponent />
      </HeaderContainer>
      <Sidebar />
    </Container>
  );
};
const HeaderContainer = styled.div``;

const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  width: 100%;
`;
