import React from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import SingleProduct from "./components/SingleProduct";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/singleProduct/:id" element={<SingleProduct />} />
      </Route>
    )
  );
  return (
    <div>
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
