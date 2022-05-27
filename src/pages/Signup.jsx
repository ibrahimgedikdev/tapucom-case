import { t } from "i18next";
import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import SignupForm from '../components/Form/SignupForm';


function Signup(props){
  return (
    <SignupWrapper>
      <StyledContainer>
        <Heading>{t("signup.signupTitle")}</Heading>
        <SignupForm  />
      </StyledContainer>
    </SignupWrapper>
  );
}

export default Signup;

const SignupWrapper = styled.div`
  min-height: 100vh;
`;
const StyledContainer = styled(Container)``;
const Heading = styled.h1`
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 600;
`;

