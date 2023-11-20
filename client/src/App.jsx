import React from "react";
import { useFetch } from "./useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/NewsLetter/NewsLetter";
import AppContext from "./utils/context";
import SignIn from "./components/Login/SignIn";

const App = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/products");

  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        {/* <div>
          <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {data?.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div> */}
        <NewsLetter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
};

export default App;
