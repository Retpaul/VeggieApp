"use client"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";

const prescreenImgs = [
  { img: "/prescreenimg.png" },
  { img: "/prescreenimg1.png" },
  { img: "/prescreenimg2.png" },
  { img: "/prescreenimg3.png" },
];

export default function MyCarousel() {
  const plugin =useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {prescreenImgs.map((img, index) => (
          <CarouselItem key={index} className=" text-center">
            <Image src={img.img} width={600} height={300} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-10 left-52">
      <CarouselPrevious />
      <CarouselNext />  
      </div>
      
    </Carousel>
  );
}


