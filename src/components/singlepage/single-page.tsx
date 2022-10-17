import React from "react";
import styled from "styled-components";

export const SinglePageComponent = (character: any) => {
  console.log(character.character.image);

  return (
    <Container>
      <Banner src={character.character.image} />
      <DetailsSection>
        <Detail>Name: {character.character.name}</Detail>
        <Detail>Species: {character.character.species}</Detail>
        <Detail>Status: {character.character.status}</Detail>
      </DetailsSection>
      <ViewMoreContainer>
        <ViewMoreText>Details</ViewMoreText>
      </ViewMoreContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 500px;
  margin: 0px 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  border: 1px solid #c59f9f;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 100%;
  border-top-left-radius: 10px;
  background-image: url(${(props: { src: string }) =>
    props.src ? props.src : ""});
  border-top-right-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #c59f9f;
`;  

const DetailsSection = styled.div`
  diaplay: flex;
  flex-direction: coulmn;
  padding: 20px 20px;
`;

const Detail = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  background-color: #755252;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ViewMoreText = styled.p`
color: #ffffff;
cursor: pointer;
font-size: 18px;
font-weight:700;
`;
