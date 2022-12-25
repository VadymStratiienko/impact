import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../Assets";

const HeaderContainer = styled.header<{isScrolled:boolean}>`
  transition: all 0.5s;
  z-index: 997;
  height: 90px;
  background-color: var(--color-primary);
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  position:${({isScrolled}) => (isScrolled && "fixed")};
  top: 0;
  right: 0;
  left: 0;
  height: ${({isScrolled}) => (isScrolled && "70px")};
  box-shadow:${({isScrolled}) => (isScrolled ? " 0px 2px 20px rgb(0 0 0 / 10%)" : "")};
`
const Logo = styled.a`
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

    ul li a,
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
    li:hover > a::before {
      visibility: visible;
      width: 100%;
    }
    li:hover>a {
    color: #fff;
  }
  }
  @media (max-width: 1280px) { 
    display: none;
  }

`;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Container>
        <Logo href="">
          <h1>
            Impact<span>.</span>
          </h1>
        </Logo>
        <Navbar>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
