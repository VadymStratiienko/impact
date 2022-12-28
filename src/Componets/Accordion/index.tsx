import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

const Wrapper = styled.div`
  .accordion-item {
    border: 0;
    margin-bottom: 20px;
    box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 6%);
    border-radius: 10px;
  }
  .accordion-item:first-child {
    border-top: 0;
  }
  .accordion-header {
    margin-bottom: 0;
  }
  .accordion-flush .accordion-item .accordion-button,
  .accordion-flush .accordion-item .accordion-button.collapsed {
    border-radius: 0;
  }
  .accordion-button .num {
    padding-right: 10px;
    font-size: 20px;
    line-height: 0;
    color: var(--color-primary);
  }
  .accordion-button:after {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .accordion-button {
    padding: 20px 50px 20px 20px;
    font-weight: 600;
    border: 0;
    font-size: 18px;
    line-height: 24px;
    color: var(--color-default);
    text-align: left;
    background: #fff;
    box-shadow: none;
  }
  .accordion-button:not(.collapsed) {
    color: var(--color-primary);
    border-bottom: 0;
    box-shadow: none;
  }

  .accordion-body {
    padding: 0 40px 30px 45px;
    border: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: none;
  }
`;

const AccordionComponent = () => {
  return (
    <Wrapper>
      {" "}
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="num">1.</span>  Non consectetur a erat nam at
            lectus urna duis?
          </Accordion.Header>
          <Accordion.Body>
            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
            volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna
            fringilla urna porttitor rhoncus dolor purus non.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            <span className="num">2.</span>  Feugiat scelerisque varius morbi
            enim nunc faucibus a pellentesque?
          </Accordion.Header>
          <Accordion.Body>
            Dolor sit amet consectetur adipiscing elit pellentesque habitant
            morbi. Id interdum velit laoreet id donec ultrices. Fringilla
            phasellus faucibus scelerisque eleifend donec pretium. Est
            pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
            cursus turpis massa tincidunt dui.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            <span className="num">3.</span>  Dolor sit amet consectetur
            adipiscing elit pellentesque habitant morbi?
          </Accordion.Header>
          <Accordion.Body>
            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
            orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
            diam sit amet nisl suscipit. Rutrum tellus pellentesque eu
            tincidunt. Lectus urna duis convallis convallis tellus. Urna
            molestie at elementum eu facilisis sed odio morbi quis
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {" "}
            <span className="num">4.</span>  Ac odio tempor orci dapibus.
            Aliquam eleifend mi in nulla?
          </Accordion.Header>
          <Accordion.Body>
            Dolor sit amet consectetur adipiscing elit pellentesque habitant
            morbi. Id interdum velit laoreet id donec ultrices. Fringilla
            phasellus faucibus scelerisque eleifend donec pretium. Est
            pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
            cursus turpis massa tincidunt dui.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            {" "}
            <span className="num">5.</span>  Tempus quam pellentesque nec nam
            aliquam sem et tortor consequat?
          </Accordion.Header>
          <Accordion.Body>
            Molestie a iaculis at erat pellentesque adipiscing commodo.
            Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra
            maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est.
            Purus gravida quis blandit turpis cursus in
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Wrapper>
  );
};

export default AccordionComponent;
