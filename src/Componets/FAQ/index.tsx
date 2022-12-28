import React from "react";
import styled from "styled-components";
import { Container } from "../../Assets";
import AccordionComponent from "../Accordion";


const ContainetFAQ = styled(Container)`
  display: block;
`;
const WrapperFAQ = styled.div`
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const BlockContent = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
`;
const Content = styled.div`
  @media (min-width: 1200px) {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  h3 {
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: 34px;
  }
  p {
    font-size: 15px;
    color: #6c757d;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const BlockAccordion = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
`;
const AccordionItem = styled.div`
  border: 0;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 6%);
  border-radius: 10px;
  :first-child {
    border-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 0;
    button {
      padding: 20px 50px 20px 20px;
      font-weight: 600;
      border: 0;
      font-size: 18px;
      line-height: 24px;
      color: var(--color-default);
      text-align: left;
      background: #fff;
      box-shadow: none;
      border-radius: 10px;
      span {
        padding-right: 10px;
        font-size: 20px;
        line-height: 0;
        color: var(--color-primary);
      }
    }
    button:not(.collapsed) {
      color: var(--color-primary);
      border-bottom: 0;
      box-shadow: none;
    }
  }
`;

const FAQ = () => {
  return (
    <section>
      <ContainetFAQ>
        <WrapperFAQ>
          <BlockContent>
            <Content>
              <h3>
                Frequently Asked <strong>Questions</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </Content>
          </BlockContent>
          <BlockAccordion>
           <AccordionComponent />
          </BlockAccordion>
        </WrapperFAQ>
      </ContainetFAQ>
    </section>
  );
};

export default FAQ;
