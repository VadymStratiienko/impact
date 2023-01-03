import React, { useEffect } from "react";
import styled from "styled-components";

const Navbar = styled.nav<{ open: boolean }>`
display: none;
  @media (max-width: 1279px) {
    display: block;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? 0 : "-100%")};
    width: 100%;
    max-width: 400px;
    bottom: 0;
    transition: 0.5s;
    z-index: 9997;
    ::before {
      content: "";
      position: fixed;
      inset: ${({ open }) => open && 0};
      background: ${({ open }) => (open ? "rgba(0, 106, 93, 0.8)" : "")};
      z-index: ${({ open }) => open && 9996};
    }
    a:hover,
    .active,
    .active:focus,
    li:hover > a {
      color: #fff;
    }
  }
  ul {
    @media (max-width: 1279px) {
      position: absolute;
      inset: 0;
      padding: 50px 0 10px 0;
      margin: 0;
      background: rgba(0, 131, 116, 0.9);
      overflow-y: auto;
      transition: 0.5s;
      z-index: 9998;
    }
  }

  @media (max-width: 1279px) {
    a,
    .navbar a:focus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      font-family: var(--font-primary);
      font-size: 15px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);
      white-space: nowrap;
      transition: 0.3s;
    }
  }
`;

interface ISidebar {
  open: boolean;
  setOpen: (open: boolean) => void;
}
interface Iroutes {
  link: string;
  title: string;
}

const Sidebar = ({ open, setOpen }: ISidebar) => {
  let navbarlinks = document.querySelectorAll("#navbar a");
  useEffect(() => {
    function navbarlinksActive() {
      navbarlinks.forEach((navbarlink: any) => {
        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        let position = window.scrollY + 200;

        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    }
    document.addEventListener("scroll", navbarlinksActive);
  }, [navbarlinks]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const routes: Iroutes[] = [
    {
      link: "#hero",
      title: "Home",
    },
    {
      link: "#about",
      title: "About",
    },
    {
      link: "#services",
      title: "Services",
    },
    {
      link: "#portfolio",
      title: "Portfolio",
    },
    {
      link: "#team",
      title: "Team",
    },
    {
      link: "blog",
      title: "Blog",
    },
    {
      link: "#contact",
      title: "Contact",
    },
  ];

  return (
    <Navbar open={open} id="navbar">
      <ul>
        {routes.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} onClick={() => setOpen(!open)}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Navbar>
  );
};

export default Sidebar;
