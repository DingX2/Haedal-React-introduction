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
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWjisUb50Z9RhsLlTLXj57TftNyqU-scXDatL5UdvOy5s8I-GdlQep2RJf5Pc3VVkhItgkD5E3hOs&usqp=CAc",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS00kJxEbpPOZJ4AvkdhDnTbfUI-buCyl5qJ9e7iHkqRUdJy_2sLcBnbblU0LtCwFnnUXDlS2I13U&usqp=CAc",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZNEcSeY3HfKjDNu9shN1DWt3EVo1MgOX1GzwKP4v80jbJoikDKjuib9SfQLkye8alYzcskU-utLozwy4Nxq757_ZidlcNUpLpJ3nUuxc&usqp=CAc",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoZX7jdM0sr0kPpJZMC8m3EfdgQc_owiz8TOm8HR8mVEJA8JrF3WSTj8rBrFFv42x0jJ_DbjeAf36R6OUV-51Lmc3Ao_q60U2O3-zzdn3B&usqp=CAc",
  ];

  return (
    <>
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
    </>
  );
}
