import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loginData') ? true : false);

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    if (loginData !== null) {
      setLoggedIn(true);
      setUser(loginData);
    }
  }, [])


  const register = (data) => {
    setLoggedIn(true)
    setUser(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  }

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem("loginData");
    localStorage.removeItem("basket");
  };


  const values = {
    user,
    setUser,
    register,
    logout,
    loggedIn,
    setLoggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
