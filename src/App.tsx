import React from "react";
import Home from "./page";
import { Route, Routes } from "react-router-dom";

import Header from "./Componets/Header";

import Topbar from "./Componets/Topbar";

import Footer from "./Componets/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
