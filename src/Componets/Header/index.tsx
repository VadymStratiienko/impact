import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../Assets';

import Sidebar from '../Sidebar';

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
  position: ${({ isScrolled }) => isScrolled && 'fixed'};
  top: 0;
  right: 0;
  left: 0;
  height: ${({ isScrolled }) => isScrolled && '70px'};
  box-shadow: ${({ isScrolled }) => (isScrolled ? ' 0px 2px 20px rgb(0 0 0 / 10%)' : '')};
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
const ContainerNav = styled(Container)`
  justify-content: space-between;
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
      content: '';
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
const StyledBurger = styled.div<{ open: boolean }>`
  width: 28px;
  height: 28px;
  display: none;
  @media (max-width: 1278px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 999999;
  }
  div {
    width: 28px;
    height: 2px;
    background-color: ${({ open }) => (open ? '#ccc' : '#ffffff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
interface Iroutes {
  link: string;
  title: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { ref } = useInView({
    threshold: 0,
  });

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

  const routes: Iroutes[] = [
    {
      link: '#hero',
      title: 'Home',
    },
    {
      link: '#about',
      title: 'About',
    },
    {
      link: '#services',
      title: 'Services',
    },
    {
      link: '#portfolio',
      title: 'Portfolio',
    },
    {
      link: '#team',
      title: 'Team',
    },
    {
      link: 'blog',
      title: 'Blog',
    },
    {
      link: '#contact',
      title: 'Contact',
    },
  ];

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <ContainerNav>
        <Logo to='/'>
          <h1>
            Impact<span>.</span>
          </h1>
        </Logo>
        <Navbar id='navbar'>
          <ul>
            {routes.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link} onClick={() => setOpen(!open)} ref={ref}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Navbar>
        <StyledBurger open={open} onClick={() => setOpen(!open)} style={{ marginLeft: '20px' }}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Sidebar open={open} setOpen={setOpen} />
      </ContainerNav>
    </HeaderContainer>
  );
};

export default Header;
