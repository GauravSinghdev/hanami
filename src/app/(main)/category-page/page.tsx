import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Category",
};

const categoriesObj = [
  {
    name: "Letters",
    link: "/all-letters",
    count: "99 letters",
  },
  {
    name: "Greetings",
    link: "/greetings",
    count: "32 words",
  },
  {
    name: "School",
    link: "/schoolwrds",
    count: "25 words",
  },
  {
    name: "Foreign Words",
    id: "link-09",
    link: "/foreignwrds",
    count: "7 words",
  },
];

const totalItems = categoriesObj.reduce((acc, curr) => {
  const count = parseInt(curr.count);
  return acc + count;
}, 0);

export default function CategoryPage() {
  return (
    <div className="flex flex-col">
      <section className="py-10">
        <h1 className="text-3xl font-bold text-primary text-center mb-10">
          Category <span className="text-xl opacity-80">({`${totalItems} items`})</span>
        </h1>
        <div className="text-slate-500 text-base"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto gap-5 lg:gap-10">
          {categoriesObj.map((category) => (
            <Link
              href={category.link}
              key={category.name}
              className="border p-5 shadow-md bg-secondary hover:shadow-lg transition"
            >
              <div className="">{category.name}</div>
              <div className="text-slate-400">{category.count}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
