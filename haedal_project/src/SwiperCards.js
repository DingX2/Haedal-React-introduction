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
    <div className='cardnews_body'>
      <div className='cardnews_title'>
        <div className='cardnews_title_big'>
          <span className='cardnews_title_quote_open'>“</span>
          <span>오 누가 이걸 몰라?!</span>
          <span className='cardnews_title_quote_close'>”</span>
        </div>
        <div className='cardnews_title_small'>
          <span>해달 오누이 IT 카드뉴스</span>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{
          delay: 0,
          disableOnInteraction: false, // 클릭 후 자동재생 비활성화 방지
        }}
        loop={true} // 무한 슬라이드
        speed={3000} // 카드 하나당 시간
      >
        {images.map((img, index) => (
          <SwiperSlide className='SwiperCards'>
            <img src={img} alt={`img${index}`} style={{background: "gray", height: '200px', width: '200px'}}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCards;