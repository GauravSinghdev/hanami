"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function Appbar() {
  const pathname = usePathname();

  return (
    <header className="mx-auto container py-4 px-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold border-4 px-5 py-1 border-primary">
            HANAMI
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 px-5 py-2 tracking-widest">
          <Link
            href="/facts"
            className={`font-medium transition-colors ${
              pathname === "/facts"
                ? "underline decoration-2 text-primary font-semibold underline-offset-4 decoration-primary/80"
                : ""
            }`}
          >
            Facts
          </Link>
          <Link
            href="/anime"
            className={`font-medium transition-colors ${
              pathname === "/anime"
                ? "underline decoration-2 text-primary font-semibold underline-offset-4 decoration-primary/80"
                : ""
            }`}
          >
            Anime
          </Link>
          <Link
            href="/category-page"
            className={`font-medium transition-colors ${
              pathname === "/category-page"
                ? "underline decoration-2 text-primary font-semibold underline-offset-4 decoration-primary/80"
                : ""
            }`}
          >
            Categories
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          {/* <Link href="/login">
            <Button size={"lg"}>Log in</Button>
          </Link> */}
          {/* <Button
            variant="default"
            className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90"
            asChild
          >
            <Link href="/signup">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button> */}
        </div>
      </div>

      {/* Mobile navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 border-t-2 shadow-xl bg-secondary z-50">
        <div className="flex justify-between items-center divide-x-2">
          <Link
            href="/facts"
            className={`flex flex-col items-center text-sm font-bold w-full px-2 py-4 ${
              pathname === "/facts" ? "text-primary" : ""
            }`}
          >
            Facts
          </Link>
          <Link
            href="/anime"
            className={`flex flex-col items-center text-sm font-bold w-full px-2 py-4 ${
              pathname === "/anime" ? "text-primary" : ""
            }`}
          >
            Anime
          </Link>
          <Link
            href="/category-page"
            className={`flex flex-col items-center text-sm font-bold w-full px-2 py-4 ${
              pathname === "/category-page" ? "text-primary" : ""
            }`}
          >
            Categories
          </Link>
        </div>
      </nav>
    </header>
  );
}
