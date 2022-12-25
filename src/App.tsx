import React from "react";
import About from "./Componets/AboutUs";
import Banner from "./Componets/Banner";
import Header from "./Componets/Header";
import Topbar from "./Componets/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Banner />
      <main>
        <About />
      </main>
    </>
  );
}

export default App;
