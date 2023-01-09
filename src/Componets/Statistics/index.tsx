import styled from 'styled-components';
import { Container } from '../../Assets';
import StatsImg from '../../Assets/img/stats-img.svg';
import CountUp from 'react-countup';

const StatsCounter = styled.section`
  padding: 40px 0;
`;
const ContainerStats = styled(Container)`
  display: block;
`;
const Contents = styled.div`
  display: flex;
  align-items: center !important;
  flex-wrap: wrap;
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
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
    width: 50%;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;
const ItemStats = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  align-items: center !important;
  span {
    min-width: 90px;
    padding-right: 15px;
    font-size: 40px;
    display: block;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 40px;
  }
  p {
    margin: 0;
    font-family: var(--font-primary);
    font-size: 14px;
  }
`;

const Stats = () => {
  return (
    <StatsCounter>
      <ContainerStats data-aos='fade-up'>
        <Contents>
          <Block>
            <img src={StatsImg} alt='' />
          </Block>
          <Block>
            <ItemStats data-aos='fade-up'>
              <span>
                <CountUp start={100} end={232} duration={5} />
              </span>
              <p>
                <strong>Happy Clients</strong> consequuntur quae diredo para mesta
              </p>
            </ItemStats>
            <ItemStats>
              <span>
                <CountUp start={100} end={521} duration={5} />
              </span>
              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </ItemStats>
            <ItemStats>
              <span>
                <CountUp start={100} end={453} duration={5} />
              </span>
              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </ItemStats>
          </Block>
        </Contents>
      </ContainerStats>
    </StatsCounter>
  );
};

export default Stats;
