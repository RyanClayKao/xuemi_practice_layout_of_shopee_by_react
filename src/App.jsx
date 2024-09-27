import { RouterProvider } from "react-router-dom";

import router from "./router";
import "./App.css";
import AuthContextProvider from "./components/auth/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
