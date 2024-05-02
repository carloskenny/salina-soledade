import { BsWhatsapp } from "react-icons/bs"

export function WhatsAppLink() {
    
    return (
        <div
            className="fixed bottom-2 right-2 md:bottom-1/2 md:right-4 rounded-full p-1 h-min w-min bg-[#25D366] shadow-lg shadow-zinc-500 hover: cursor-pointer"
            >
                <a target="_blank" href="https://wa.me/5584999990383?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos">
                    <BsWhatsapp className="lg:size-12 m-4 text-white" />
                </a>
        </div>
    )
}