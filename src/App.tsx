import React from "react";
import About from "./Componets/AboutUs";
import Banner from "./Componets/Banner";
import Clients from "./Componets/Clients";
import Header from "./Componets/Header";
import Stats from "./Componets/Statistics";
import Topbar from "./Componets/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Banner />
      <main>
        <About />
        <Clients />
        <Stats />
      </main>
    </>
  );
}

export default App;
