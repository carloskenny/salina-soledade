import React from 'react';
import Image from 'next/image';

import { Carousel } from 'antd';

import { ChevronLeft, ChevronRight } from "lucide-react"

import captacao01 from "../../public/images/production/01Captacao.png"
import evaporacao02 from "../../public/images/production/02Evaporacao.png"
import colheita03 from "../../public/images/production/03Colheita.png"
import estocagem05 from "../../public/images/production/05Estocagem.png"
import beneficiamento06 from "../../public/images/production/06Beneficiamento.png"
import analise07 from "../../public/images/production/07Analise.png"

const previusIconAction = 
    <div className="flex flex-1 justify-center items-center rounded-2xl bg-slate-400 p-4 size-16">
        <ChevronLeft className='size-6 text-primary'/>
    </div>

const nextIconAction = 
    <div className="flex flex-1 justify-center items-center rounded-2xl bg-slate-400 p-4 size-16">
        <ChevronRight className='size-6 text-primary'/>
    </div>

const lavagem04 = "./movies/04Lavagem.mp4"

const CarouselProduction = () => {
    
   
    return (
    <div className="">
        <div className="py-8 flex flex-1 justify-center" >
            <div className="text-4xl w-max font-semibold text-primary p-4">Processo Produtivo</div>
        </div>
        
        <div className="relative">
            
            <Carousel className="px-12" dots prevArrow={previusIconAction} nextArrow={nextIconAction} effect="fade" >
                <div className=' flex flex-col justify-center items-center object-contain'>
                    <Image 
                        className="object-cover h-[40rem] rounded-2xl w-[100%]"
                        src={captacao01} 
                        alt="Bomba captando água para produção de sal." 
                    />
                    <div className="relative h-28 -mt-28 bg-secundary rounded-b-2xl px-4 py-2 text-slate-100">
                        <p className="text-xl font-semibold">Captação</p>
                        <p className='text-lg'>A água do mar é captada e transferida para salina através de bombas flutuantes.</p>
                    </div>
                </div>
                <div>
                    <Image 
                        className="object-cover h-[40rem] rounded-2xl w-[100%]"
                        src={evaporacao02} 
                        alt="Bomba captando água para produção de sal." 
                    />
                     <div className="relative h-28 -mt-28 bg-secundary rounded-b-2xl px-4 py-2 text-slate-100">
                        <p className="text-xl font-semibold">Evaporação</p>
                        <p className='text-lg'>A água que foi captada circula por uma área com vários tanques interligados, 
                            denominados evaporadores. Nesta etapa do processo parte da água é evaporada, aumentado assim a 
                            concentração de sal por litro de água.</p>
                    </div>
                </div>
                <div>
                    <Image 
                        className="object-cover h-[40rem] rounded-2xl w-[100%]"
                        src={colheita03} 
                        alt="Bomba captando água para produção de sal." 
                    />
                     <div className="relative h-28 -mt-28 bg-secundary rounded-b-2xl px-4 py-2 text-slate-100">
                        <p className="text-xl font-semibold">Colheita</p>
                        <p className='text-lg'>Extração dos cristais de sal dos cristalizadores e transporte para lavagem.</p>
                    </div>
                </div>
                <div>
                    <video autoPlay loop className="object-cover h-[40rem] w-[100%] rounded-2xl object-center">
                        <source src={lavagem04} />
                    </video>
                    
                    <div className="relative h-28 -mt-28 bg-secundary rounded-b-2xl px-4 py-2 text-slate-100">
                        <p className="text-xl font-semibold">Lavagem</p>
                        <p className='text-lg'>Os cristais de sal são lavados com água salmoura para retiradas de impurezas.</p>
                    </div>
                </div>
                <div>
                    <Image 
                        className="object-cover h-[40rem] rounded-2xl w-[100%]"
                        src={estocagem05} 
                        alt="Bomba captando água para produção de sal." 
                    />
                     <div className="relative h-28 -mt-28 bg-secundary rounded-b-2xl px-4 py-2 text-slate-100">
                        <p className="text-xl font-semibold">Estocagem</p>
                        <p className='text-lg'>O sal lavado é transportado por esteiras para ser estocado em formato piramidal,
                         o que irá facilitar o escoamento da água remanescente da lavagem. O sal lavado deverá ficar estocado 
                         por no mínimo sessenta dias antes de ser beneficiado. É o chamado período de cura do sal.</p>
                    </div>
                </div>
                <div>
                    <Image 
                        className="object-cover h-[40rem] rounded-2xl w-[100%]"
                        src={beneficiamento06} 
                        alt="Bomba captando água para produção de sal." 
                    />
                     <div className="relative h-28 -mt-28 bg-secundary rounded-b-2xl px-4 py-2 text-slate-100">
                        <p className="text-xl font-semibold">Beneficiamento</p>
                        <p className='text-lg'>Após o período de cura, o sal é transportado para o setor de beneficiamento 
                        para ser preparado de acordo com a sua aplicação final, legislação e requisitos dos clientes.</p>
                    </div>
                </div>
                <div>
                    <Image 
                        className="object-cover h-[40rem] rounded-2xl w-[100%]"
                        src={analise07} 
                        alt="Bomba captando água para produção de sal." 
                    />
                     <div className="relative h-28 -mt-28 bg-secundary rounded-b-2xl px-4 py-2 text-slate-100">
                        <p className="text-xl font-semibold">Análise</p>
                        <p className='text-lg'>A partir da etapa de lavagem o sal é analisado em laboratório próprio para 
                        acompanhamento e garantia da qualidade dos cristais de sal produzidos em cada safra.</p>
                    </div>
                </div>
            </Carousel>
            <div className="absolute left-16 bottom-1/2 flex flex-1  p-4 size-16 justify-center items-center rounded-2xl bg-slate-200/20 hover:bg-slate-200/50 hover:cursor-pointer">
                <ChevronLeft className='size-6 text-primary'/>
            </div>
            <div className="absolute right-16 bottom-1/2 flex flex-1  p-4 size-16 justify-center items-center rounded-2xl bg-slate-200/20 hover:bg-slate-200/50 hover:cursor-pointer">
                <ChevronRight className='size-6 text-primary'/>
            </div>
        </div>
        
    </div>
   )
}

export default CarouselProduction
