"use client";

import Image from "next/image";
import salinaLogo from "../../public/images/Logos/SalinaSolidadeHori.svg";

import { Menu } from "lucide-react";
import { useState } from "react";

let menuStyle = "w-full md:flex md:flex-1 md:justify-end md:items-center hidden";

  const MenuItens = () => {
    return (
      <div className={menuStyle}>
        <div className="text-sm text-primary font-semibold md:flex md:text-2xl md:gap-16">
          <a
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-4"
            href="/"
          >
            INÍCIO
          </a>
          <a
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-4"
            href="/sobre"
          >
            SOBRE
          </a>
          <a
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-4"
            href="/produtos"
          >
            PRODUTOS
          </a>
          <a
            className="block mt-4 md:inline-block md:mt-0  hover:text-white mr-4"
            href="/#vamosconversar"
          >
            CONTATO
          </a>
        </div>
      </div>
    );
  };

export function Header() {
  const [hiddenItensNav, setHiddenItensNav] = useState(true);

  

  const collapseItens = () => {
    if (hiddenItensNav) {
      menuStyle =
        "w-full md:flex md:flex-1 md:justify-end md:items-center";
      setHiddenItensNav(false);
    } else {
      menuStyle = "w-full md:flex md:flex-1 md:justify-end md:items-center hidden";
      setHiddenItensNav(true);
    }
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-slate-100">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Image
          className="w-60 p-2 md:w-80 px-4"
          src={salinaLogo}
          alt="Logo Salina Soledade"
        />
      </div>
      <div className="block md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-slate-400 hover:text-white hover:border-white"
          onClick={collapseItens}
        >
          <Menu className="fill-current h-8 w-8 text-primary" />
        </button>
      </div>
      {MenuItens()}
    </nav>
  );
}
