import Image from "next/image";

import SalinaLogo from "../../public/images/Logos/SalinaSoledade.svg";
import SalSoledade from "../../public/images/Logos/SalSoledad.svg";
import SalBeef from "../../public/images/Logos/SalBeefLogoVerde.svg";

export function Botton() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-top justify-around px-6 mt-12 mb-8  gap-6">
        <Image
          className="h-32 md:h-56 w-auto self-center"
          src={SalinaLogo}
          alt="Logo Salina Soledade"
        />
        <div className="flex flex-col gap-4 md:gap-12 md:w-1/3">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="text-lg md:text-xl text-primary font-semibold">
              ESCRITÓRIO ADMINISTRATIVO
            </div>
            <div className="md:text-lg">
              <p>Av Senador Salgado Filho, 1515 - Sl 306</p>
              <p>Ed. Executive Park - Tirol</p>
              <p>59.015-000 - Natal RN</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="text-lg md:text-xl text-primary font-semibold">
              INDÚSTRIA
            </div>
            <div className="text-lg">
              <p>Estrada de Macau Barreiras, KM 22 - S/N</p>
              <p>Soledade</p>
              <p>59.500-000 - Macau RN</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12 md:w-1/3">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="text-lg md:text-xl text-primary font-semibold">
              COMERCIAL
            </div>
            <div className="text-xl md:text-2xl">
              <p>comercial@salinasoledade.com.br</p>
              <p className="text-primary text-2xl text-center md:text-left md:text-3xl font-semibold mt-2">
                84 4008.6600
              </p>
            </div>
          </div>
          <div className="flex flex-row self-center">
            <Image
              className="max-h-24"
              src={SalSoledade}
              alt="Logo Produto Sal Soledade"
            />
            <Image
              className="max-h-24"
              src={SalBeef}
              alt="Logo Produto Sal Beef"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 px-2 md:px-12 py-4 md:text-lg md:justify-between  bg-secundary font-medium text-slate-100">
        <span className="text-center">Salina Solidade © 2024. All Rights Reserved</span>
        <span className="text-center">CK TECNOLOGIA</span>
      </div>
    </div>
  );
}
