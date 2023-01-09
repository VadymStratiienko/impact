import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { clientsData } from '../../data/clients';
import { Container } from '../../Assets';

const Section = styled.section`
  padding: 40px 0;
  .swiper {
    width: 100%;
    height: 100%;
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
`;

const Clients = () => {
  return (
    <Section>
      <Container data-aos='zoom-out'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
          speed={400}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className='ClientSwiper'
        >
          {clientsData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item.img} alt='' />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Clients;
