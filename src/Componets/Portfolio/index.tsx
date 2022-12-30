import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, SectionHeader } from "../../Assets";
import { portfolioData } from "../../data/portfolio";


const Section = styled.section`
  background-color: #f6f6f6;
`;
const ConteinerPortfolio = styled(Container)`
  display: block;
`;
const WrapperPortfolio = styled.div`
  position: relative;
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  .active-tabs {
    color: var(--color-primary);
  }

  li {
    cursor: pointer;
    display: inline-block;
    padding: 0;
    font-size: 18px;
    font-weight: 500;
    margin: 0 10px;
    line-height: 1;
    transition: all 0.3s ease-in-out;
    :hover {
      color: var(--color-primary);
    }

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
`;
const PortfolioItem = styled.div`
  position: relative;
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 33.33333333% !important;
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;
const PortfolioWrapp = styled.div`
  box-shadow: 0px 10px 30px rgb(0 0 0 / 10%);
  border-radius: 10px;

  overflow: hidden;
  img {
    transition: 0.3s;
    z-index: 1;
    max-width: 100%;
    height: auto;
  }
  :hover img {
    transform: scale(1.1);
  }
`;
const Info = styled.div`
  padding: 25px 20px;
  background-color: #fff;

  border-top: 1px solid #f3f3f3;
  z-index: 2;
  h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    padding-right: 50px;
    a {
      color: var(--color-default);
      transition: 0.3s;
    }
  }
  p {
    color: #6c757d;
    font-size: 14px;
    margin-bottom: 0;
    padding-right: 50px;
  }
  h4 a:hover {
    color: var(--color-primary);
  }
`;

const Portfolio = () => {
  const [filtered, setFiltered] = useState(portfolioData);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  function filterCategories(category: string) {
    if (category === "All") {
      setFiltered(portfolioData);
      toggleTab(1);
    } else if (category === "App") {
      let App = [...portfolioData].filter((item) => item.category === "App");
      setFiltered(App);
      toggleTab(2);
    } else if (category === "Books") {
      let Books = [...portfolioData].filter(
        (item) => item.category === "Books"
      );
      setFiltered(Books);
      toggleTab(3);
    } else if (category === "Branding") {
      let Branding = [...portfolioData].filter(
        (item) => item.category === "Branding"
      );
      setFiltered(Branding);
      toggleTab(4);
    } else if (category === "Product") {
      let Product = [...portfolioData].filter(
        (item) => item.category === "Product"
      );
      setFiltered(Product);
      toggleTab(5);
    }
  }

  return (
    <Section id="portfolio">
      <ConteinerPortfolio>
        <SectionHeader>
          <h2>Portfolio</h2>
          <p>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </p>
        </SectionHeader>

        <div>
          <Tabs>
            <li
              className={toggleState === 1 ? " active-tabs" : ""}
              onClick={() => filterCategories("All")}
            >
              All
            </li>
            <li
              className={toggleState === 2 ? "active-tabs" : ""}
              onClick={() => filterCategories("App")}
            >
              App
            </li>
            <li
              className={toggleState === 3 ? "active-tabs" : ""}
              onClick={() => filterCategories("Books")}
            >
              Books
            </li>
            <li
              className={toggleState === 4 ? "active-tabs" : ""}
              onClick={() => filterCategories("Branding")}
            >
              Branding
            </li>
            <li
              className={toggleState === 5 ? "active-tabs" : ""}
              onClick={() => filterCategories("Product")}
            >
              Product
            </li>
          </Tabs>
          <WrapperPortfolio>
            {filtered.map((item, index) => {
              return (
                <PortfolioItem key={index}>
                  <PortfolioWrapp>
                    <img src={item.img} alt="" />
                    <Info>
                      <h4>
                        <Link to="portfolio-details">{item.title}</Link>
                      </h4>
                      <p>{item.text}</p>
                    </Info>
                  </PortfolioWrapp>
                </PortfolioItem>
              );
            })}
          </WrapperPortfolio>
        </div>
      </ConteinerPortfolio>
    </Section>
  );
};

export default Portfolio;
