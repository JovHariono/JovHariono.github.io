"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
  // EffectCards,
} from "swiper/modules";
import SwiperCard from "@/cards/SwiperCard";
import * as React from "react";
import { useState, useEffect } from "react";

//asset
import mobil1 from "../../public/mobil1.jpeg";
import mobil2 from "../../public/mobil2.jpeg";
import mobil3 from "../../public/mobil3.jpeg";
import bis1 from "../../public/bis1.jpeg";
import bis2 from "../../public/bis2.jpeg";
//asset

const SwiperCards = [
  {
    gambar: mobil1,
    link: "",
  },
  {
    gambar: mobil2,
    link: "",
  },
  {
    gambar: mobil3,
    link: "",
  },
  {
    gambar: bis1,
    link: "",
  },
  {
    gambar: bis2,
    link: "",
  },
];

const ComponentSwiper: React.FunctionComponent = () => {
  const [item, setItem] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setItem(1);
      } else if (window.innerWidth <= 1000) {
        setItem(2);
      } else {
        setItem(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="containerSwiper">
        <Swiper
          // spaceBetween={0}
          slidesPerView={item}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          freeMode={true}
          navigation={true}
          // effect={"cards"}
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            FreeMode,
            // EffectCards
          ]}
          className="mySwiper"
          speed={2000}
        >
          {SwiperCards.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperCard gambar={data.gambar} link={data.link} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ComponentSwiper;
