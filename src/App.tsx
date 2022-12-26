import React from "react";
import About from "./Componets/AboutUs";
import Banner from "./Componets/Banner";
import CallToAction from "./Componets/CallToAction";
import Clients from "./Componets/Clients";
import Header from "./Componets/Header";
import Services from "./Componets/Services";
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
        <CallToAction />
        <Services />
      </main>
    </>
  );
}

export default App;
