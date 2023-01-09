import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import FocusLock from 'react-focus-lock';
import { Container } from '../../Assets';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const XIcon = styled(IoMdClose)`
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  font-size: 34px;
  cursor: pointer;
  z-index: 9999;
`;
const ContainerModal = styled(Container)`
  justify-content: center;
  .swiper {
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 924px;
    min-width: 350px;
  }
  @media (max-width: 992px) {
    .swiper {
      max-width: 696px;
    }
  }
  @media (max-width: 768px) {
    .swiper {
      max-width: 516px;
    }
  }
  @media (max-width: 600px) {
    .swiper {
      max-width: 450px;
      min-width: 350px;
    }
  }
  @media (max-width: 500px) {
    .swiper {
      max-width: 350px;
    }
  }

  .swiper-slide {
    overflow: hidden;
    transform: none;
    display: flex;
    flex-direction: column;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .swiper-slide h4 {
    font-size: 18px;
    font-weight: 400;
    color: var(--color-default);
    background-color: #fff;
  }
  .swiper-button-next {
    position: fixed;
    color: #fff;
  }
  .swiper-button-prev {
    position: fixed;
    color: #fff;
  }
`;

interface IProduct {
  title: string;
  text: string;
  img: string;
  category: string;
}

interface IProps {
  filtered: IProduct[];
  setIsOpen: (open: boolean) => void;
  isOpen: boolean;
}

const ModalImg = ({
  filtered,

  setIsOpen,
  isOpen,
}: IProps) => {
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={() => toggleModal()}
        aria-modal={true}
        aria-labelledby='modal-label'
      >
        <FocusLock>
          <XIcon onClick={() => toggleModal()} />
          <ContainerModal>
            <Swiper navigation={true} modules={[Navigation]} className='ZoomSwiper'>
              {filtered.map((item, index) => {
                return <SwiperSlide key={index}>{<img src={item.img} alt='' />}</SwiperSlide>;
              })}
            </Swiper>
          </ContainerModal>
        </FocusLock>
      </StyledModal>
    </>
  );
};

export default ModalImg;
