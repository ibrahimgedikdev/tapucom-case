import { t } from "i18next";
import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Formik, Field } from "formik";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

function Signup() {
  return (
    <SignupWrapper>
      <StyledContainer>
        <Heading>{t("signUp.signUpTitle")}</Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Label htmlFor="email">E-mail</Label>
                {errors.email && touched.email && errors.email}
              </FormGroup>
              <FormGroup>
                <StyledInput
                  type="password"
                  name="password"
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Label htmlFor="password">Password</Label>
                {errors.password && touched.password && errors.password}
              </FormGroup>
              <FormGroup>
                <SelectLabel htmlFor="locale">Locale</SelectLabel>
                <StyledField component="select" name="locale" multiple={false}>
                  <Option value="tr" selected>
                    {t("locale.tr")}
                  </Option>
                  <Option value="en">{t("locale.en")}</Option>
                </StyledField>
              </FormGroup>
              <StyledButton primary type="submit" disabled={isSubmitting}>
                Sign Up
              </StyledButton>
            </Form>
          )}
        </Formik>
      </StyledContainer>
    </SignupWrapper>
  );
}

export default Signup;

const SignupWrapper = styled.div`
  min-height:100vh;
`;
const StyledContainer = styled(Container)``;
const Heading = styled.h1`
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormGroup = styled.div`
  margin-bottom: 2.25rem;
  position: relative;
`;

const Label = styled.label`
  color: #64738c;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const StyledInput = styled(Input)`
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  &:not(:placeholder-shown) + ${Label}{
    top: -0.4rem;
  };
  &:focus {
    border-bottom:2px solid #0DAFC0;
  }
  &:focus + ${Label} {
    top: -0.4rem;
    
  };
`;
const SelectLabel = styled.label`
  color: #64738c;
  font-size: 0.75rem;
  display: block;
`;
const StyledField = styled(Field)`
  appearance: none;
  display: block;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid #bbc3cf;
  width: 100%;
  height: 45px;
  outline: none;
  color: #121212;
  font-family: "Nunito Sans";
  font-size: 1rem;
`;
const Option = styled.option``;
const StyledButton = styled(Button)`
  font-weight: 700;
  margin-top: 2rem;
`;
