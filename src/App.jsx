import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/NewsLetter/NewsLetter";
import { ShoppingCartProvider } from "./components/Cart/ShoppingCartContext";
import DashBoard from "./components/Admin/DashBoard";
import Inventory from "./components/Admin/Inventory";
import NewProduct from "./components/Admin/InventoryProduct/NewProduct";
import EditProduct from "./components/Admin/InventoryProduct/ProductEdit";
import DeleteProduct from "./components/Admin/InventoryProduct/DeleteProduct";

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/inventory/new" element={<NewProduct />} />
          <Route path="/admin/inventory/edit/:id" element={<EditProduct />} />
          <Route
            path="/admin/inventory/delete/:id"
            element={<DeleteProduct />}
          />
          {/* <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/settings" element={<Settings />} /> */}
        </Routes>
        <NewsLetter />
        <Footer />
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default App;
