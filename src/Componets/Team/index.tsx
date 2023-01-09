import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import styled from 'styled-components';
import { Container, SectionHeader } from '../../Assets';
import Team_1 from '../../Assets/img/team/team-1.jpg';
import Team_2 from '../../Assets/img/team/team-2.jpg';
import Team_3 from '../../Assets/img/team/team-3.jpg';
import Team_4 from '../../Assets/img/team/team-4.jpg';

const ContainerTeam = styled(Container)`
  display: block;
`;
const WrapperTeam = styled.div`
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
const Member = styled.div`
  display: flex !important;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 25% !important;
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
  img {
    border-radius: 10px;
    vertical-align: middle;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }
  h4 {
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 2px;
    font-size: 20px;
  }
  span {
    font-style: italic;
    display: block;
    font-size: 14px;
    color: #6c757d;
  }
`;
const Block = styled.div`
  text-align: center;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  overflow: hidden;
  box-shadow: 0px 2px 25px rgb(0 0 0 / 10%);
`;
const Social = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    color: #a2a2a2;
    transition: 0.3s;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #bbbbbb;
  }
  a:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
`;
const Twitter = styled(BsTwitter)`
  font-size: 18px;
  margin: 0 2px;
`;
const Facebook = styled(BsFacebook)`
  font-size: 18px;
  margin: 0 2px;
`;
const Instagram = styled(BsInstagram)`
  font-size: 18px;
  margin: 0 2px;
`;
const Linkedin = styled(BsLinkedin)`
  font-size: 18px;
  margin: 0 2px;
`;

const Team = () => {
  return (
    <section id='team'>
      <ContainerTeam data-aos='fade-up'>
        <SectionHeader>
          <h2>Our Team</h2>
          <p>
            Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione
            ea sunt quis dolorem dolore earum
          </p>
        </SectionHeader>
        <WrapperTeam>
          <Member data-aos='fade-up' data-aos-delay='100'>
            <Block>
              <img src={Team_1} alt='' />
              <h4>Walter White</h4>
              <span>Web Development</span>
              <Social>
                <a href='#'>
                  <Twitter />
                </a>
                <a href='#'>
                  <Facebook />
                </a>
                <a href='#'>
                  <Instagram />
                </a>
                <a href='#'>
                  <Linkedin />
                </a>
              </Social>
            </Block>
          </Member>
          <Member data-aos='fade-up' data-aos-delay='200'>
            <Block>
              <img src={Team_2} alt='' />
              <h4>Sarah Jhinson</h4>
              <span>Marketing</span>
              <Social>
                <a href='#'>
                  <Twitter />
                </a>
                <a href='#'>
                  <Facebook />
                </a>
                <a href='#'>
                  <Instagram />
                </a>
                <a href='#'>
                  <Linkedin />
                </a>
              </Social>
            </Block>
          </Member>
          <Member data-aos='fade-up' data-aos-delay='300'>
            <Block>
              <img src={Team_3} alt='' />
              <h4>William Anderson</h4>
              <span>Content</span>
              <Social>
                <a href='#'>
                  <Twitter />
                </a>
                <a href='#'>
                  <Facebook />
                </a>
                <a href='#'>
                  <Instagram />
                </a>
                <a href='#'>
                  <Linkedin />
                </a>
              </Social>
            </Block>
          </Member>
          <Member data-aos='fade-up' data-aos-delay='400'>
            <Block>
              <img src={Team_4} alt='' />
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <Social>
                <a href='#'>
                  <Twitter />
                </a>
                <a href='#'>
                  <Facebook />
                </a>
                <a href='#'>
                  <Instagram />
                </a>
                <a href='#'>
                  <Linkedin />
                </a>
              </Social>
            </Block>
          </Member>
        </WrapperTeam>
      </ContainerTeam>
    </section>
  );
};

export default Team;
