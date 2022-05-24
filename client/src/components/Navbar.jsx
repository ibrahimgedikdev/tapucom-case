import React from "react";
import styled from "styled-components";
import List from "./icons/List";
import User from "./icons/User";
import {Container} from './Container';
import { Link } from "react-router-dom";
import { t } from "i18next";

function Navbar() {
  return (
    <NavbarWrapper>
      <StyledContainer>
        <StyledLink to="/">
          <StyledList />
          <Text>{t('bottomNavbar.listTitle')}</Text>
        </StyledLink>
        <StyledLink to="/account">
          <StyledUser />
          <Text>{t('bottomNavbar.accountTitle')}</Text>
        </StyledLink>
      </StyledContainer>
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.div`
  background: #fafafa;
  padding: 0.75rem 0 1.5rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;
const StyledContainer = styled(Container)`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`;
const StyledLink = styled(Link)`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#000000;
`;
const Text = styled.span`
    margin-top:0.75rem;
`;
const StyledList = styled(List)``;
const StyledUser = styled(User)``;
