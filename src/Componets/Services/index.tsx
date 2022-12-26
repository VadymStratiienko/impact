import { BiBroadcast } from "react-icons/bi";
import {
  BsArrowRight,
  BsBoundingBoxCircles,
  BsBroadcast,
  BsCalendar4Week,
  BsChatSquareText,
  BsEasel,
} from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import styled from "styled-components";
import { Container, SectionHeader } from "../../Assets";

const Section = styled.section`
  background-color: #f6f6f6;
`;
const ContainerServices = styled(Container)`
  display: block;
`;
const Table = styled.div`
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
    width: 33.33333333%;
  }
  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;
const ServiceItem = styled.div`
  padding: 40px;
  background: #fff;
  height: 100%;
  border-radius: 10px;
  position: relative !important;
  :hover div::before {
    background: #00b6a1;
  }
  h3 {
    color: var(--color-default);
    font-weight: 700;
    margin: 0 0 20px 0;
    padding-bottom: 8px;
    font-size: 22px;
    position: relative;
    display: inline-block;
    border-bottom: 4px solid #eeeeee;
    transition: 0.3s;
  }
  :hover h3 {
    border-color: var(--color-primary);
  }
  p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }
  a {
    margin-top: 15px;
    display: flex;
    align-items: center;
    color: var(--color-primary);
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
`;
const BlockIcon = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 50px;
  ::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: #eeeeee;
    border-radius: 50px;
    z-index: 1;
    top: 0;
    right: -20px;
    transition: 0.3s;
  }
`;
const Activity = styled(FiActivity)`
  color: var(--color-default);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
`;
const Broadcast = styled(BsBroadcast)`
  color: var(--color-default);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
`;
const Easel = styled(BsEasel)`
  color: var(--color-default);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
`;
const BoundingBoxCircles = styled(BsBoundingBoxCircles)`
  color: var(--color-default);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
`;
const Calendar4Week = styled(BsCalendar4Week)`
  color: var(--color-default);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
`;
const ChatSquareText = styled(BsChatSquareText)`
  color: var(--color-default);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
`;

const Services = () => {
  return (
    <Section>
      <ContainerServices>
        <SectionHeader>
          <h2>Our Services</h2>
          <p>
            Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
            incidunt dolores placeat sunt id nobis omnis tiledo stran delop
          </p>
        </SectionHeader>
        <Table>
          <Block>
            <ServiceItem>
              <BlockIcon>
                <Activity />
              </BlockIcon>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a href="#">
                Read more &nbsp;
                <BsArrowRight />
              </a>
            </ServiceItem>
          </Block>
          <Block>
            <ServiceItem>
              <BlockIcon>
                <Broadcast />
              </BlockIcon>
              <h3>Eosle Commodi</h3>
              <p>
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
              </p>
              <a href="#">
                Read more &nbsp;
                <BsArrowRight />
              </a>
            </ServiceItem>
          </Block>
          <Block>
            <ServiceItem>
              <BlockIcon>
                <Easel />
              </BlockIcon>
              <h3>Ledo Markt</h3>
              <p>
                Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                ea aut. Vel qui id voluptas adipisci eos earum corrupti.
              </p>
              <a href="#">
                Read more &nbsp;
                <BsArrowRight />
              </a>
            </ServiceItem>
          </Block>
          <Block>
            <ServiceItem>
              <BlockIcon>
                <BoundingBoxCircles />
              </BlockIcon>
              <h3>Asperiores Commodit</h3>
              <p>
                Non et temporibus minus omnis sed dolor esse consequatur.
                Cupiditate sed error ea fuga sit provident adipisci neque.
              </p>
              <a href="#">
                Read more &nbsp;
                <BsArrowRight />
              </a>
            </ServiceItem>
          </Block>
          <Block>
            <ServiceItem>
              <BlockIcon>
                <Calendar4Week />
              </BlockIcon>
              <h3>Velit Doloremque</h3>
              <p>
                Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
                ipsam corporis aut. Sed animi at autem alias eius labore.
              </p>
              <a href="#">
                Read more &nbsp;
                <BsArrowRight />
              </a>
            </ServiceItem>
          </Block>
          <Block>
            <ServiceItem>
              <BlockIcon>
                <ChatSquareText />
              </BlockIcon>
              <h3>Dolori Architecto</h3>
              <p>
                Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque
                non et debitis iure. Corrupti recusandae ducimus enim.
              </p>
              <a href="#">
                Read more &nbsp;
                <BsArrowRight />
              </a>
            </ServiceItem>
          </Block>
        </Table>
      </ContainerServices>
    </Section>
  );
};

export default Services;
