"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { Carousel } from "antd";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { CarouselRef } from "antd/es/carousel";

import seloEnergiaLimpa from "./../../public/images/Logos/SeloEnergiaLimpa.svg"

import banner01 from "./../../public/images/bannerCta/Banner01.png"
import banner02 from "./../../public/images/bannerCta/Banner02.png"
import banner03 from "./../../public/images/bannerCta/Banner03.png"
import banner04 from "./../../public/images/bannerCta/Banner04.png"

const BannerCTA = () => {
  let sliderRef = useRef<CarouselRef>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.next()
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.prev()
    }
  };

  return (
    <div className="">
        <Carousel
            className="w-full"
            ref={sliderRef}
            autoplay
            autoplaySpeed={3000}
            effect="fade"
            speed={500}
        >
          <div key={1}>
            <div className="absolute text-primary text-xl md:text-4xl md:p-6 font-semibold p-3">Desde 1969 entregando qualidade!</div>
            <Image
            className="w-32 bottom-0 h-auto absolute md:bottom-2 right-3 md:w-80"
            src={seloEnergiaLimpa}
            alt="Selo empresa energia limpa"
          />
            <Image className="w-full" src={banner01} alt="Foto area com painéis solares no telhado."></Image>
          </div>
          <div key={2}>
            <Image className="" src={banner02} alt="Foto area com painéis solares no telhado."></Image>
          </div>
          <div key={3}>
            <Image className="" src={banner03} alt="Foto area com painéis solares no telhado."></Image>
          </div>
          <div key={4}>
            <Image className="" src={banner04} alt="Foto area com painéis solares no telhado."></Image>
          </div>
          
        </Carousel>
    </div>
    
  );
};

export default BannerCTA;
