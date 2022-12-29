import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Container, SectionHeader } from "../../Assets";
import { Pagination, Navigation, Autoplay } from "swiper";
import { BsStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Testimonials_1 from "../../Assets/img/testimonials/testimonials-1.jpg";
import Testimonials_2 from "../../Assets/img/testimonials/testimonials-2.jpg";
import Testimonials_3 from "../../Assets/img/testimonials/testimonials-3.jpg";
import Testimonials_4 from "../../Assets/img/testimonials/testimonials-4.jpg";
import Testimonials_5 from "../../Assets/img/testimonials/testimonials-5.jpg";

const ContainerTestimonials = styled(Container)`
  display: block;

  .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--color-primary);
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
`;
const TestimonialWrap = styled.div`
  padding-left: 10px;
`;
const TestimonialItem = styled.div`
  box-sizing: content-box;
  padding: 30px;
  margin: 30px 10px;
  box-shadow: 0px 0 15px rgb(0 0 0 / 10%);
  position: relative;
  background: #fff;
  border-radius: 10px;
  p {
    font-style: italic;
    margin: 15px auto 15px auto;
  }
`;
const BlockPerson = styled.div`
  display: flex !important;
  align-items: center !important;

  img {
    width: 90px;
    border-radius: 50px;
    margin-right: 15px;
    flex-shrink: 0 !important;
    vertical-align: middle;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #000;
  }
  h4 {
    font-size: 14px;
    color: #999;
    margin: 0;
  }
`;
const Stars = styled.span`
  margin: 10px 0;
`;

const StarFill = styled(BsStarFill)`
  color: #ffc107;
  margin: 0 1px;
`;
const QuoteLeft = styled(FaQuoteLeft)`
  display: inline-block;
  left: -5px;
  position: relative;
  color: #009d8b;
  font-size: 26px;
  line-height: 0;
`;
const QuoteRight = styled(FaQuoteRight)`
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
  transform: scale(-1, -1);
  color: #009d8b;
  font-size: 26px;
  line-height: 0;
`;

const Testimonials = () => {
  let Star = <StarFill />;
  const StarsR = new Array(5).fill(Star);

  return (
    <section>
      <ContainerTestimonials>
        <SectionHeader>
          <h2>Testimonials</h2>
          <p>
            Voluptatem quibusdam ut ullam perferendis repellat non ut
            consequuntur est eveniet deleniti fignissimos eos quam
          </p>
        </SectionHeader>
        <Swiper
          speed={600}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialWrap>
              <TestimonialItem>
                <BlockPerson>
                  <img src={Testimonials_1} alt="" />
                  <div>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo & Founder</h4>
                    {StarsR.map((item, index) => {
                      return <Stars key={index}>{item}</Stars>;
                    })}
                  </div>
                </BlockPerson>
                <p>
                  <QuoteLeft /> Proin iaculis purus consequat sem cure digni
                  ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                  risus at semper. <QuoteRight />
                </p>
              </TestimonialItem>
            </TestimonialWrap>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialWrap>
              <TestimonialItem>
                <BlockPerson>
                  <img src={Testimonials_2} alt="" />
                  <div>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    {StarsR.map((item, index) => {
                      return <Stars key={index}>{item}</Stars>;
                    })}
                  </div>
                </BlockPerson>
                <p>
                  <QuoteLeft /> Export tempor illum tamen malis malis eram quae
                  irure esse labore quem cillum quid cillum eram malis quorum
                  velit fore eram velit sunt aliqua noster fugiat irure amet
                  legam anim culpa.
                  <QuoteRight />
                </p>
              </TestimonialItem>
            </TestimonialWrap>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TestimonialWrap>
              <TestimonialItem>
                <BlockPerson>
                  <img src={Testimonials_3} alt="" />
                  <div>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    {StarsR.map((item, index) => {
                      return <Stars key={index}>{item}</Stars>;
                    })}
                  </div>
                </BlockPerson>
                <p>
                  <QuoteLeft /> Enim nisi quem export duis labore cillum quae
                  magna enim sint quorum nulla quem veniam duis minim tempor
                  labore quem eram duis noster aute amet eram fore quis sint
                  minim.
                  <QuoteRight />
                </p>
              </TestimonialItem>
            </TestimonialWrap>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TestimonialWrap>
              <TestimonialItem>
                <BlockPerson>
                  <img src={Testimonials_4} alt="" />
                  <div>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    {StarsR.map((item, index) => {
                      return <Stars key={index}>{item}</Stars>;
                    })}
                  </div>
                </BlockPerson>
                <p>
                  <QuoteLeft /> Fugiat enim eram quae cillum dolore dolor amet
                  nulla culpa multos export minim fugiat minim velit minim dolor
                  enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                  <QuoteRight />
                </p>
              </TestimonialItem>
            </TestimonialWrap>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TestimonialWrap>
              <TestimonialItem>
                <BlockPerson>
                  <img src={Testimonials_5} alt="" />
                  <div>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    {StarsR.map((item, index) => {
                      return <Stars key={index}>{item}</Stars>;
                    })}
                  </div>
                </BlockPerson>
                <p>
                  <QuoteLeft />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore.
                  <QuoteRight />
                </p>
              </TestimonialItem>
            </TestimonialWrap>
          </SwiperSlide>
        </Swiper>
      </ContainerTestimonials>
    </section>
  );
};

export default Testimonials;
