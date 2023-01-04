import React from "react";
import { BsBox, BsCheck, BsX } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import styled from "styled-components";
import { Container, SectionHeader } from "../../Assets";

const Section = styled.section`
  background-color: #f6f6f6;
`;
const ContainerPrice = styled(Container)`
  display: block;
`;
const Prices = styled.div`
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  @media (min-width: 992px) {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const BlockPrice = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .featured {
    z-index: 10;
    border: 3px solid var(--color-primary);
  }
  @media (min-width: 992px) {
    .featured {
      transform: scale(1.15);
    }
  }
`;
const PricingItem = styled.div`
  padding: 60px 40px;
  box-shadow: 0 3px 20px -2px rgb(108 117 125 / 15%);
  background: #fff;
  height: 100%;
  position: relative;
  border-radius: 15px;
  h3 {
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 20px;
    color: #555555;
    text-align: center;
  }
  h4 {
    font-size: 48px;
    color: var(--color-secondary);
    font-weight: 700;
    font-family: var(--font-secondary);
    margin-bottom: 0;
    text-align: center;
    sup {
      font-size: 28px;
      position: relative;
      line-height: 0;
      vertical-align: baseline;
      top: -0.5em;
    }
    span {
      color: rgba(108, 117, 125, 0.8);
      font-size: 18px;
      font-weight: 400;
    }
  }
  ul {
    padding: 20px 0;
    list-style: none;
    color: #6c757d;
    text-align: left;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 1rem;
    li {
      padding: 10px 0;
      display: flex;
      align-items: center;
    }
    .na span {
      color: rgba(108, 117, 125, 0.5);
      text-decoration: line-through;
    }
  }
`;
const BlockIcon = styled.div`
  margin: 30px auto 30px auto;
  width: 70px;
  height: 70px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  transform-style: preserve-3d;
  ::before {
    position: absolute;
    content: "";
    height: 86px;
    width: 86px;
    border-radius: 50%;
    background: #87c1bb;
    transition: all 0.3s ease-out 0s;
    transform: translateZ(-1px);
  }
  ::after {
    position: absolute;
    content: "";
    height: 102px;
    width: 102px;
    border-radius: 50%;
    background: #d2eeeb;
    transition: all 0.3s ease-out 0s;
    transform: translateZ(-2px);
  }
`;
const BoxIcon = styled(BsBox)`
  color: #fff;
  font-size: 28px;
  transition: ease-in-out 0.3s;
  line-height: 0;
`;
const OutlineAirplanemodeActive = styled(MdOutlineAirplanemodeActive)`
  color: #fff;
  font-size: 28px;
  transition: ease-in-out 0.3s;
  line-height: 0;
`;
const SendIcon = styled(FiSend)`
  color: #fff;
  font-size: 28px;
  transition: ease-in-out 0.3s;
  line-height: 0;
`;
const BlockBtn = styled.div`
  text-align: center !important;
  a {
    display: inline-block;
    padding: 10px 40px;
    border-radius: 50px;
    color: var(--color-primary);
    border: 1px solid rgba(0, 131, 116, 0.2);
    transition: none;
    font-size: 16px;
    font-weight: 600;
    font-family: var(--font-primary);
    transition: 0.3s;
    :hover {
      background: var(--color-primary);
      color: #fff;
    }
  }
`;
const Check = styled(BsCheck)`
  color: #059652;
  font-size: 28px;
  padding-right: 3px;
`;
const X = styled(BsX)`
  color: rgba(108, 117, 125, 0.5);
  font-size: 28px;
  padding-right: 3px;
`;
const Pricing = () => {
  return (
    <Section>
      <ContainerPrice data-aos="fade-up">
        <SectionHeader>
          <h2>Pricing</h2>
          <p>
            Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
            incidunt dolores placeat sunt id nobis omnis tiledo stran delop
          </p>
        </SectionHeader>
        <Prices  data-aos="zoom-out" data-aos-delay="100">
          <BlockPrice>
            <PricingItem>
              <h3>Free Plan</h3>
              <BlockIcon>
                <BoxIcon />
              </BlockIcon>
              <h4>
                <sup>$</sup>0<span> / mouth</span>
              </h4>
              <ul>
                <li>
                  <Check />
                  Quam adipiscing vitae proin
                </li>
                <li>
                  <Check />
                  Nec feugiat nisl pretium
                </li>
                <li>
                  <Check />
                  Nulla at volutpat diam uteera
                </li>
                <li className="na">
                  <X />
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
                <li className="na">
                  <X />
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
              <BlockBtn>
                <a href="">Buy Now</a>
              </BlockBtn>
            </PricingItem>
          </BlockPrice>
          <BlockPrice>
            <PricingItem className="featured">
              <h3>Business Plan</h3>
              <BlockIcon>
                <OutlineAirplanemodeActive />
              </BlockIcon>
              <h4>
                <sup>$</sup>29<span> / mouth</span>
              </h4>
              <ul>
                <li>
                  <Check />
                  Quam adipiscing vitae proin
                </li>
                <li>
                  <Check />
                  Nec feugiat nisl pretium
                </li>
                <li>
                  <Check />
                  Nulla at volutpat diam uteera
                </li>
                <li>
                  <Check />
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
                <li>
                  <Check />
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
              <BlockBtn>
                <a href="">Buy Now</a>
              </BlockBtn>
            </PricingItem>
          </BlockPrice>
          <BlockPrice>
            <PricingItem>
              <h3>Developer Plan</h3>
              <BlockIcon>
                <SendIcon />
              </BlockIcon>
              <h4>
                <sup>$</sup>49<span> / mouth</span>
              </h4>
              <ul>
                <li>
                  <Check />
                  Quam adipiscing vitae proin
                </li>
                <li>
                  <Check />
                  Nec feugiat nisl pretium
                </li>
                <li>
                  <Check />
                  Nulla at volutpat diam uteera
                </li>
                <li>
                  <Check />
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
                <li>
                  <Check />
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
              <BlockBtn>
                <a href="">Buy Now</a>
              </BlockBtn>
            </PricingItem>
          </BlockPrice>
        </Prices>
      </ContainerPrice>
    </Section>
  );
};

export default Pricing;
