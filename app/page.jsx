import MyCarousel from "@/components/shared/MyCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 h-dvh items-center">
      <MyCarousel />
      <div className="flex flex-col justify-evenly h-full ">
        <div className="flex flex-col gap-3 font-fuschan text-4xl p-5 font-semibold text-center ">
          Discovering the{" "}
          <span className="text-[#3A6D05] relative">
            Green{" "}
            <Image
              src="/Leaf.png"
              width={40}
              height={40}
              alt="leaf"
              className="absolute top-0 left-5"
            />
          </span>
          <p>
            near you,
            <span className="text-[#3A6D05]"> Natures</span>
          </p>
          <span className="text-[#3A6D05] relative">
            {" "}
            Green{" "}
            <Image
              src="/Leaf.png"
              width={40}
              height={40}
              alt="leaf"
              className="absolute top-0 right-3"
            />
          </span>
        </div>
        <button className="text-2xl w-[350px] p-2 rounded-full shadow-xl font-serif">
          <Link href="/products">Get Started</Link>{" "}
        </button>
      </div>
    </div>
  );
}
