import { ArrowBigRightDashIcon } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Letters",
};

// Hiragana Chart
const hiragana = [
  { romaji: "a", kana: "あ" }, { romaji: "i", kana: "い" }, { romaji: "u", kana: "う" }, { romaji: "e", kana: "え" }, { romaji: "o", kana: "お" },
  { romaji: "ka", kana: "か" }, { romaji: "ki", kana: "き" }, { romaji: "ku", kana: "く" }, { romaji: "ke", kana: "け" }, { romaji: "ko", kana: "こ" },
  { romaji: "sa", kana: "さ" }, { romaji: "shi", kana: "し" }, { romaji: "su", kana: "す" }, { romaji: "se", kana: "せ" }, { romaji: "so", kana: "そ" },
  { romaji: "ta", kana: "た" }, { romaji: "chi", kana: "ち" }, { romaji: "tsu", kana: "つ" }, { romaji: "te", kana: "て" }, { romaji: "to", kana: "と" },
  { romaji: "na", kana: "な" }, { romaji: "ni", kana: "に" }, { romaji: "nu", kana: "ぬ" }, { romaji: "ne", kana: "ね" }, { romaji: "no", kana: "の" },
  { romaji: "ha", kana: "は" }, { romaji: "hi", kana: "ひ" }, { romaji: "fu", kana: "ふ" }, { romaji: "he", kana: "へ" }, { romaji: "ho", kana: "ほ" },
  { romaji: "ma", kana: "ま" }, { romaji: "mi", kana: "み" }, { romaji: "mu", kana: "む" }, { romaji: "me", kana: "め" }, { romaji: "mo", kana: "も" },
  { romaji: "ya", kana: "や" }, { romaji: "yu", kana: "ゆ" }, { romaji: "yo", kana: "よ" },
  { romaji: "ra", kana: "ら" }, { romaji: "ri", kana: "り" }, { romaji: "ru", kana: "る" }, { romaji: "re", kana: "れ" }, { romaji: "ro", kana: "ろ" },
  { romaji: "wa", kana: "わ" }, { romaji: "wo", kana: "を" },
  { romaji: "n", kana: "ん" },
];

// Katakana Chart
const katakana = [
  { romaji: "a", kana: "ア" }, { romaji: "i", kana: "イ" }, { romaji: "u", kana: "ウ" }, { romaji: "e", kana: "エ" }, { romaji: "o", kana: "オ" },
  { romaji: "ka", kana: "カ" }, { romaji: "ki", kana: "キ" }, { romaji: "ku", kana: "ク" }, { romaji: "ke", kana: "ケ" }, { romaji: "ko", kana: "コ" },
  { romaji: "sa", kana: "サ" }, { romaji: "shi", kana: "シ" }, { romaji: "su", kana: "ス" }, { romaji: "se", kana: "セ" }, { romaji: "so", kana: "ソ" },
  { romaji: "ta", kana: "タ" }, { romaji: "chi", kana: "チ" }, { romaji: "tsu", kana: "ツ" }, { romaji: "te", kana: "テ" }, { romaji: "to", kana: "ト" },
  { romaji: "na", kana: "ナ" }, { romaji: "ni", kana: "ニ" }, { romaji: "nu", kana: "ヌ" }, { romaji: "ne", kana: "ネ" }, { romaji: "no", kana: "ノ" },
  { romaji: "ha", kana: "ハ" }, { romaji: "hi", kana: "ヒ" }, { romaji: "fu", kana: "フ" }, { romaji: "he", kana: "ヘ" }, { romaji: "ho", kana: "ホ" },
  { romaji: "ma", kana: "マ" }, { romaji: "mi", kana: "ミ" }, { romaji: "mu", kana: "ム" }, { romaji: "me", kana: "メ" }, { romaji: "mo", kana: "モ" },
  { romaji: "ya", kana: "ヤ" }, { romaji: "yu", kana: "ユ" }, { romaji: "yo", kana: "ヨ" },
  { romaji: "ra", kana: "ラ" }, { romaji: "ri", kana: "リ" }, { romaji: "ru", kana: "ル" }, { romaji: "re", kana: "レ" }, { romaji: "ro", kana: "ロ" },
  { romaji: "wa", kana: "ワ" }, { romaji: "wo", kana: "ヲ" },
  { romaji: "n", kana: "ン" },
];

// Simple Kanji Examples (common beginner ones)
const kanji = [
  { romaji: "hito", kana: "人", meaning: "Person" },
  { romaji: "hi", kana: "日", meaning: "Sun / Day" },
  { romaji: "tsuki", kana: "月", meaning: "Moon / Month" },
  { romaji: "yama", kana: "山", meaning: "Mountain" },
  { romaji: "kawa", kana: "川", meaning: "River" },
  { romaji: "mizu", kana: "水", meaning: "Water" },
  { romaji: "hi", kana: "火", meaning: "Fire" },
];

const sections = {
  Hiragana: hiragana,
  Katakana: katakana,
  "Basic Kanji": kanji,
};

const totalLen = Object.values(sections).reduce(
  (sum, list) => sum + list.length,
  0
);

export default function LettersPage() {
  return (
    <div className="flex flex-col">
      <section className="py-10">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">
          Japanese Letters ({totalLen})
        </h1>

        {Object.entries(sections).map(([category, letterList]) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-semibold mb-4 md:px-6 flex items-center gap-2">
              {category}{" "}
              <span className="">
                <ArrowBigRightDashIcon />
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:px-10">
              {letterList.map((item) => (
                <div
                  key={item.kana}
                  className="border p-5 shadow-md bg-secondary hover:shadow-lg transition text-center"
                >
                  <p className="text-xl text-green-500">{item.kana}</p>
                  <p className="text-lg font-semibold">{item.romaji}</p>
                  {"meaning" in item && (
                    <p className="text-sm opacity-80 mt-2">{item.meaning}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
