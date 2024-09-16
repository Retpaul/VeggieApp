import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { itim, kaushan } from "./fonts/fonts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Greeny",
  description: "Vegetarian Food Delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} ${kaushan}  ${itim} antialiased`,"bg-[#CFD0CB]")}
      >
        {children}
      </body>
    </html>
  );
}
