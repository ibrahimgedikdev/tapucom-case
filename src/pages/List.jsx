import React from "react";
import styled from 'styled-components';
import Products from "../components/Products";
import {Container} from '../components/Container';
import Basket from "../components/Basket";

function List() {
  return (
    <ListWrapper>
      <Container>
        <Products />
        <Basket />
      </Container>
    </ListWrapper>
  );
}

export default List;

const ListWrapper = styled.div`
  margin-top:2rem;
  padding-bottom:5rem;
`

