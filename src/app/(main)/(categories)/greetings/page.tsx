import { ArrowBigRightDashIcon } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Greetings",
  };

const greetings = {
  "Basic Greetings": [
    {
      word: "Konnichiwa",
      jword: "こんにちは",
      meaning: "Hello / Good afternoon",
    },
    {
      word: "Ohayou gozaimasu",
      jword: "おはようございます",
      meaning: "Good morning (polite)",
    },
    {
      word: "Ohayou",
      jword: "おはよう",
      meaning: "Good morning (casual)",
    },
    {
      word: "Konbanwa",
      jword: "こんばんは",
      meaning: "Good evening",
    },
    {
      word: "Hajimemashite",
      jword: "はじめまして",
      meaning: "Nice to meet you (first time)",
    },
    {
      word: "Ogenki desu ka?",
      jword: "お元気ですか？",
      meaning: "How are you? (polite)",
    },
    {
      word: "Genki?",
      jword: "元気？",
      meaning: "How are you? (casual)",
    },
  ],
  Goodbyes: [
    {
      word: "Sayounara",
      jword: "さようなら",
      meaning: "Goodbye (formal, long-term)",
    },
    {
      word: "Jaa ne",
      jword: "じゃあね",
      meaning: "See you (casual)",
    },
    {
      word: "Mata ne",
      jword: "またね",
      meaning: "See you again (friendly)",
    },
    {
      word: "Mata ashita",
      jword: "また明日",
      meaning: "See you tomorrow",
    },
    {
      word: "Mata raishuu",
      jword: "また来週",
      meaning: "See you next week",
    },
  ],
  "Thanks & Politeness": [
    {
      word: "Arigatou gozaimasu",
      jword: "ありがとうございます",
      meaning: "Thank you (polite)",
    },
    {
      word: "Arigatou",
      jword: "ありがとう",
      meaning: "Thanks (casual)",
    },
    {
      word: "Doumo arigatou",
      jword: "どうもありがとう",
      meaning: "Thanks a lot",
    },
    {
      word: "Dou itashimashite",
      jword: "どういたしまして",
      meaning: "You’re welcome",
    },
    {
      word: "Sumimasen",
      jword: "すみません",
      meaning: "Excuse me / Sorry / Thank you (contextual)",
    },
    {
      word: "Gomen nasai",
      jword: "ごめんなさい",
      meaning: "I’m sorry (polite)",
    },
    {
      word: "Gomen",
      jword: "ごめん",
      meaning: "Sorry (casual)",
    },
  ],
  "Coming & Going": [
    {
      word: "Ittekimasu",
      jword: "いってきます",
      meaning: "I’m leaving (used by person going out)",
    },
    {
      word: "Itterasshai",
      jword: "いってらっしゃい",
      meaning: "Take care / See you (reply to Ittekimasu)",
    },
    {
      word: "Tadaima",
      jword: "ただいま",
      meaning: "I’m home (when returning)",
    },
    {
      word: "Okaerinasai",
      jword: "おかえりなさい",
      meaning: "Welcome back (reply to Tadaima)",
    },
    {
      word: "Irasshaimase",
      jword: "いらっしゃいませ",
      meaning: "Welcome! (used by store staff)",
    },
    {
      word: "Yōkoso",
      jword: "ようこそ",
      meaning: "Welcome (general use, e.g., to Japan/home)",
    },
  ],
  "Night & Seasonal": [
    {
      word: "Oyasuminasai",
      jword: "おやすみなさい",
      meaning: "Good night (polite)",
    },
    {
      word: "Oyasumi",
      jword: "おやすみ",
      meaning: "Good night (casual)",
    },
    {
      word: "Akemashite omedetou gozaimasu",
      jword: "あけましておめでとうございます",
      meaning: "Happy New Year",
    },
    {
      word: "Omedetou gozaimasu",
      jword: "おめでとうございます",
      meaning: "Congratulations (polite)",
    },
    {
      word: "Omedetou",
      jword: "おめでとう",
      meaning: "Congrats (casual)",
    },
    {
      word: "Tanjobi omedetou",
      jword: "誕生日おめでとう",
      meaning: "Happy Birthday",
    },
    {
      word: "Tanjobi omedetou gozaimasu",
      jword: "誕生日おめでとうございます",
      meaning: "Happy Birthday (polite)",
    },
  ],
};

const totalLen = Object.values(greetings).reduce(
  (sum, list) => sum + list.length,
  0
);

export default function GreetingPage() {
  return (
    <div className="flex flex-col">
      <section className="py-10">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">
          Japanese Greetings ({totalLen})
        </h1>

        {Object.entries(greetings).map(([category, greetList]) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-semibold mb-4 md:px-6 flex items-center gap-2">
              {category}{" "}
              <span className="">
                <ArrowBigRightDashIcon />
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10">
              {greetList.map((bgreet) => (
                <div
                  key={bgreet.word}
                  className="border p-5 shadow-md bg-secondary hover:shadow-lg transition"
                >
                  <p className="text-lg font-semibold">{bgreet.word}</p>
                  <p className="text-xl text-green-500">{bgreet.jword}</p>
                  <p className="text-sm opacity-80 mt-2">{bgreet.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
