import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SwiperCore, { Autoplay } from 'swiper';
import './SwiperCards.css'

function SwiperCards() {
  SwiperCore.use([Autoplay]);

  const images = [
    "./images/card1.png",
    "./images/card2.png",
    "./images/card3.png",
    "./images/card4.png",
    "./images/card5.png",
    "./images/card4.png",
    "./images/card5.png",
    "./images/card4.png",
    "./images/card5.png",
  ];
  return (
    <Swiper
      className='SwiperCards'
      spaceBetween={30}
      slidesPerView="auto"
      autoplay={{
        delay: 0,
        disableOnInteraction: false, // 클릭 후 자동재생 비활성화 방지
      }}
      loop={true} // 무한 슬라이드
      speed={2000} // 높을수록 느림
      freeMode={false}
      loopAdditionalSlides={9}
    >
      {images.map((img, index) => (
        <SwiperSlide className='SwiperCards'>
          <img src={img} alt="데굴 데굴 데굴 데굴" style={{background: "gray", height: '200px', width: '200px'}}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCards;