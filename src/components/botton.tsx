import Image from "next/image";

import SalinaLogo from "../../public/images/Logos/SalinaSoledade.svg"
import SalSoledade from "../../public/images/Logos/SalSoledad.svg"
import SalBeef from "../../public/images/Logos/SalBeefLogoVerde.svg"

export function Botton() {
    return (
            <div>
                <div className="flex flex-1 items-top justify-around px-6 mt-12 mb-8  gap-6">
                    <Image className="max-h-64 self-center" src={SalinaLogo} alt="Logo Salina Soledade" />
                    <div className="flex flex-col gap-12 w-1/3">
                        <div className="flex flex-col gap-4">
                            <div className="text-xl text-primary font-semibold">ESCRITÓRIO ADMINISTRATIVO</div>
                            <div  className="text-lg">
                                <p>Av Senador Salgado Filho, 1515 - Sl 306</p>
                                <p>Ed. Executive Park - Tirol</p>
                                <p>59.015-000 - Natal RN</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-xl text-primary font-semibold">INDÚSTRIA</div>
                            <div className="text-lg">
                                <p>Estrada de Macau Barreiras, KM 22 - S/N</p>
                                <p>Soledade</p>
                                <p>59.500-000 - Macau RN</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 w-1/3">
                        <div className="flex flex-col gap-4">
                            <div className="text-xl text-primary font-semibold">COMERCIAL</div>
                                <div className="text-2xl">
                                    <p>comercial@salinasoledade.com.br</p>
                                    <p className="text-primary text-3xl font-semibold mt-2">84 4008.6600</p>
                                </div>
                            </div>
                            <div className="flex">
                                <Image className="max-h-24" src={SalSoledade} alt="Logo Produto Sal Soledade" />
                                <Image className="max-h-24" src={SalBeef} alt="Logo Produto Sal Beef" />
                            </div>
                        </div>
                </div>
                <div className="flex justify-between items-center gap-2 px-12 h-16 bg-secundary font-medium antialiased text-lg text-slate-100">
                    <span>Salina Solidade © 2024. All Rights Reserved</span>
                    <span>CK TECNOLOGIA</span>
                </div>
            </div>
        )
}