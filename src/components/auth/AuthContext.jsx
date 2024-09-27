/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const initialState = {
  isLogin: false,
};

export const AuthContext = createContext(initialState);

export default function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(initialState.isLogin);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        loginFn: async (username, password) => {
          if (username === "ryan") {
            setIsLogin(true);
            return { token: "good_token" };
          }

          setIsLogin(false);
          return { token: null, error: "invalid password" };
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
