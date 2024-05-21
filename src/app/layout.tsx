import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppLink } from "@/components/whatsappLink";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salina Soledade",
  description: "Qualidade desde 1969",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
        <head>
          <link rel="icon" href="/salina.ico" />
        </head>
        <body className={workSans.className}>
          <div className="w-screen md:flex md:justify-center bg-slate-200 antialiased">
            {children}
            <WhatsAppLink/>
          </div>
        </body>
      
    </html>
  );
}
