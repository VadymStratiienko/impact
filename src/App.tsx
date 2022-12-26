import React from "react";
import About from "./Componets/AboutUs";
import Banner from "./Componets/Banner";
import CallToAction from "./Componets/CallToAction";
import Clients from "./Componets/Clients";
import Header from "./Componets/Header";
import Portfolio from "./Componets/Portfolio";
import Pricing from "./Componets/Pricing";
import Services from "./Componets/Services";
import Stats from "./Componets/Statistics";
import Team from "./Componets/Team";
import Testimonials from "./Componets/Testimonials";
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
        <Testimonials />
        <Portfolio />
        <Team />
        <Pricing />
      </main>
    </>
  );
}

export default App;
