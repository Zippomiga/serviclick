import type { Metadata } from "next";
import "./globals.css";
import "./normalize.css"
import { poppins } from "../components/ui/fonts";
import clsx from "clsx";


export const metadata: Metadata = {
  title: "ServiClick",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}