import Appbar from "@/components/shared/Appbar";
import Footer from "@/components/shared/Footer";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-50 -z-10" />
      <Appbar />
      <main className="min-h-screen container mx-auto px-5 md:px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
