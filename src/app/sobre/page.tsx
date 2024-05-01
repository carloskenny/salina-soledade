import { Botton } from "@/components/botton";
import { Header } from "@/components/header";
import Image from "next/image";

import sobre01aerea from "../../../public/images/sobre/sobre01vistaAerea.jpeg"
import sobre02carregamento from "../../../public/images/sobre/sobre02carregamento.jpeg"
import logoValores from "../../../public/images/Logos/LogoSalina.svg"

export default function Sobre() {
  return (
    <div className=" xl:w-[90rem] lg:w-[90rem]">
      <Header/>
      <div className="flex flex-col px-24 py-12 gap-16 bg-slate-300/60">
        <span className="font-bold text-4xl text-primary">Nossa História...</span>
        <div className="flex flex-row gap-12 items-center">
          <div className="text-xl text leading-loose">
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
        <div className="flex flex-row gap-12 items-center">
          <Image 
            className="object-cover h-[20rem] w-[50rem] rounded-3xl shadow-xl"
            src={sobre02carregamento} alt="">
          </Image>
          <div className="text-xl text leading-loose">
            <p>Com um mix de produtos desenvolvido para atender os mais diversos 
              tipos de indústrias, a Salina Soledade fornece qualidade e atendimento 
              customizado. </p>
            <p>Nossa equipe de representantes possui profissionais experientes e 
              treinados. Entre em contato conosco para saber qual representante 
              está mais próximo da sua empresa.</p>
          </div >
        </div>
        <div className="flex flex-col items-center text-3xl font-semibold leading-snug">
          <p> Nossos valores são para nós, verdadeiros pontos concretos de esforço.</p>
          <p> São a base que sustenta e orienta as nossas ações.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-1 items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Confiança</div>
            <div className="text-slate-500">Sermos uma empresa sólida e confiável para nossos clientes, fornecedores e colaboradores.</div>
          </div>
          <div className="flex flex-1 items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Conhecimento</div>
            <div className="text-slate-500">Buscar sempre aumentar nosso conhecimento e desenvolver nossos colaboradores.</div>
          </div>
          <div className="flex flex-1 items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Respeito</div>
            <div className="text-slate-500">Estabelecer relacionamentos pautados pelo respeito aos nossos clientes, fornecedores e colaboradores.</div>
          </div>
          <div className="flex flex-1 items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Foco</div>
            <div className="text-slate-500">Trabalhar focado em atender as demandas e requisitos dos nossos clientes.</div>
          </div>
          <div className="flex flex-1 items-center bg-slate-100 p-4 text-xl border-collapse border-2 border-slate-500/60 rounded-lg">
            <Image className="w-20" src={logoValores} alt="Logomarca Salina em escala de cinza"></Image>
            <div className="mx-4 w-44 text-center font-semibold">Sustentabilidade</div>
            <div className="text-slate-500 w-[54rem]">Produzir respeitando e cuidando do Meio Ambiente. Somos a primeira Salina do Brasil com geração própria de energia limpa, através de nossas duas usinas de energia solar.</div>
          </div>
        </div>
        <span className="font-bold text-4xl text-primary">Nossa Logística...</span>
          <div className="flex flex-1 gap-12 items-center">
            <Image 
              className="object-cover h-[40rem] w-[30rem] rounded-3xl shadow-xl"
              src={sobre01aerea} alt="">
            </Image>
            <div className="text-xl text leading-loose w-[40%]">
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
