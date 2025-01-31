"use client";

import SwiperBrandCard from "@/cards/SwiperBrandCard";
import * as React from "react";
import { useState, useEffect } from "react";

//asset
import logoMazda from "@/../public/logos/brands/logoMazda.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Grid, Navigation, Pagination } from "swiper/modules";

const SwiperBrandCards = [
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
  {
    gambar: logoMazda,
  },
];

const SwiperBrand: React.FunctionComponent = () => {
  const [item, setItem] = useState(5);

  useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 800) {
          setItem(2);
        } else if (window.innerWidth <= 900) {
          setItem(3);        
        } else if (window.innerWidth <= 1000) {
          setItem(4);
        } else {
          setItem(5);
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
          spaceBetween={20}
          slidesPerView={item}
          loop={true}
          grid={{ rows: 2, fill: "row" }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          freeMode={true}
          navigation={true}
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            FreeMode,            
            Grid
          ]}
          className="mySwiper"
          speed={2000}
        >
          {SwiperBrandCards.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperBrandCard gambar={data.gambar} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperBrand;
