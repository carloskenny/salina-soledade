import { Botton } from "@/components/botton";
import { Header } from "@/components/header";
import Image from "next/image";




export default function Sobre() {
  return (
    <div className=" xl:w-[90rem] lg:w-[90rem]  bg-gray-100">
      <Header/>
        <div>Nossa História...</div>
        <div>
          <div>
            <p>A Salina Soledade é uma das mais tradicionais indústrias salineiras 
              do Rio Grande do Norte. Atuando no mercado brasileiro desde 1969, a 
              empresa é reconhecida nacionalmente pela qualidade dos seus produtos. 
              Há mais de 50 anos instalada no município de Macau, a Soledade vem 
              melhorando continuamente seus sistemas e processos produtivos, com 
              objetivo de atender as demandas e requisitos dos nossos clientes.</p>
          </div>
            <Image src={} alt=""></Image>
          <div>
            
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      <Botton/>
    </div>
  );
}
