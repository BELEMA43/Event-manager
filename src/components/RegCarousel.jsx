"use client";

import Autoplay from "embla-carousel-autoplay";
import slide from "../assets/Slide.png";
import slide1 from "../assets/Slide (1).png";
import slide2 from "../assets/Slide (2).png";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const slides = [
    {
      image: `${slide}`,
    },
    {
      image: `${slide1}`,
    },
    {
      image: `${slide2}`,
    },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      className="max-w-113.75"
    >
      <CarouselContent className="">
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="rounded-xl">
              <Card
                className={`flex flex-col justify-center items-center h-77.5 p-0 m-0 rounded-xl ring-0 w-full bg-cover bg-center bg-no-repeat`}
              >
                <img
                  src={slide.image}
                  alt="Slide images"
                  className=" object-contain rounded-xl"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
