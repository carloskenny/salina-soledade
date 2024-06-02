import { Botton } from "@/components/botton";
import { Header } from "@/components/header";

import Image from "next/image";

import indSalGrosso from "../../../public/images/products/SacoSALGROSSOSOLEDADE25kg.png"
import indSalMoido from "../../../public/images/products/SacoSALMOIDOSOLEDADE25kg.png"
import indSalRefinado from "../../../public/images/products/SacoSALREFINADOSOLEDADE25kg.png"
import indBigBag from "../../../public/images/products/SALSOLEDADEBIGBAGLINHAINDUSTRIA.png"
import animMoido from "../../../public/images/products/SALBEEF25KGLINHAANIMAL.png"


export default function Produtos() {
  return (
    <div className="lg:w-10/12  bg-gray-100">
      <Header/>
      <div className="flex flex-col px-8 pb-8 md:py-8 md:gap-8 items-center bg-slate-300/60">
        <div className="text-2xl p-4 lg:text-3xl text-primary font-semibold">Linha Indústria</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col md:w-[25rem] items-center py-8 px-8 gap-2 text-primary bg-slate-100 rounded-lg">
            <Image className="object-contain h-56" src={indSalGrosso} alt="Foto do saco de Sal Grosso de 25kg"></Image>
            <div className="border-2 border-collapse border-slate-400/60 w-9/12"></div>
            <div className="text-xl font-semibold">SAL SOLEDAD GROSSO</div>
            <div className="text-sm">25kg | 50kg</div>
          </div>
          <div className="flex flex-col md:w-[25rem] items-center py-8 px-8 gap-2 text-primary bg-slate-100 rounded-lg">
            <Image className="object-contain h-56" src={indSalMoido} alt="Foto do saco de Sal Grosso de 25kg"></Image>
            <div className="border-2 border-collapse border-slate-400/60 w-9/12"></div>
            <div className="text-xl font-semibold">SAL SOLEDAD MOÍDO</div>
            <div className="text-sm">25kg</div>
            <div>Com Iodo | Sem Iodo</div>
          </div>
          <div className="flex flex-col md:w-[25rem] items-center py-8 px-8 gap-2 text-primary bg-slate-100 rounded-lg">
            <Image className="object-contain h-56" src={indSalRefinado} alt="Foto do saco de Sal Grosso de 25kg"></Image>
            <div className="border-2 border-collapse border-slate-400/60 w-9/12"></div>
            <div className="text-xl font-semibold">SAL SOLEDAD REFINADO</div>
            <div className="text-sm">25kg</div>
            <div>Com Iodo | Sem Iodo</div>
          </div>
          <div className="flex flex-col md:w-[25rem] items-center py-8 px-2 gap-2 text-primary bg-slate-100 rounded-lg">
            <Image className="object-contain h-56" src={indBigBag} alt="Foto do saco de Sal Grosso de 25kg"></Image>
            <div className="border-2 border-collapse border-slate-400/60 w-9/12"></div>
            <div className="text-xl font-semibold">SAL SOLEDAD</div>
            <div className="text-sm">GROSSO | MOÍDO | REFINADO | GRANULADO</div>
            <div>Big Bag - 1000kg</div>
          </div>
        </div>
        <div className="text-2xl p-4 lg:text-3xl text-primary font-semibold">Linha Animal</div>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col items-center md:w-[25rem] py-8 px-8 gap-2 text-primary bg-slate-100 rounded-lg">
            <Image className="object-contain h-56" src={animMoido} alt="Foto do saco de Sal Grosso de 25kg"></Image>
            <div className="border-2 border-collapse border-slate-400/60 w-9/12"></div>
            <div className="text-xl font-semibold">SAL BEEF MOÍDO</div>
            <div>25kg</div>
          </div>
        </div>
      </div>
      <Botton/>
    </div>
  );
}
