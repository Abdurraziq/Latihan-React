import React, { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [dataLogin, setDataLogin] = useState(
    JSON.parse(localStorage.getItem("loginData"))
  );

  const setLogin = (data) => {
    localStorage.setItem("loginData", JSON.stringify(data));
    setDataLogin(data);
  };

  const logout = () => {
    localStorage.removeItem("loginData");
    setDataLogin(null);
  };

  return (
    <authContext.Provider value={{ dataLogin, setDataLogin: setLogin, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
