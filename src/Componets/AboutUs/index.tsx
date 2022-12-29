import React from "react";
import styled from "styled-components";
import { Container, SectionHeader } from "../../Assets";
import AboutImg from "../../Assets/img/about.jpg";
import AboutImg_2 from "../../Assets/img/about-2.jpg";
import { BsCheckCircleFill } from "react-icons/bs";

const ContainerAbout = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.div`
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
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
const Block = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
    h3 {
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 20px;
      font-family: var(--font-secondary);
    }
  }
  img {
    border-radius: var(--bs-border-radius-xl) !important;
    margin-bottom: 1.5rem !important;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
  .italic {
    font-style: italic !important;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 0 0 10px 30px;
    position: relative;
  }
`;
const CheckCircleFill = styled(BsCheckCircleFill)`
  position: absolute;
  font-size: 20px;
  left: 0;
  top: 0;
  color: var(--color-primary);
`;
const Content = styled.div`
  padding-left: 0 !important;
  @media (min-width: 992px) {
    padding-left: 3rem !important;
  }
`;
const BlockVideo = styled.div`
  position: relative !important;
  margin-top: 1.5rem !important;

  a {
    width: 94px;
    height: 94px;
    background: radial-gradient(
      var(--color-primary) 50%,
      rgba(0, 131, 116, 0.4) 52%
    );
    border-radius: 50%;
    display: block;
    position: absolute;
    left: calc(50% - 47px);
    top: calc(50% - 47px);
    overflow: hidden;
    ::before {
      content: "";
      position: absolute;
      width: 120px;
      height: 120px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation: pulsate-btn 2s;
      animation: pulsate-btn 2s;
      -webkit-animation-direction: forwards;
      animation-direction: forwards;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: steps;
      animation-timing-function: steps;
      opacity: 1;
      border-radius: 50%;
      border: 5px solid rgba(0, 131, 116, 0.7);
      top: -15%;
      left: -15%;
      background: rgba(198, 16, 0, 0);
    }
    ::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-40%) translateY(-50%);
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 15px solid #fff;
      z-index: 100;
      transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    :hover::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-40%) translateY(-50%);
      width: 0;
      height: 0;
      border: none;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 15px solid #fff;
      z-index: 200;
      -webkit-animation: none;
      animation: none;
      border-radius: 0;
    }
    :hover::after {
      border-left: 15px solid var(--color-primary);
      transform: scale(20);
    }
    @-webkit-keyframes pulsate-btn {
      0% {
        transform: scale(0.6, 0.6);
        opacity: 1;
      }

      100% {
        transform: scale(1, 1);
        opacity: 0;
      }
    }

    @keyframes pulsate-btn {
      0% {
        transform: scale(0.6, 0.6);
        opacity: 1;
      }

      100% {
        transform: scale(1, 1);
        opacity: 0;
      }
    }
  }
`;

const About = () => {
  return (
    <section id="about">
      <ContainerAbout>
        <SectionHeader>
          <h2>About Us</h2>
          <p>
            Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
            incidunt dolores placeat sunt id nobis omnis tiledo stran delop
          </p>
        </SectionHeader>
        <Contents>
          <Block>
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <img src={AboutImg} alt="" />
            <p>
              Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
              quod nisi et. Placeat debitis quia recusandae odit et consequatur
              voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
            </p>
            <p>
              Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
              cupiditate nihil vitae quo officia vel. Blanditiis eligendi
              possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
              repellendus nobis tempore doloribus debitis explicabo similique
              sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p>
          </Block>
          <Block>
            <Content>
              <p className="italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <CheckCircleFill />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <CheckCircleFill />
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <CheckCircleFill />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <BlockVideo>
                <img src={AboutImg_2} alt="" />
                <a href="#"></a>
              </BlockVideo>
            </Content>
          </Block>
        </Contents>
      </ContainerAbout>
    </section>
  );
};

export default About;
