import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Componets/Header";
import Topbar from "./Componets/Topbar";
import Footer from "./Componets/Footer";
import Blog from "./page/Blog";
import BlogDetails from "./page/BlogDetails"
import PortfolioDetails from "./page/PortfolioDetails";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
