import React from "react";
import styled from "styled-components";
import { Container } from "../../Assets";
import Cta from "../../Assets/img/cta-bg.jpg";

const ContainerAction = styled(Container)`
    display: block;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Cta}') ;
    background-size: cover;
    padding: 100px 60px;
    border-radius: 15px;
    overflow: hidden;
    text-align: center!important;
    h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}
p {
  color: #fff;
  margin-bottom: 20px;
}
  
`;
const BtnPlay = styled.a`
  width: 94px;
  height: 94px;
  margin-bottom: 20px;
  background: radial-gradient(
    var(--color-primary) 50%,
    rgba(0, 131, 116, 0.4) 52%
  );
  border-radius: 50%;
  display: inline-block;
  position: relative;
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
`;
const CtaBtn = styled.a`
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 48px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid #fff;
  color: #fff;
  :hover {
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    color: #fff;
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
`;

const CallToAction = () => {
  return (
    <section>
      <ContainerAction data-aos="zoom-out">
        <BtnPlay href=""></BtnPlay>
        <h3>Call To Action</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <CtaBtn href="">Call To Action</CtaBtn>
      </ContainerAction>
    </section>
  );
};

export default CallToAction;
