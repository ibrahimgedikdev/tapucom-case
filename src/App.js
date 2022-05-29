import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import Router from "./router/router";
import i18n from "./lang/i18n";
import LanguageContext from "./context/LanguageContext";
import { BasketProvider } from "./context/BasketContext";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <AuthProvider>
        <BasketProvider>
          <ToastContainer closeButton={true} />
          <GlobalStyle />
          <Navbar />
          <Router />
        </BasketProvider>
      </AuthProvider>
    </LanguageContext.Provider>
  );
}

export default App;
