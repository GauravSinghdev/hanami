import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col text-center justify-center gap-10 h-screen">
      <h1 className="text-3xl lg:text-5xl font-bold text-red-500">
        Page Not Found
      </h1>
      <p className="text-xl px-10 sm:px-0">
        The page you are looking for does not exist.
      </p>
      <Link href={"/"}>
        <Button>Go to Home</Button>
      </Link>
    </main>
  );
}
