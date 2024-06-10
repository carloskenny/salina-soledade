import Image from "next/image";

import { Botton } from "@/components/botton";
import { Header } from "@/components/header";

import backCta1 from "../../public/images/FotoBanner.jpeg";
import backSobreHome from "../../public/images/FotoSobre.jpeg";
import linhaIndustriaImage from "../../public/images/products/SacoSALMOIDOSOLEDADE25kg.png";
import linhaAnimalImage from "../../public/images/products/SALBEEF25KGLINHAANIMAL.png";
import seloEnergiaLimpa from "../../public/images/Logos/SeloEnergiaLimpa.svg";

import iconExperiencia from "../../public/images/IconExperiencia.svg";
import iconSustentabilidade from "../../public/images/IconSustentabilidade.svg";
import iconCompromisso from "../../public/images/IconCompromisso.svg";

import { CardIndicator } from "@/components/cardIndicator";
import CarouselProduction from "@/components/sliderProduction";
import BannerCTA from "@/components/bannerCta";
import ContactForm from "@/components/contact";

export default function Home() {


  return (
    <div className="md:w-screen lg:w-10/12 bg-gray-100">
      {/* Menu Navegação */}
      <Header />

      {/* CTA */}
      <BannerCTA/>
      

      {/* Sobre */}
      <div className="flex flex-col py-4 lg:p-8 justify-center">
        {/* Quadro Experiência Sustentabilidade Compromisso */}
        <div className="flex flex-col gap-4 lg:gap-8 items-center">
          <div className="font-semibold text-primary text-2xl p-2 lg:text-4xl">
            <p>Confiança e Respeito</p>
          </div>
          <div className="flex flex-col gap-4 px-4 md:flex-row lg:gap-8">
            <div className="md:max-w-64 border-2 border-slate-500/75 flex flex-col gap-2 p-4 rounded-xl ">
              <Image
                className="h-12 w-12"
                src={iconExperiencia}
                alt="Icone diploma"
              />
              <p className="text-xl md:text-2xl font-bold">Experiência</p>
              <p className="lg: text-xl">
                Temos profissionais com mais de 30 anos de experiência.
              </p>
            </div>
            <div className="md:max-w-64 border-2 border-slate-500/75 flex flex-col gap-2 p-4 rounded-xl ">
              <Image
                className="h-12 w-12"
                src={iconSustentabilidade}
                alt="Icone Folha"
              />
              <p className="text-xl md:text-2xl font-bold">Sustentabilidade</p>
              <p className="lg: text-xl">
                Utilizamos energia limpa e sustentável.
              </p>
            </div>
            <div className="md:max-w-64 border-2 border-slate-500/75 flex flex-col gap-2 p-4 rounded-xl ">
              <Image
                className="h-12 w-12"
                src={iconCompromisso}
                alt="Icone Caminhão"
              />
              <p className="text-xl md:text-2xl font-bold">Compromisso</p>
              <p className="lg: text-xl">
                Temos os melhores transportadores para todo o Brasil.
              </p>
            </div>
          </div>
        </div>

        {/* Nossa História */}
        <div className="flex flex-col-reverse lg:flex-row-reverse p-4 lg:p-8 max-h-min justify-center items-center">
          {/* Tratos */}
          <Image
            src={backSobreHome}
            className="object-cover object-left md:w-1/2 lg:w-3/5 rounded-b-2xl lg:rounded-2xl"
            alt="Vista sob o telhado com placas de enegia solar e colina de Sal"
          />
          {/* Texto */}
          <div className="relative flex flex-col gap-8 p-4 rounded-t-2xl text-center lg:text-left md:w-1/2 lg:w-2/5 lg:-mr-12 lg:p-8 lg:rounded-2xl text-slate-200 bg-secundary">
            <span className="place-self-center font-bold text-2xl lg:text-4xl">
              Nossa História...
            </span>
            <p className="font-medium lg:text-xl">
              Há mais de 50 anos atuando no mercado brasileiro, reconhecida
              nacionalmente pela qualidade dos produtos e atendimento
              customizado.
            </p>
            <p className="font-medium lg:text-xl">
              Estamos melhorando continuamente nossos sistemas e processos
              produtivos, com objetivo de atender as demandas dos nossos
              clientes.
            </p>

            <a
              className="bg-slate-300 p-4 text-center w-64 self-center rounded-xl text-primary font-semibold hover:bg-slate-100 transition-all"
              href="/sobre"
            >
              Veja mais sobre nós!
            </a>
          </div>
        </div>
      </div>

      {/* Produtos */}
      <div className="flex flex-col justify-center items-center p-8 pb-16 gap-8 max-h-min bg-slate-300/60">
        <div className="text-2xl lg:text-4xl font-semibold text-primary p-4">
          Produtos
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-32">
          <a
            className="flex flex-col w-72 justify-center items-center lg:size-96 bg-slate-100 rounded-xl hover:opacity-60 hover:shadow-md transition-all"
            href="/produtos"
          >
            <Image
              className="w-60 md:w-72"
              src={linhaIndustriaImage}
              alt="Imagem do Produto Sal Moído de 25 kg"
            />
            <div className="border-2 border-collapse border-slate-400/60 w-36 my-2 md:w-1/3" />
            <div className="font-semibold p-4 text-xl lg:text-2xl text-primary">
              Linha Indústria
            </div>
          </a>
          <a
            className="flex flex-col w-72 justify-center items-center lg:size-96 bg-slate-100 rounded-xl hover:opacity-60 hover:shadow-md transition-all"
            href="/produtos"
          >
            <Image
              className="w-60 md:w-72"
              src={linhaAnimalImage}
              alt="Imagem do Produto Sal Moído de 25 kg"
            />
            <div className="border-2 border-collapse border-slate-400/60 w-36 my-2 md:w-1/3" />
            <div className="font-semibold p-4 text-xl lg:text-2xl text-primary">
              Linha Animal
            </div>
          </a>
          <a
            className="bg-slate-300 p-4 text-center w-64 self-center rounded-xl text-primary font-semibold hover:bg-slate-100 transition-all md:hidden"
            href="/produtos"
          >
            Veja mais produtos!
          </a>
        </div>
      </div>

      {/* Prova Social */}
      <div className="flex flex-col-reverse lg:flex-row p-8 justify-center items-center">
        <div className="p-8 md:w-1/2 lg:ml-16">
          <CardIndicator title="3.000.000 m²" description="Área Produtiva" order={1} />
          <CardIndicator title="300 carretas" description="Carregadas/Mês" order={2} />
          <CardIndicator title="90.000 m²" description="Preservação Ambiental" order={3} />
          <CardIndicator title="2" description="Usinas Solares" order={4} />
        </div>
        <div className="flex flex-col justify-center items-center md:w-1/2 p-2">
          <Image
            className="w-80 h-auto"
            src={seloEnergiaLimpa}
            alt="Selo empresa energia limpa"
          />
          <p className="text-2xl text-center w-2/3">
            Somos a primeira Salina do Brasil com geração própria de energia
            limpa.
          </p>
        </div>
      </div>

      {/* Slider Produção */}
      <CarouselProduction />

      {/* Contato Form */}
      <ContactForm/>

      {/* Rodapé */}
      <Botton/>

    </div>
  );
}
