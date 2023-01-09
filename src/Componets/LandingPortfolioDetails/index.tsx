import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { Container } from '../../Assets';
import AppImg from '../../Assets/img/portfolio/app-1.jpg';
import BookImg from '../../Assets/img/portfolio/books-1.jpg';
import ProductImg from '../../Assets/img/portfolio/product-1.jpg';
import BrandingImg from '../../Assets/img/portfolio/branding-1.jpg';
import Testimonials from '../../Assets/img/testimonials/testimonials-2.jpg';

const ContainerPortfolioDetails = styled(Container)`
  display: block;
`;
const WrapperSwiper = styled.div`
  position: relative !important;
  height: 100% !important;

  .swiper-pointer-events {
    touch-action: pan-y;
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 24px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: 'prev';
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-family: swiper-icons;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 48px;
    height: 48px;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }
  .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 1;
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-bullet {
    display: inline-block;
    border-radius: 50%;
    background: var(--swiper-pagination-bullet-inactive-color, #000);
  }
  .swiper-pagination-bullet-active {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }
  .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--color-primary);
  }
`;
const BlockContent = styled.div`
  margin-top: 1.5rem !important;
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between !important;
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
const PortfolioDescription = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
`;
const Description = styled.div`
  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    padding: 0;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const TestimoialItem = styled.div`
  padding: 30px 30px 0 30px;
  position: relative;
  background: white;
  height: 100%;
  margin-bottom: 50px;
  p {
    font-style: italic;
    padding: 0;
  }
  .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
    color: #009d8b;
    font-size: 26px;
    line-height: 0;
  }
  .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
    transform: scale(-1, -1);
    color: #009d8b;
    font-size: 26px;
    line-height: 0;
  }
  img {
    width: 90px;
    border-radius: 50px;
    border: 6px solid #fff;
    float: left;
    margin: 0 10px 0 0;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0 5px 0;
    padding-top: 20px;
  }
  h4 {
    font-size: 14px;
    color: #6c757d;
    margin: 0;
  }
`;
const Info = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 25%;
  }
`;
const PortfolioInfo = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
  }
  h3::after {
    content: '';
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: var(--color-primary);
    left: 0;
    bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
  }
  ul li {
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    font-size: 16px;
  }
  ul strong {
    text-transform: uppercase;
    font-weight: 400;
    color: #9c9c9c;
    font-size: 12px;
  }
`;
const BtnVisit = styled.a`
  padding: 8px 40px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 50px;
  transition: 0.3s;
  align-self: flex-start !important;
  :hover {
    background: #009d8b;
    color: #fff;
  }
`;

const LandingPortfolioDetails = () => {
  return (
    <section>
      <ContainerPortfolioDetails>
        <WrapperSwiper>
          <Swiper
            speed={600}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView='auto'
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={AppImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BrandingImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ProductImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BookImg} alt='' />
            </SwiperSlide>
          </Swiper>
        </WrapperSwiper>
        <BlockContent>
          <PortfolioDescription>
            <Description>
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi
                labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia
                eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
              <p>
                Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque
                natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis
                eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
              </p>
              <TestimoialItem>
                <p>
                  <i className='bi bi-quote quote-icon-left'></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum
                  quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat
                  irure amet legam anim culpa.
                  <i className='bi bi-quote quote-icon-right'></i>
                </p>
                <div>
                  <img src={Testimonials} alt='' />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </TestimoialItem>
              <p>
                Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati
                earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae
                incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus
                est.
              </p>
              <p>
                Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et
                autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam
                eaque praesentium rem et qui nesciunt.
              </p>
            </Description>
          </PortfolioDescription>
          <Info>
            <PortfolioInfo>
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>CATEGORY</strong>
                  <span>Web design</span>
                </li>
                <li>
                  <strong>CLIENT</strong>
                  <span>ASU Company</span>
                </li>
                <li>
                  <strong>PROJECT DATE</strong>
                  <span>01 March, 2020</span>
                </li>
                <li>
                  <strong>PROJECT URL</strong>
                  <a href='#'>www.example.com</a>
                </li>
                <li>
                  <BtnVisit href='#'>Visit Website</BtnVisit>
                </li>
              </ul>
            </PortfolioInfo>
          </Info>
        </BlockContent>
      </ContainerPortfolioDetails>
    </section>
  );
};

export default LandingPortfolioDetails;
