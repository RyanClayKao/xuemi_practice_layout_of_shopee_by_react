/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const initialState = {
  isLogin: false,
};

export const AuthContext = createContext(initialState);

export default function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(initialState.isLogin);

  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem("shoppe:auth.state"));
    if (authState && authState.token) {
      setIsLogin(true);
    }
  });

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        loginFn: async (username, password) => {
          if (username === "ryan") {
            const token = "good_token";
            localStorage.setItem(
              "shoppe:auth.state",
              JSON.stringify({ token })
            );
            setIsLogin(true);
            return { token };
          }

          setIsLogin(false);
          return { token: null, error: "invalid password" };
        },
        logoutFn: () => {
          localStorage.removeItem("shoppe:auth.state");
          setIsLogin(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
