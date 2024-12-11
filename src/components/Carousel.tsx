import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 relative group">
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom text-black text-7xl absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        &#8249;
      </div>
      <div className="swiper-button-next-custom text-black text-7xl absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        &#8250;
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // 200ms delay between slides
          disableOnInteraction: false, // Autoplay continues even if the user interacts
        }}
        loop={true}
        className="h-[400px]"
      >
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('/Carousel1.jpg')`,
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('/Carousel2.jpg')`,
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('/Carousel3.jpg')`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
