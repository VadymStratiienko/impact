import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Assets";

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  transition: all 0.5s;
  z-index: 997;
  height: 90px;
  background-color: var(--color-primary);
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  position: ${({ isScrolled }) => isScrolled && "fixed"};
  top: 0;
  right: 0;
  left: 0;
  height: ${({ isScrolled }) => isScrolled && "70px"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? " 0px 2px 20px rgb(0 0 0 / 10%)" : ""};
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;

  h1 {
    font-size: 30px;
    margin: 0;
    font-weight: 600;
    letter-spacing: 0.8px;
    color: #fff;
    font-family: var(--font-primary);
    line-height: 1.2;

    span {
      color: #f96f59;
    }
  }
`;
const Navbar = styled.nav`
  @media (min-width: 1280px) {
    padding: 0;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-items: center;
      li {
        position: relative;
      }
    }
    ul > li {
      white-space: nowrap;
      padding: 10px 0 10px 28px;
    }

    ul a,
    a:focus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3px;
      font-family: var(--font-secondary);
      font-size: 16px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
      white-space: nowrap;
      transition: 0.3s;
      position: relative;
    }
    ul > li > a::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -6px;
      left: 0;
      background-color: var(--color-secondary);
      visibility: hidden;
      width: 0px;
      transition: all 0.3s ease-in-out 0s;
    }

    a:hover::before,
    li:hover > a::before,
    .active::before {
      visibility: visible;
      width: 100%;
    }
    a:hover,
    .active,
    .active:focus,
    li:hover > a {
      color: #fff;
    }
  }
  @media (max-width: 1280px) {
    display: none;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);


  let navbarlinks = document.querySelectorAll('#navbar a');
  
useEffect (() => {
  function navbarlinksActive() {
    navbarlinks.forEach((navbarlink:any) => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  document.addEventListener('scroll', navbarlinksActive);
},[navbarlinks])



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Container>
        <Logo to="/">
          <h1>
            Impact<span>.</span>
          </h1>
        </Logo>
        <Navbar id="navbar">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
