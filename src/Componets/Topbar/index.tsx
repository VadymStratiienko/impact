import {
  BsEnvelope,
  BsPhone,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import styled from "styled-components";
import { Container } from "../../Assets";

const ContainerTopBar = styled.section`
  background: #00796b;
  height: 40px;
  font-size: 14px;
  transition: all 0.5s;
  color: #fff;
  padding: 0;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  a {
    line-height: 0;
    transition: 0.3s;
    padding-left: 5px;
    color: #fff;
  }
`;
const Envelope = styled(BsEnvelope)`
  font-style: normal;
  color: #fff;
  line-height: 0;
`;
const Phone = styled(BsPhone)`
  font-style: normal;
  color: #fff;
  line-height: 0;
  margin-left: 1.5rem !important;
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    color: rgba(255, 255, 255, 0.7);
    line-height: 0;
    transition: 0.3s;
    margin-left: 20px;
    :hover {
      color: #fff;
    }
  }
`;

const Topbar = () => {
  return (
    <ContainerTopBar>
      <Container>
        <ContactInfo>
          <Envelope />
          <a href="mailto:contact@example.com">contact@example.com</a>

          <Phone />
          <span>+1 5589 55488 55</span>
        </ContactInfo>
        <Socials>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <BsLinkedin />
          </a>
        </Socials>
      </Container>
    </ContainerTopBar>
  );
};

export default Topbar;
