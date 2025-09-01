import React from "react";

const schoolWords = [
  { word: "Gakkou", jword: "学校", meaning: "School" },
  { word: "Sensei", jword: "先生", meaning: "Teacher" },
  { word: "Seito", jword: "生徒", meaning: "Student (pupil)" },
  { word: "Tomodachi", jword: "友達", meaning: "Friend" },
  { word: "Hon", jword: "本", meaning: "Book" },
  { word: "Kyoushitsu", jword: "教室", meaning: "Classroom" },
  { word: "Jugyou", jword: "授業", meaning: "Lesson / Class" },
];

export default function SchoolPage() {
  return (
    <div className="flex flex-col">
      <section className="py-10 md:py-15">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">
          School-related Words
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10">
          {schoolWords.map((word) => (
            <div
              key={word.word}
              className=" border p-5 shadow-md bg-secondary hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold text-gray-800">{word.word}</p>
              <p className="text-xl text-green-500">{word.jword}</p>
              <p className="text-sm opacity-80 mt-2">{word.meaning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
