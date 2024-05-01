import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppLink } from "@/components/whatsappLink";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salina Soledade",
  description: "Qualidade desde 1069",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      
        <body className={workSans.className}>
          <div className="flex justify-center bg-slate-200">
            {children}
            <WhatsAppLink/>
          </div>
        </body>
      
    </html>
  );
}
