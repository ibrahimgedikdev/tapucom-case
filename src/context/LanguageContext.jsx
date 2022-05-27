import React from "react";

const defaultValue = {
  locale: localStorage.getItem('selectedLanguage') || "en",
  setLocale: () => {},
};

export default React.createContext(defaultValue);
