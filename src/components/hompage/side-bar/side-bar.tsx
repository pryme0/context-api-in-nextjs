import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { statusData, genderData } from "../../../data";

export const Sidebar = () => {

  const [showNav, setShowNav]= useState(false);


  return (
    <Container showNav={showNav}>
      <ItemContainer>
        <SearchIcon />
        <SearchItem></SearchItem>
      </ItemContainer>
      <ItemContainer>
        <Select>
          {statusData.map((data,index) => <option key={index} >{data}</option>
          )}
        </Select>
      </ItemContainer>
      <ItemContainer>
        <Select>
          {genderData.map((data,index) => <option key={index}>{data}</option>
          )}
        </Select>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 30%;
  padding: 50px 30px;
  flex-direction: column;
  background: #f0e7e7;
  @media (max-width: 900px) {
    display:${(props: { showNav:boolean }) =>
    props.showNav ? "flex" : "none"};
  }
`;


const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #7b6c6c;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const SearchItem = styled.input`
  width: 100%;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  border: 0px;
  padding: 0px 15px;
  background: inherit;
  cursor: pointer;
  &:focus {
    outline: none;
    cursor: default;
`;

const SearchIcon = styled(FaSearch)`
  color: #625555;
  fint: 12px;
  height: 30px;
  width: 30px;
  font-weight: 300;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 0px 15px;
  height: 30px;
  border: 0px;
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
  white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    background: red;
  }
`;
