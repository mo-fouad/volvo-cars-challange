import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "./CarCarouselStyles.scss";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

interface CarouselTypes {
  children?: ReactNode[];
}

export function CarCarousel({ children }: CarouselTypes) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      onSlideChange={() => {}}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {children?.map((child: ReactNode, index: number) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
