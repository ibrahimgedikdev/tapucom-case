import React from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import Account from "./pages/Account";
import List from "./pages/List";
import Signup from "./pages/Signup";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <GlobalStyle />
      <Router>
         <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route path="/list" element={<List />} />
            <Route path="/account" element={<Account />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
