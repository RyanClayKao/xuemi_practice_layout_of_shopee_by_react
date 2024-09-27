/* eslint-disable react/prop-types */
import { createContext } from "react";

const initialState = {
  isLogin: false,
};

export const AuthContext = createContext(initialState);

export default function AuthContextProvider({ children }) {
  const ctxValue = {
    ...initialState,
  }

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}
