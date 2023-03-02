import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/MainPage.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function MainPage() {
  const pagination = {
    clickable: true,
  };

  const images = [
    "img/메인페이지_해달운영진.png",
    "img/메인페이지_해달역사.png",
    "img/메인페이지_해달아이디어톤.png",
    "img/메인페이지_해달공지.png",
  ];

  return (
    <div className="mainpage">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
