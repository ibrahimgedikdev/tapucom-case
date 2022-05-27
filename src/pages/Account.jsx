import React, {useContext} from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/Button";
import Arrow from "../components/icons/Arrow";
import { useTranslation } from "react-i18next";
import LanguageContext from "../context/LanguageContext";

function Account() {
  const { user, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const { locale } = useContext(LanguageContext);

  function changeLocale(lang) {
    if (locale !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("selectedLanguage", lang);
    }
  }

  return (
    <AccountWrapper>
      <Container>
        <Heading>{t("account.accountTitle")}</Heading>
        <Username>{user?.name}</Username>
        <UserEmail>
          {t("account.accountEmail")}: {user?.email}
        </UserEmail>
        <UserPassword>
          {t("account.accountPassword")}: {user?.password}
        </UserPassword>
        <UserLocale>
          {t("account.accountLocale")}: {user?.locale}
        </UserLocale>
        <Hr></Hr>
        <SelectLabel htmlFor="locale">Locale</SelectLabel>
        <LocaleSelect
          name="locale"
          defaultValue={locale == "tr" ? "tr" : "en"}
          onChange={(e) => changeLocale(e.target.value)}
        >
          <Option value="tr">{t("locale.tr")}</Option>
          <Option value="en">{t("locale.en")}</Option>
        </LocaleSelect>
        <StyledButton tertiary onClick={logout}>
          Log out
        </StyledButton>
      </Container>
    </AccountWrapper>
  );
}

export default Account;

const AccountWrapper = styled.div`
  min-height: 100vh;
`;
const Heading = styled.h1`
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 600;
`;
const Username = styled.h1``;
const UserEmail = styled.h6`
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  font-weight: 500;
  margin: 0.25rem 0;
`;
const UserPassword = styled.h6`
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  font-weight: 500;
  margin: 0.25rem 0;
`;

const UserLocale = styled.h6`
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  font-weight: 500;
  margin: 0.25rem 0;
`;

const Hr = styled.hr`
  border: 1px solid #e6e6e6;
  margin-top: 1.1rem;
`;
const SelectLabel = styled.label`
  color: #64738c;
  font-size: 0.75rem;
  display: block;
  margin-top: 1.5rem;
`;
const LocaleSelect = styled.select`
  appearance: none;
  display: block;
  background: transparent;
  border: none;
  border-bottom: 2px solid #64738c;
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
  margin-top: 2.25rem;
`;
