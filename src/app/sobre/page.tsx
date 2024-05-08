import { Botton } from "@/components/botton";
import { Header } from "@/components/header";
import Image from "next/image";

import sobre01aerea from "../../../public/images/sobre/sobre01vistaAerea.jpeg"
import sobre02carregamento from "../../../public/images/sobre/sobre02carregamento.jpeg"
import logoValores from "../../../public/images/Logos/LogoSalina.svg"

export default function Sobre() {
  return (
    <div className="md:w-screen lg:w-[80%] bg-gray-100">
      <Header/>
      <div className="flex flex-col p-8 gap-8 lg:px-24 lg:py-12 lg:gap-16 bg-slate-300/60">
        <span className="font-bold text-4xl text-primary">Nossa História...</span>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12 items-center">
          <div className="text-xl text-justify lg:leading-loose">
            <p>A Salina Soledade é uma das mais tradicionais indústrias salineiras 
              do Rio Grande do Norte. Atuando no mercado brasileiro desde 1969, a 
              empresa é reconhecida nacionalmente pela qualidade dos seus produtos. 
              Há mais de 50 anos instalada no município de Macau, a Soledade vem 
              melhorando continuamente seus sistemas e processos produtivos, com 
              objetivo de atender as demandas e requisitos dos nossos clientes.</p>
          </div >
          <Image 
            className="object-cover h-[20rem] w-[50rem] rounded-3xl shadow-xl"
            src={sobre01aerea} alt="">
          </Image>
        </div>
        <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-12 items-center">
          <Image 
            className="object-cover h-[20rem] w-[50rem] rounded-3xl shadow-xl"
            src={sobre02carregamento} alt="">
          </Image>
          <div className="text-xl text-justify lg:leading-loose">
            <p>Com um mix de produtos desenvolvido para atender os mais diversos 
              tipos de indústrias, a Salina Soledade fornece qualidade e atendimento 
              customizado. </p>
            <p>Nossa equipe de representantes possui profissionais experientes e 
              treinados. Entre em contato conosco para saber qual representante 
              está mais próximo da sua empresa.</p>
          </div >
        </div>
        <div className="flex flex-col items-center text-center text-xl md:text-3xl font-semibold leading-snug">
          <p> Nossos valores são para nós, verdadeiros pontos concretos de esforço.</p>
          <p> São a base que sustenta e orienta as nossas ações.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-center md:flex-row items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Confiança</div>
            <p className="text-slate-500">Sermos uma empresa sólida e confiável para nossos clientes, fornecedores e colaboradores.</p>
          </div>
          <div className="flex flex-col gap-2 text-center md:flex-row items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Conhecimento</div>
            <p className="text-slate-500">Buscar sempre aumentar nosso conhecimento e desenvolver nossos colaboradores.</p>
          </div>
          <div className="flex flex-col gap-2 text-center md:flex-row items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Respeito</div>
            <p className="text-slate-500">Estabelecer relacionamentos pautados pelo respeito aos nossos clientes, fornecedores e colaboradores.</p>
          </div>
          <div className="flex flex-col gap-2 text-center md:flex-row items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Foco</div>
            <p className="text-slate-500">Trabalhar focado em atender as demandas e requisitos dos nossos clientes.</p>
          </div>
          <div className="flex flex-col gap-2 text-center md:flex-row items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Sustentabilidade</div>
            <p className="text-slate-500">Produzir respeitando e cuidando do Meio Ambiente. Somos a primeira Salina do Brasil com geração própria de energia limpa, através de nossas duas usinas de energia solar.</p>
          </div>
        </div>
        <span className="font-bold text-center text-4xl text-primary">Nossa Logística...</span>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <Image 
              className="object-cover h-[20rem] w-[50rem] lg:h-[40rem] lg:w-[30rem] rounded-3xl shadow-xl"
              src={sobre01aerea} alt="">
            </Image>
            <div className="text-xl text-justify lg:leading-loose p-4">
              <p>Por ser uma área muito importante para o eficiente atendimento dos 
              nossos clientes e o sucesso da nossa operação. A Salina Soledade conta com 
              uma equipe que possui mais de 30 anos de experiência em logística.</p>
              <p>Nossa equipe trabalha incansavelmente na busca da fidelização dos transportadores e 
              motoristas que recebem as melhores notas em nossas avaliações periódicas.</p>
              <p>Com tecnologia e relacionamentos que alcançam os principais centros receptores e
              emissores de carretas do nordeste, nossos profissionais de logística estão sempre 
              atentos a todos os fatores que interferem na qualidade do transporte dos nossos produtos.</p>
            </div >
          </div>
      </div>
      <Botton/>
    </div>
  );
}
