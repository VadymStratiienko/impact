import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../Assets";
import { BiCommand } from "react-icons/bi";
import { BsEasel, BsGem, BsGeoAlt } from "react-icons/bs";
import HeroImg from "../../Assets/img/hero-img.svg";
import ModalVideo from "../Modal/ModalVideo";

const Section = styled.section`
  width: 100%;
  position: relative;
  background: var(--color-primary);
  padding: 60px 0 0 0;
  @media (min-width: 1365px) {
    background-attachment: fixed;
  }
`;
const ContainerBanner = styled(Container)<{ isScrolled: boolean }>`
  position: relative !important;
  margin-top: ${({ isScrolled }) => (isScrolled ? "70px" : "")};
  > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const BlockInfo = styled.div`
  --bs-gutter-y: 3rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
`;
const BlockStart = styled.div`
  order: 2 !important;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 992px) {
    text-align: left !important;
    order: 1 !important;
    flex: 0 0 auto;
    width: 50%;
  }
  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
    line-height: 1.2;
  }
  p {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 0;
  }
`;
const BlockBtn = styled.div`
  display: flex !important;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start !important;
  }
`;
const BtnGetStarted = styled.a`
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 14px 40px;
  border-radius: 50px;
  transition: 0.3s;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px rgb(0 0 0 / 8%);
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const BlockImg = styled.div`
  order: 1 !important;
  @media (min-width: 992px) {
    order: 2 !important;
    flex: 0 0 auto;
    width: 50%;
  }
`;
const IconBoxes = styled.div`
  padding-bottom: 60px;
  position: relative !important;
  margin: 0 auto;
  @media (min-width: 1200px) {
    ::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: calc(50% + 20px);
      background-color: #fff;
    }
  }
`;
const ContainerIcons = styled(Container)`
  position: relative !important;
  display: block;
`;
const Boxes = styled.div`
  margin-top: 3rem !important;
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const Box = styled.div`
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 25% !important;
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
  }
`;
const IconBox = styled.div`
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  background: #008d7d;
  box-shadow: 0 0 29px 0 rgb(0 0 0 / 8%);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  height: 100%;
  width: 100%;
  text-align: center;
  h4 {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 24px;
    a {
      color: #fff;
      transition: 0.3s;
      ::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        content: "";
      }
    }
  }
`;
const Icon = styled.div`
  margin-bottom: 20px;
  padding-top: 10px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  font-size: 48px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.6);
`;
const BtnWatchVideo = styled.a`
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  i {
    color: rgba(255, 255, 255, 0.5);
    font-size: 32px;
    transition: 0.3s;
    line-height: 0;
    margin-right: 8px;
  }
  :hover i {
    color: #fff;
  }
`;

const BannerHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section id="hero">
      <ContainerBanner isScrolled={isScrolled}>
        <BlockInfo data-aos="fade-in">
          <BlockStart>
            <h2>
              Welcome to <span>Impact</span>
            </h2>
            <p>
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur
              eveniet. Eum quas beatae cumque eum quaerat.
            </p>
            <BlockBtn>
              <BtnGetStarted href="#about">Get Started</BtnGetStarted>
              <BtnWatchVideo onClick={() => setIsOpen(true)}>
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </BtnWatchVideo>
              {isOpen && <ModalVideo isOpen={isOpen} setIsOpen={setIsOpen} />}
            </BlockBtn>
          </BlockStart>
          <BlockImg>
            <img src={HeroImg} alt="" data-aos="zoom-out" data-aos-delay="100"/>
          </BlockImg>
        </BlockInfo>
      </ContainerBanner>
      <IconBoxes>
        <ContainerIcons>
          <Boxes>
            <Box data-aos="fade-up" data-aos-delay="100">
              <IconBox>
                <Icon>
                  <BsEasel />
                </Icon>
                <h4>
                  <a href="#">Lorem Ipsum</a>
                </h4>
              </IconBox>
            </Box>
            <Box data-aos="fade-up" data-aos-delay="200">
              <IconBox>
                <Icon>
                  <BsGem />
                </Icon>
                <h4>
                  <a href="#">Sed ut perspiciatis</a>
                </h4>
              </IconBox>
            </Box>
            <Box data-aos="fade-up" data-aos-delay="300">
              <IconBox>
                <Icon>
                  <BsGeoAlt />
                </Icon>
                <h4>
                  <a href="#">Magni Dolores</a>
                </h4>
              </IconBox>
            </Box>
            <Box data-aos="fade-up" data-aos-delay="500">
              <IconBox>
                <Icon>
                  <BiCommand />
                </Icon>
                <h4>
                  <a href="#">Nemo Enim</a>
                </h4>
              </IconBox>
            </Box>
          </Boxes>
        </ContainerIcons>
      </IconBoxes>
    </Section>
  );
};

export default BannerHome;
