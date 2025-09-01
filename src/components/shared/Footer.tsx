import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto container py-4 px-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2 mb-4 md:mb-0">
          Hanami
        </Link>
        <div className="flex flex-wrap justify-center gap-8">
          <Link
            href="#"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mt-2 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Hanami. All rights reserved.
      </div>
    </footer>
  );
}
