import React from 'react'
import styled from 'styled-components'

export const Sidebar = () => {
  return (
      <Container>
        <h3> Side bar </h3>
      </Container>

  )
}

const Container = styled.div`
display: flex;
width: 20%;
height: 90vh;
background-color: red;
`;
