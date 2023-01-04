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

const FAQ = () => {
  return (
    <section>
      <ContainetFAQ data-aos="fade-up">
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
