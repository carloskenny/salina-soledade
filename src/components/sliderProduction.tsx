"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { Carousel } from "antd";

import { ChevronLeft, ChevronRight } from "lucide-react";

import captacao01 from "../../public/images/production/01Captacao.png";
import evaporacao02 from "../../public/images/production/02Evaporacao.png";
import colheita03 from "../../public/images/production/03Colheita.png";
import estocagem05 from "../../public/images/production/05Estocagem.png";
import beneficiamento06 from "../../public/images/production/06Beneficiamento.png";
import analise07 from "../../public/images/production/07Analise.png";
import { CarouselRef } from "antd/es/carousel";

const lavagem04 = "./movies/04Lavagem.mp4";

const CarouselProduction = () => {
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
    <div className="px-2 md:py-8">
      <div className="md:py-8 flex flex-1 justify-center">
        <div className="text-2xl md:text-4xl md:w-max font-semibold text-primary p-4">
          Processo Produtivo
        </div>
      </div>
      <div className="relative">
        <Carousel
          ref={sliderRef}
          dots
          dotPosition="top"
          effect="fade"
          speed={500}
        >
          <div key={1}>
            <Image
              className="object-cover h-max md:h-[40rem] w-[100%] rounded-t-xl md:rounded-t-2xl"
              src={captacao01}
              alt="Bomba captando água para produção de sal."
            />
            <div className="relative bg-secundary px-4 py-2 text-slate-100 rounded-b-xl md:rounded-b-2xl md:h-28 md:-mt-20">
              <p className="text-lg md:text-xl font-semibold">Captação</p>
              <p className="text-base md:text-lg">
                A água do mar é captada e transferida para salina através de
                bombas flutuantes.
              </p>
            </div>
          </div>
          <div key={2}>
            <Image
              className="object-cover h-max md:h-[40rem] rounded-t-2xl w-[100%]"
              src={evaporacao02}
              alt="Bomba captando água para produção de sal."
            />
            <div className="relative bg-secundary px-4 py-2 text-slate-100 rounded-b-xl md:rounded-b-2xl md:h-28 md:-mt-20">
              <p className="text-lg md:text-xl font-semibold">Evaporação</p>
              <p className="text-base md:text-lg">
                A água que foi captada circula por uma área com vários tanques
                interligados, denominados evaporadores. Nesta etapa do processo
                parte da água é evaporada, aumentado assim a concentração de sal
                por litro de água.
              </p>
            </div>
          </div>
          <div key={3}>
            <Image
              className="object-cover h-max md:h-[40rem] rounded-t-2xl w-[100%]"
              src={colheita03}
              alt="Bomba captando água para produção de sal."
            />
            <div className="relative bg-secundary px-4 py-2 text-slate-100 rounded-b-xl md:rounded-b-2xl md:h-28 md:-mt-20">
              <p className="text-lg md:text-xl font-semibold">Colheita</p>
              <p className="text-base md:text-lg">
                Extração dos cristais de sal dos cristalizadores e transporte
                para lavagem.
              </p>
            </div>
          </div>
          <div key={4}>
            <video
              autoPlay
              muted
              loop
              className="object-cover h-max md:h-[40rem] w-[100%] rounded-t-2xl object-center"
            >
              <source src={lavagem04} />
            </video>

            <div className="relative bg-secundary px-4 py-2 text-slate-100 rounded-b-xl md:rounded-b-2xl md:h-28 md:-mt-20">
              <p className="text-lg md:text-xl font-semibold">Lavagem</p>
              <p className="text-base md:text-lg">
                Os cristais de sal são lavados com água salmoura para retiradas
                de impurezas.
              </p>
            </div>
          </div>
          <div key={5}>
            <Image
              className="object-cover h-max md:h-[40rem] rounded-t-2xl w-[100%]"
              src={estocagem05}
              alt="Bomba captando água para produção de sal."
            />
            <div className="relative bg-secundary px-4 py-2 text-slate-100 rounded-b-xl md:rounded-b-2xl md:h-28 md:-mt-20">
              <p className="text-lg md:text-xl font-semibold">Estocagem</p>
              <p className="text-base md:text-lg">
                O sal lavado é transportado por esteiras para ser estocado em
                formato piramidal, o que irá facilitar o escoamento da água
                remanescente da lavagem. O sal lavado deverá ficar estocado por
                no mínimo sessenta dias antes de ser beneficiado. É o chamado
                período de cura do sal.
              </p>
            </div>
          </div>
          <div key={6}>
            <Image
              className="object-cover h-max md:h-[40rem] rounded-t-2xl w-[100%]"
              src={beneficiamento06}
              alt="Bomba captando água para produção de sal."
            />
            <div className="relative bg-secundary px-4 py-2 text-slate-100 rounded-b-xl md:rounded-b-2xl md:h-28 md:-mt-20">
              <p className="text-lg md:text-xl font-semibold">Expedição</p>
              <p className="text-base md:text-lg">
                Após o período de cura, o sal é transportado para o setor de
                beneficiamento para ser preparado de acordo com a sua aplicação
                final, legislação e requisitos dos clientes.
              </p>
            </div>
          </div>
          <div key={7}>
            <Image
              className="object-cover h-max md:h-[40rem] rounded-t-2xl w-[100%]"
              src={analise07}
              alt="Bomba captando água para produção de sal."
            />
            <div className="relative bg-secundary px-4 py-2 text-slate-100 rounded-b-xl md:rounded-b-2xl md:h-28 md:-mt-20">
              <p className="text-lg md:text-xl font-semibold">Controle de Qualidade</p>
              <p className="text-base md:text-lg">
                A partir da etapa de lavagem o sal é analisado em laboratório
                próprio para acompanhamento e garantia da qualidade dos cristais
                de sal produzidos em cada safra.
              </p>
            </div>
          </div>
        </Carousel>
        <div
          className="absolute left-16 bottom-1/2 flex flex-1 p-4 size-16 justify-center items-center rounded-2xl bg-slate-200/20 hover:bg-slate-200/50 hover:cursor-pointer invisible md:visible"
          onClick={previous}
        >
          <ChevronLeft className="size-6 text-primary" />
        </div>
        <div
          className="absolute right-16 bottom-1/2 flex flex-1 p-4 size-16 justify-center items-center rounded-2xl bg-slate-200/20 hover:bg-slate-200/50 hover:cursor-pointer invisible md:visible"
          onClick={next}
        >
          <ChevronRight className="size-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default CarouselProduction;
