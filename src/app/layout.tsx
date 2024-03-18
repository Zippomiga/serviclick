import type { Metadata } from "next";
import "./globals.css";
import "./normalize.css"
import { poppins } from "../components/ui/fonts";
import clsx from "clsx";


export const metadata: Metadata = {
  title: "ServiClick",
  description: "",
};

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gradient-to-t from-rose-900 to-rose-700 mt-auto w-full h-40">
      <div className="font-bold text-4xl text-white uppercase">
        ServiClick
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        {children}
        <Footer />
      </body>
    </html >
  );
}