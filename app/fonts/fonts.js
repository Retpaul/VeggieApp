import { Kaushan_Script,Itim } from "next/font/google";

const kaushan_init = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: ["400"],
});

const itim_init = Itim({
  subsets: ["latin"],
  variable: "--font-itim",
  weight: ["400"],
});

export const kaushan = kaushan_init.variable;
export const itim = itim_init.variable;
