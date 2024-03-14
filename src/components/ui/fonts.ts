import { Inter, Poppins } from "next/font/google"

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  subsets: ["devanagari", "latin", "latin-ext"],
  variable: "--font-poppins"
})