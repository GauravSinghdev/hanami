import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Facts",
};

const factsObj = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/01/08/08/40/road-7704729_640.jpg",
    alt: "image-01",
    fact: "Japan is made up of over 6,800 islands, though most people live on the four main ones.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_640.jpg",
    alt: "image-02",
    fact: "Shinjuku Station in Tokyo is the busiest train station in the world, used by over 3.5 million people daily.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/10/05/16/53/kimono-6683245_640.jpg",
    alt: "image-03",
    fact: "The kimono has been Japan’s traditional garment for centuries and is still worn at ceremonies and festivals.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/01/08/08/40/road-7704729_640.jpg",
    alt: "image-04",
    fact: "Mount Fuji, Japan’s tallest mountain, is an active volcano and a UNESCO World Heritage site.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_640.jpg",
    alt: "image-05",
    fact: "Cherry blossoms bloom across Japan every spring, celebrated with 'hanami' flower-viewing picnics.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/10/05/16/53/kimono-6683245_640.jpg",
    alt: "image-06",
    fact: "Tokyo is home to more Michelin-starred restaurants than any other city in the world.",
  },
  // {
  //   imageUrl:
  //     "https://cdn.pixabay.com/photo/2017/03/19/20/19/japan-2150681_640.jpg",
  //   alt: "image-07",
  //   fact: "Sumo wrestling is Japan’s national sport, dating back over 1,500 years.",
  // },
  // {
  //   imageUrl:
  //     "https://cdn.pixabay.com/photo/2017/01/20/00/30/shinkansen-1990260_640.jpg",
  //   alt: "image-08",
  //   fact: "Japan’s bullet trains, Shinkansen, can reach speeds of up to 320 km/h and are famous for their punctuality.",
  // },
  // {
  //   imageUrl:
  //     "https://cdn.pixabay.com/photo/2016/11/18/16/19/japan-1838977_640.jpg",
  //   alt: "image-09",
  //   fact: "The Japanese language uses three scripts together: hiragana, katakana, and kanji.",
  // },
  // {
  //   imageUrl:
  //     "https://cdn.pixabay.com/photo/2017/08/07/20/08/itsukushima-shrine-2602671_640.jpg",
  //   alt: "image-10",
  //   fact: "The floating torii gate of Itsukushima Shrine in Hiroshima is one of Japan’s most iconic landmarks.",
  // },
  // {
  //   imageUrl:
  //     "https://cdn.pixabay.com/photo/2018/09/22/09/26/japan-3695054_640.jpg",
  //   alt: "image-11",
  //   fact: "Karaoke, loved worldwide, was invented in Japan in the 1970s.",
  // },
  // {
  //   imageUrl:
  //     "https://cdn.pixabay.com/photo/2016/11/18/16/21/japan-1838992_640.jpg",
  //   alt: "image-12",
  //   fact: "Japan has the world’s highest life expectancy, with many people living well past 80.",
  // },
];

export default function FactsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-10">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">
          Facts <span className="opacity-80 text-xl">({factsObj.length} items)</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto gap-5 lg:gap-10 px-2 sm:px-0">
          {factsObj.map((fact) => (
            <div
              key={fact.alt}
              className="flex flex-col gap-4 rounded bg-secondary p-2 shadow"
            >
              <Image
                src={fact.imageUrl}
                alt={fact.alt}
                width={500}
                height={500}
                className="rounded object-cover w-full h-48 sm:h-56 "
                priority
              />
              <p className="text-center text-sm md:text-base font-medium">
                {fact.fact}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
