import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "./css/CardNews.css";

const images = [
  "./img/card1.png",
  "./img/card2.png",
  "./img/card3.png",
  "./img/card4.png",
  "./img/card5.png",
  "./img/card6.png",
  "./img/card7.png",
  "./img/card8.png",
  "./img/card1.png",
  "./img/card2.png",
  "./img/card3.png",
  "./img/card4.png",
  "./img/card5.png",
  "./img/card6.png",
  "./img/card7.png",
  "./img/card8.png",
];

function CardNews() {
  const [mouseEnter, setMouseEnter] = useState(false);
  const swiperRef = useRef(null);
  const speed = 3000;
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
      <div // onMouseEnter, onMouseLeave 넣기 위한 div>
        onMouseEnter={() => {
          setMouseEnter(true);
          swiperRef.current.swiper.autoplay.stop();
        }}
        onMouseLeave={() => {
          setMouseEnter(false);
          swiperRef.current.swiper.autoplay.start();
          setTimeout(() => {
            if (mouseEnter === false) {
              swiperRef.current.swiper.autoplay.start();
            }
          }, speed); // 일정 시간 뒤 마우스가 swiper 위에 없으면 autoplay 재시작
        }}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={25}
          slidesPerView="auto"
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // 클릭 후 자동재생 비활성화 방지
          }}
          loop={true} // 무한 슬라이드
          speed={speed} // 카드 하나당 시간
          loopedSlides={3}
          centeredSlides // 가운데 시작
          grabCursor // 잡기 가능
          pauseOnMouseEnter={true}
        >
          {images.map((img, index) => (
            <SwiperSlide>
              <img className="cards" src={img} alt={`card${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CardNews;
