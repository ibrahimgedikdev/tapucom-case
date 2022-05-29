// import { t } from "i18next";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../Input";
import { Button } from "../Button";
import { useAuth } from "../../context/AuthContext";
import { fetchRegister, isExistUser } from "../../api/api";
import { toastSuccess, toastError } from "../../constant/toastify";
import { useTranslation } from "react-i18next";
import LanguageContext from "../../context/LanguageContext";
import { css } from "styled-components";

function SignupForm() {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(LanguageContext);

  function changeLocale(lang) {
    if (locale !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('selectedLanguage', lang);
    }
  }

  const navigate = useNavigate();
  const { register } = useAuth();
  const validation = Yup.object({
    email: Yup.string().email(t("signup.emailError")).required(t("signup.emailRequired")),
    password: Yup.string().required(t("signup.passwordRequired")).min(8, t('signup.passwordError')).max(20),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          locale: "en",
        }}
        validationSchema={validation}
        onSubmit={async (values) => {
          const isExist = await isExistUser(values.email);
          if (isExist !== undefined) {
            toastError(t("messages.signupError"));
          } else {
            const registerResponse = await fetchRegister({
              email: values.email,
              password: values.password,
              locale: values.locale,
            });
            register(registerResponse);
            toastSuccess(t("messages.signupSuccess"));
            navigate("/list");
          }
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          dirty,
          touched,
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
              <Label htmlFor="email" errors={errors.email}>{t("signup.emailPlaceholder")}</Label>
              {errors.email && touched.email && <Error>{errors.email}</Error>}
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
              <Label htmlFor="password" errors={errors.password}>
                {t("signup.passwordPlaceholder")}
              </Label>
              {errors.password && touched.password && (
                <Error>{errors.password}</Error>
              )}
            </FormGroup>
            <FormGroup>
              <SelectLabel htmlFor="locale">Locale</SelectLabel>
              <StyledField
                as="select"
                name="locale"
                multiple={false}
                defaultValue={locale == "tr" ? "tr" : "en"}
                onChange={(e) => changeLocale(e.target.value)}
              >
                <Option value="tr" >{t("locale.tr")}</Option>
                <Option value="en" >{t("locale.en")}</Option>
              </StyledField>
            </FormGroup>
            <StyledButton primary type="submit">
              {t("signup.signupBtn")}
            </StyledButton>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignupForm;

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
  transition:all 0.3s ease-in-out;
  ${(props) => props.errors && css`
      top:25%;
    `};
`;
const StyledInput = styled(Input)`
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  &:not(:placeholder-shown) + ${Label} {
    top: -0.4rem;
  }
  &:focus {
    border-bottom: 2px solid #0dafc0;
  }
  &:focus + ${Label} {
    top: -0.4rem;
  }
`;
const SelectLabel = styled.label`
  color: #64738c;
  font-size: 0.75rem;
  display: block;
  margin-top:1rem;
`;
const StyledField = styled(Field)`
  appearance: none;
  display: block;
  background: transparent;
  border: none;
  border-bottom: 2px solid #bbc3cf;
  width: 100%;
  height: 45px;
  outline: none;
  color: #121212;
  font-family: "Nunito Sans";
  font-size: 1rem;
  appearance: none;
  background: transparent;
  background-image: url("icons/arrow.svg");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 22px;
`;
const Option = styled.option``;
const StyledButton = styled(Button)`
  font-weight: 700;
  margin-top: 2rem;
`;
const Error = styled.div`
  /* position: absolute; */
  /* bottom: -2rem;
  left: 0; */
  background: #e82223;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin-top: 0.4rem;
`;
