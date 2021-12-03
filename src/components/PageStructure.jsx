import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Checkout from "./Checkout";
import ProductInfo from "./ProductInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function PageStructure() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/:productInfo" element={<ProductInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default PageStructure;
