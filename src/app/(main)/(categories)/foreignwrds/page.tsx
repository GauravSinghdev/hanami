import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: "Foreign-Words",
  };

const foreignWords = [
  { word: "Pan", jword: "パン", meaning: "Bread (from Portuguese 'pão')" },
  { word: "Kohi", jword: "コーヒー", meaning: "Coffee (from English 'coffee')" },
  { word: "Miruku", jword: "ミルク", meaning: "Milk (from English 'milk')" },
  { word: "Arubaito", jword: "アルバイト", meaning: "Part-time job (from German 'Arbeit')" },
  { word: "Depato", jword: "デパート", meaning: "Department store (from English)" },
  { word: "Konpyuutaa", jword: "コンピューター", meaning: "Computer (from English)" },
  { word: "Terebi", jword: "テレビ", meaning: "Television (from English)" },
];

export default function ForeignPage() {
  return (
    <div className="flex flex-col">
      <section className="py-10 md:py-15">
        <h1 className="text-2xl font-bold text-primary text-center mb-10">
          Foreign-origin Words
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10">
          {foreignWords.map((word) => (
            <div
              key={word.word}
              className="border p-5 shadow-md bg-secondary hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold">{word.word}</p>
              <p className="text-xl text-green-500">{word.jword}</p>
              <p className="text-sm opacity-80 mt-2">{word.meaning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
