import React, { useContext } from "react";
import styled from "styled-components";
import { HeaderComponent } from "./header-component";
import { Sidebar } from "./side-bar";
import { SinglePageComponent } from "../singlepage";
import { DataContext } from "../../context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Pagination from 'rc-pagination';

export const HomeComponent = () => {
  const { characters, totalPages, nextLink } = useContext(DataContext);

  const handlePageClick=()=>{

  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderComponent />
      </HeaderContainer>
      <ContentContainer>
        <Sidebar />
        <RightSectionContainer>
          <RightSectionContent>
            {characters.map((character) => {
              return <SinglePageComponent character={character} />;
            })}
          </RightSectionContent>
          <BottomSection>
            <PaginateContainer>
            <ReactPaginate
							previousLabel={"<"}
							nextLabel={">"}
							breakLabel={"..."}
							pageCount={20}
							marginPagesDisplayed={1}
							pageRangeDisplayed={1}
							onPageChange={handlePageClick}
							containerClassName={"pagination"}
							activeClassName={"active"}
						/>

            </PaginateContainer>
          </BottomSection>
        </RightSectionContainer>
      </ContentContainer>
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
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
`;
const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 900px) {
    width:100%;
  }
`;

const RightSectionContent = styled.div`
  display: flex;
  padding: 50px 50px;
  flex-wrap: wrap;
  justify-content: start;
  @media (max-width: 900px) {
    padding: 50px 0px;
  }
`;
const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 100px;
  background-color: #4c2a2a5f;
  width: 100%;
  align-items: center;
`;

const ControlButton = styled.button`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

const PaginateContainer = styled.div`
display: flex;
ul{
  display: flex;
  width: 100%;s
}
li{
  display: flex;
  color: #302727;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: #f2dbdb;
  border: 1px solid #3d3333;
}
`;
