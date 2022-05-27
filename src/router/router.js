import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Account from "../pages/Account";
import List from "../pages/List";
import Signup from "../pages/Signup";
import Error404 from "../pages/Error404";

function Router() {
  const { loggedIn } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Navigate to="/list" /> : <Signup  />}
        />
        <Route
          path="/signup"
          element={loggedIn ? <Navigate to="/list" /> : <Signup  />}
        />
        <Route
          path="/list"
          element={loggedIn ? <List /> : <Navigate to="/signup" />}
        />
        <Route
          path="/account"
          element={loggedIn ? <Account /> : <Navigate to="/signup" />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Router;
