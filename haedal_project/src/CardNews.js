import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "./CardNews.css";

const images = [
  "./img/card1.png",
  "./img/card2.png",
  "./img/card3.png",
  "./img/card4.png",
  "./img/card5.png",
  "./img/card1.png",
  "./img/card2.png",
  "./img/card3.png",
  "./img/card4.png",
  "./img/card5.png",
];

function CardNews() {
  const [speed, setSpeed] = useState(3000);
  const swiperRef = useRef(null);
  SwiperCore.use([Autoplay]);

  return (
    <div className="cardnews_body">
      <div className="cardnews_title">
        <div className="cardnews_title_big">
          <span className="cardnews_title_quote_open">“</span>
          <span>오 누가 이걸 몰라?!</span>
          <span className="cardnews_title_quote_close">”</span>
        </div>
        <div className="cardnews_title_small">
          <span>해달 오누이 IT 카드뉴스</span>
        </div>
      </div>
      <div
        onMouseEnter={() => {
          swiperRef.current.swiper.autoplay.stop();
          console.log(swiperRef.current.swiper.autoplay.running);
        }}
        onMouseLeave={() => {
          swiperRef.current.swiper.autoplay.start();
          console.log(swiperRef.current.swiper.autoplay.running);
          setTimeout(() => {
            swiperRef.current.swiper.autoplay.start();
          },3000)
        }}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView="auto"
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // 클릭 후 자동재생 비활성화 방지
          }}
          loop={true} // 무한 슬라이드
          speed={speed} // 카드 하나당 시간
        >
          {images.map((img, index) => (
            <SwiperSlide className="SwiperCards">
              <img
                src={img}
                alt={`img${index}`}
                style={{height: "200px", width: "200px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CardNews;
