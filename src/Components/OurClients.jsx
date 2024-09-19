import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function OurClients() {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="w-[1280px] h-[90vh] flex items-center">
        {" "}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-[60%]" src="img/card-44.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[60%]"  src="img/card-44.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[60%]"  src="img/card-44.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[60%]"  src="img/card-44.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[60%]"  src="img/card-44.svg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[60%]"  src="img/card-44.svg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
