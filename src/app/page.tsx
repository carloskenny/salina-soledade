import Image from "next/image";

import { useMask } from "@react-input/mask";

import { Botton } from "@/components/botton";
import { Header } from "@/components/header";

import backCta1 from "../../public/images/FotoBanner.jpeg"
import backSobreHome from "../../public/images/FotoSobre.jpeg"
import linhaIndustriaImage from "../../public/images/products/SacoSALMOIDOSOLEDADE25kg.png"
import linhaAnimalImage from "../../public/images/products/SALBEEF25KGLINHAANIMAL.png"
import seloEnergiaLimpa from "../../public/images/Logos/SeloEnergiaLimpa.svg"

import iconExperiencia from "../../public/images/IconExperiencia.svg"
import iconSustentabilidade from "../../public/images/IconSustentabilidade.svg"
import iconCompromisso from "../../public/images/IconCompromisso.svg"

import { CardIndicator } from "@/components/cardIndicator";
import CarouselProduction from "@/components/sliderProduction";



export default function Home() {
  
  return (
    <div className=" xl:w-[90rem] lg:w-[90rem]  bg-gray-100">
      {/* Menu Navegação */}
      <Header/>
      
      {/* CTA */}
      <div className=" flex flex-col">
        <Image 
            src={backCta1}
            className="object-cover object-bottom h-[50rem]"
            alt="Vista sob o telhado com placas de enegia solar e colina de Sal"
        />
        <div className="bg-secundary/75 -mt-24 h-24 flex justify-center items-center text-5xl font-medium text-white"> 
              <span> Qualidade desde 1969 </span>
        </div>
      </div>
      
      {/* Sobre */}
      <div className="flex flex-col p-12 gap-12 justify-center">
      
        {/* Quadro Experiência Sustentabilidade Compromisso */}
        <div className="flex flex-col gap-12 items-center">
          <div className="text-4xl font-semibold text-primary">
            <p>Confiança e Respeito</p>
          </div>
          <div className="flex gap-24">
            <div className="max-w-72 border-2 border-slate-500/75 flex flex-col gap-4 p-8 rounded-xl ">
                <Image className="h-12 w-12" src={iconExperiencia} alt="Icone diploma" />
                <p className="text-2xl font-bold">Experiência</p>
                <p>Temos profissionais com mais de 30 anos de experiência.</p>
            </div>
            <div className="max-w-72 border-2 border-slate-500/75 flex flex-col gap-4 p-8 rounded-xl ">
                <Image className="h-12 w-12" src={iconSustentabilidade} alt="Icone Folha" />
                <p className="text-2xl font-bold">Sustentabilidade</p>
                <p>Utilizamos energia limpa e sustentável.</p>
            </div>                
            <div className="max-w-72 border-2 border-slate-500/75 flex flex-col gap-4 p-8 rounded-xl ">
                <Image className="h-12 w-12" src={iconCompromisso} alt="Icone Caminhão" />
                <p className="text-2xl font-bold">Compromisso</p>
                <p>Temos os melhores  transportadores para todo o Brasil.</p>
            </div>
          </div>
        </div>
      
        {/* Nossa História */}
        <div className="flex flex-row-reverse p-8 max-h-min justify-center items-center">
            {/* Tratos */}
            <Image 
              src={backSobreHome}
              className="object-cover object-left rounded-2xl w-3/5"
              alt="Vista sob o telhado com placas de enegia solar e colina de Sal"
            />
            {/* Texto */}
            <div className="relative flex flex-col gap-8 bg-secundary -mr-12 p-12 w-2/5 text-slate-200 rounded-2xl">
              <span className="place-self-center font-bold text-4xl">Nossa História...</span>
              <p className="font-medium text-xl">Há mais de 50 anos atuando no mercado brasileiro, reconhecida 
                nacionalmente pela qualidade dos produtos e atendimento customizado. 
              </p>
              <p className="font-medium text-xl">Estamos melhorando continuamente nossos sistemas e processos 
                produtivos, com objetivo de atender as demandas dos nossos clientes.</p>
              
              <button
                className="bg-slate-300 p-4 rounded-xl text-primary font-semibold"
                >Veja mais sobre nós!</button>

            </div>
        </div>
      </div>

      {/* Produtos */}
      <div className="flex flex-col justify-center items-center py-8 pb-16 gap-8 max-h-min bg-slate-300/60">
        <div className="text-4xl font-semibold text-primary p-4">Produtos</div>
        <div className="flex flex-1 gap-32">
          <div className="flex flex-col justify-center gap-4 items-center p-2 size-96 bg-slate-100 rounded-xl">
            <Image className="w-72" src={linhaIndustriaImage} alt="Imagem do Produto Sal Moído de 25 kg" />
            <div className="border-2 border-collapse border-slate-400/60 w-1/3"/>
            <div className="font-semibold text-2xl text-primary">Linha Indústria</div>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center p-2 size-96 bg-slate-100 rounded-xl">
            <Image className="w-72" src={linhaAnimalImage} alt="Imagem do Produto Sal Moído de 25 kg" />
            <div className="border-2 border-collapse border-slate-400/60 w-1/3"/>
            <div className="font-semibold text-2xl text-primary">Linha Indústria</div>
          </div>
        </div>
      </div>

      {/* Prova Social */}
      <div className="flex flex-row p-8 justify-center items-center">
        <div className="w-1/2 p-8 ml-16">
          <CardIndicator title="84" description="Toneladas/Dia" order={1} />
          <CardIndicator title="27mil" description="Hectáres" order={2} />
          <CardIndicator title="+3mil" description="Clientes/Mês" order={3}/>
          <CardIndicator title="2" description="Usinas Solares" order={4}/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 p-2">
          <Image className="w-96" src={seloEnergiaLimpa} alt="Selo empresa energia limpa" />
          <p className="text-2xl text-center w-2/3">Somos a primeira Salina do Brasil com geração própria de energia limpa.</p>
        </div>
        
      </div>

      {/* Slider Produção */}      
      <div className="mx-24 mb-12">
        <CarouselProduction/>
      </div>
      
      {/* Contato Form */}
      <div className="flex flex-col justify-items-center items-center pb-12 py-4  bg-slate-300/60">
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="text-4xl font-semibold text-primary p-8" id="vamosconversar">Vamos Conversar</div>
          <p className="text-2xl">Estamos apenas a uma mensagem de distância.</p>
          <p className="text-2xl">Preencha os campos ou mande um alô no Whatsapp!</p>
        </div>
        <div>
          <form action="" className="grid grid-cols-2 gap-4 text-xl ">
            <input className="p-2 rounded-lg" type="text" name="name" placeholder="Seu nome" required />
            <input className="p-2 rounded-lg" type="email" name="email" id="" placeholder="Email" />
            <input className="p-2 rounded-lg" type="text" name="asssunto" placeholder="Assunto da mensagem" />
            <input 
                className="p-2 rounded-lg" 
                type="text"
                required
                name="contato" 
                id="" 
                placeholder="Contato" />
            <textarea  className="p-2 rounded-lg resize-none col-span-2" name="mensage" id="" cols={30} rows={10} placeholder="Mensagem"></textarea>
            <button
                className="justify-self-center col-span-2 px-12 py-4 bg-secundary text-slate-100 font-bold text-xl rounded-xl"
                type="button"> Enviar 
            </button>
          </form>
        </div>
      </div>

      {/* Rodapé */}
      <Botton/>
    </div>
  );
}
