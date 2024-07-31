import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutUsPage from "./pages/AboutUsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default App;
