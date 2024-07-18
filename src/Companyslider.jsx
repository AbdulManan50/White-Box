import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function CompanySlider() {
  return (
    <div className="flex justify-center items-center h-[20vh]">
          <Swiper
      slidesPerView={5}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[ Autoplay]}
      className="mySwiper "
    > 
    <SwiperSlide>
        <img className="w-[60%]" src="./public/img/asset 28.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[60%]" src="./public/img/asset 29.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[60%]" src="./public/img/asset 30.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[60%]" src="./public/img/asset 31.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[60%]" src="./public/img/asset 32.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[60%]" src="./public/img/asset 33.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-[60%]" src="./public/img/asset 34.png" alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
