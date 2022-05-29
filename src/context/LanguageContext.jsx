import {createContext} from "react";

const defaultValue = {
  locale: localStorage.getItem('selectedLanguage') || "en",
  setLocale: () => {},
};

export default createContext(defaultValue);
