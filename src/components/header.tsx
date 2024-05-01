

import Image from "next/image"
import salinaLogo from "../../public/images/Logos/SalinaSolidade_hori.svg"
import Link from "next/link"

export function Header() {
    return (
            <div className="flex justify-between items-center gap-2 px-12 max-h-32 min-h-28 bg-slate-100">
                <div >
                    <Image className="max-h-20 min-h-16" src={salinaLogo} alt="Logo Salina Soledade" />
                </div>
                <div className="flex gap-14 pl-4 font-medium antialiased text-2xl text-primary md:disabled">
                    <Link href="/">INÍCIO</Link>
                    <Link href="/sobre">SOBRE</Link>
                    <Link href="/produtos">PRODUTOS</Link>
                    <Link href="/#vamosconversar">CONTATOS</Link>
                </div>
                
            </div>
        )
}