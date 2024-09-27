import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />},
  { path: "/login", element: <LoginPage />},
  { path: "/mall", element: <HomePage />},
  { path: "/cart", element: <CartPage />},
  { path: "/checkout", element: <CheckoutPage />},
  { path: "/mall/:categoryName", element: <ProductCollectionPage />},
  { path: "/:productName", element: <ProductPage />},
]);


export default router;