import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Anime",
};

const topAnime = [
  {
    name: "Demon Slayer (Kimetsu no Yaiba)",
    description:
      "Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon, seeking revenge and a cure.",
    seasons: 4,
    episodes: 55,
    image:
      "https://i.pinimg.com/736x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg",
    link: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
  },
  {
    name: "One Piece",
    description:
      "Monkey D. Luffy sets out with his crew to find the legendary One Piece treasure and become the Pirate King, facing adventures on the high seas.",
    seasons: "20+",
    episodes: "1100+",
    image:
      "https://i.pinimg.com/1200x/52/7f/06/527f06aca25cfe1ff6100ff2990a1272.jpg",
    link: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
  },
  {
    name: "Attack on Titan (Shingeki no Kyojin)",
    description:
      "In a world where humanity lives within walls to protect themselves from giant Titans, Eren Yeager and his friends fight to uncover the truth behind their existence.",
    seasons: 4,
    episodes: 90,
    image:
      "https://i.pinimg.com/1200x/8f/3c/fc/8f3cfc63179b29235274e69b58c3a4b7.jpg",
    link: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
  },
  {
    name: "Death Note",
    description:
      "A psychological thriller about Light Yagami, who gains a notebook that lets him kill anyone by writing their name, and his cat-and-mouse battle with detective L.",
    seasons: 1,
    episodes: 37,
    image:
      "https://i.pinimg.com/736x/04/8a/fc/048afcc1d1f6b331a63357c6c7fee96d.jpg",
    link: "https://www.crunchyroll.com/series/G6NQ5DWZ6/death-note",
  },
  {
    name: "Classroom of the Elite (Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e)",
    description:
      "At an elite high school where students are ranked by merit, Kiyotaka Ayanokoji hides his true intelligence while navigating psychological battles and manipulative classmates.",
    seasons: 3,
    episodes: 39,
    image:
      "https://i.pinimg.com/1200x/1a/2b/b4/1a2bb46bc0668b0e732f83927270bf92.jpg",
    link: "https://www.crunchyroll.com/series/GXJHM3N8K/classroom-of-the-elite",
  },
  {
    name: "Dragon Ball Z",
    description:
      "The story of Goku and his friends defending Earth from powerful foes, including Saiyans, androids, and gods, filled with legendary battles.",
    seasons: 9,
    episodes: 291,
    image:
      "https://i.pinimg.com/736x/d1/ec/56/d1ec56eaea2b1f7fb17834880083b383.jpg",
    link: "https://www.crunchyroll.com/series/G8DHV7W21/dragon-ball-z",
  },
  {
    name: "Hunter x Hunter",
    description:
      "Gon Freecss aspires to become a Hunter and find his father. Along the way, he meets friends and faces dangerous trials in a world of beasts and treasures.",
    seasons: 6,
    episodes: 148,
    image:
      "https://i.pinimg.com/736x/93/2c/fa/932cfa771077b1ce8d2bbf2494c26c1c.jpg",
    link: "https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter",
  },
  {
    name: "Black Clover",
    description:
      "Asta, a boy born without magic in a world where it is everything, aims to become the Wizard King alongside his rival Yuno, who is gifted with immense magical talent.",
    seasons: 4,
    episodes: 170,
    image:
      "https://i.pinimg.com/1200x/75/e5/25/75e525aa16b9dbd86595149a7c0adc59.jpg",
    link: "https://www.crunchyroll.com/series/G63VGG2NY/bleach",
  },
  {
    name: "Naruto",
    description:
      "Follows Naruto Uzumaki, a young ninja with dreams of becoming the strongest Hokage while struggling with the Nine-Tails fox spirit sealed inside him.",
    seasons: 5,
    episodes: 220,
    image:
      "https://i.pinimg.com/1200x/3a/8c/63/3a8c63737ae2d94f9d4f09f477e3df34.jpg",
    link: "https://www.crunchyroll.com/series/GY9PJ5KWR/naruto",
  },
  {
    name: "Tokyo Ghoul",
    description:
      "Ken Kaneki, a college student, becomes half-ghoul after a deadly encounter and struggles to survive between human and ghoul societies.",
    seasons: 4,
    episodes: 48,
    image:
      "https://i.pinimg.com/736x/39/90/d9/3990d9a269712084403bd71e4a07563c.jpg",
    link: "https://www.crunchyroll.com/series/GR758W8PR/tokyo-ghoul",
  },
];

export default function Anime() {
  return (
    <div className="flex flex-col">
      <section className="py-10">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">
          Top Anime <span className="text-xl">(personal choice)</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topAnime.map((anime, idx) => (
            <div
              key={idx}
              className="shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 relative bg-secondary p-3"
            >
              <Image
                src={anime.image}
                alt={anime.name}
                width={200}
                height={200}
                className="w-full h-64 object-cover"
                priority
              />
              <h2 className="text-xl font-bold mb-2">{anime.name}</h2>
              <p className="text-sm mb-4 line-clamp-3">{anime.description}</p>
              <div className="flex justify-between text-sm mb-10">
                <span>📺 Seasons: {anime.seasons}</span>
                <span>🎬 Episodes: {anime.episodes}</span>
              </div>
              <Link
                href={anime.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg shadow hover:bg-orange-600 transition"
              >
                Watch <span className="hidden md:inline">on Crunchyroll</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
