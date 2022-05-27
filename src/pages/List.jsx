import React from "react";
import styled from 'styled-components';
import Products from "../components/Products";
import {Container} from '../components/Container';

function List() {
  return (
    <ListWrapper>
      <Container>
        <Products />
      </Container>
    </ListWrapper>
  );
}

export default List;

const ListWrapper = styled.div`
  margin-top:2rem;
`

