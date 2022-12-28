import React from "react";
import styled from "styled-components";
import { Container } from "../../Assets";

const ContainerFooter = styled(Container)`
  display: block;
`;
const FooterBlock = styled.div`
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
const FooterInfo = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 41.66666667% !important;
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
  }
  a {
    line-height: 0;
    margin-bottom: 25px;
    display: flex !important;
    span {
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #fff;
      font-family: var(--font-primary);
    }
  }
  p {
    font-size: 14px;
    font-family: var(--font-primary);
  }
`;
const FooterLinks = styled.div`
  margin-bottom: 30px;
  flex: 0 0 auto;
  width: 50%;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 16.66666667% !important;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul li:first-child {
    padding-top: 0;
  }
  ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  ul a {
    color: rgba(255, 255, 255, 0.7);
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
  }
`;
const FooterContact = styled.div`
  text-align: center !important;
  @media (min-width: 768px) {
    text-align: left !important;
  }
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 25% !important;
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
  }
  p {
    line-height: 26px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const Social = styled.div`
  margin-top: 1.5rem !important;
  display: flex !important;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 10px;
    transition: 0.3s;
  }
`;
const ContainerInf = styled(Container)`
  margin-top: 1.5rem !important;
  display: block;
`;
const Copyright = styled.div`
  text-align: center;
`;
const Credits = styled.div`
  padding-top: 4px px;
  text-align: center;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <footer>
      <ContainerFooter>
        <FooterBlock>
          <FooterInfo>
            <a href="#">
              <span>Impact</span>
            </a>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <Social>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </Social>
          </FooterInfo>
          <FooterLinks>
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </FooterLinks>
          <FooterLinks>
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </FooterLinks>
          <FooterContact>
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </FooterContact>
        </FooterBlock>
        <ContainerInf>
          <Copyright>
            {" "}
            &copy; Copyright{" "}
            <strong>
              <span>Impact</span>
            </strong>
            . All Rights Reserved
          </Copyright>
          <Credits>Designed by Desingner</Credits>
        </ContainerInf>
      </ContainerFooter>
    </footer>
  );
};

export default Footer;
