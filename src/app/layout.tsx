import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Mail, Menu, Phone } from "lucide-react";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="text-white flex items-center justify-between w-full h-24 absolute top-0 left-0 right-0 z-10 px-10 container mx-auto">
          <a className="font-bold text-2xl">LOGO</a>
          <ul className="items-center justify-between gap-10 hidden md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Produtos</li>
            <li>Sobre n&oacute;s</li>
            <li>Contato</li>
          </ul>
          <Menu className="text-white h-10 w-10 md:hidden" />
        </nav>
        {children}

        <footer className="w-full flex flex-col items-center bg-amber-900/10 h-auto lg:h-80 justify-between">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left gap-20 mt-10">
            <li className="font-medium text-xl">LOGO</li>
            <li className="flex flex-col gap-4">
              <h3 className="font-medium text-xl">Empresa</h3>
              <span>Home</span>
              <span>Produtos</span>
              <span>Sobre n&oacute;s</span>
              <span>Contato</span>
            </li>
            <li className="flex flex-col gap-4">
              <h3 className="font-medium text-xl">Onde Estamos</h3>
              <span>Rua Santos Saraiva 1690</span>
              <span>Florian&oacute;polis, SC</span>
            </li>
            <li className="flex flex-col gap-4">
              <h3 className="font-medium text-xl">Contato</h3>
              <a className="flex gap-2"><Phone /> (48) 9 8586-2565</a>
              <a className="flex gap-2"><Mail /> anyone@gmail.com</a>
            </li>
          </ul>
          <p className="text-sm text-gray-800/60 mb-0">made by lypes.agency</p>
        </footer>
        <a> <Image className="fixed bottom-10 right-10" src={'/whatsapp.png'} width={50} height={50} alt="contato whatsapp" /> </a>
        <SpeedInsights />
      </body>
    </html>
  );
}
