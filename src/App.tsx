import { useEffect } from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Componets/Header";
import Topbar from "./Componets/Topbar";
import Footer from "./Componets/Footer";
import Blog from "./page/Blog";
import BlogDetails from "./page/BlogDetails";
import PortfolioDetails from "./page/PortfolioDetails";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import "aos/dist/aos.css";
import AOS from "aos";

const SpecialModalBackground = styled(BaseModalBackground)`
  background-color: #0c0b0b;
  z-index: 999999999;
`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <ModalProvider backgroundComponent={SpecialModalBackground}>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
      </Routes>
      <Footer />
      <ScrollToTop smooth className="scroll-to-top" color="white" />
    </ModalProvider>
  );
}

export default App;
