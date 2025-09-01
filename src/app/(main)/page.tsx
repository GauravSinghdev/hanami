import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import firstImg from "../../../public/carbon.png";
import Link from "next/link";
import NarutoMotion from "@/components/shared/motion/NarutoMotion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-10 md:py-15">
          <div className="px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="hidden md:block">
                <Tooltip>
                  <TooltipTrigger className="mb-6 rounded-xl px-3 py-1 text-sm bg-slate-200 text-black/80 tracking-widest">
                    アニメは私に日本語を学ぶ意欲を与えてくれます。
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="tracking-widest">
                      Anime inspires me to learn Japanese
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Learning Japanese{" "}
                <div className="text-primary opacity-50 mt-2">with Hanami</div>
              </h1>
              <p className="mb-10 text-sm lg:text-lg text-black/60 dark:text-white/60">
                Hanami refers to the Japanese custom of gathering to enjoy the
                beauty of cherry blossoms (sakura) during spring. People picnic
                under the trees, socialize, and celebrate the fleeting beauty of
                nature.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={"/greetings"}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 cursor-pointer"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={"/learn-more"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-secondary cursor-pointer"
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden sm:block mt-16 relative mx-auto max-w-4xl">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-90 blur-lg"></div>
              <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 backdrop-blur-sm">
                <div className="relative">
                  <Image
                    src={firstImg}
                    alt="Platform preview"
                    width={1280}
                    height={720}
                    className="rounded-lg"
                    priority
                  />
                  {/* Naruto Image */}
                  <NarutoMotion />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-7 md:py-15">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Powerful features
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Everything you need to create pixel-perfect designs with our
                grid system.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-secondary p-3 shadow-xl backdrop-blur"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block mb-4 rounded-full bg-primary/20 px-3 py-1 text-sm text-primary">
                  Precision design
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Design with confidence
                </h2>
                <p className="text-xl text-zinc-400 mb-6">
                  Our grid system provides the foundation for creating
                  consistent, harmonious layouts that look great on any device.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-3 h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-zinc-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-primary hover:bg-primary/90">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-90 blur-lg"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                  <Image
                    src="https://cdn.pixabay.com/photo/2023/12/07/11/04/girl-8435329_640.png"
                    alt="Design showcase"
                    width={1280}
                    height={720}
                    className="object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

// Feature data
const features = [
  {
    title: "Responsive Grid",
    description:
      "Create layouts that automatically adapt to any screen size with our flexible grid system.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <line x1="3" x2="21" y1="15" y2="15" />
        <line x1="9" x2="9" y1="3" y2="21" />
        <line x1="15" x2="15" y1="3" y2="21" />
      </svg>
    ),
  },
  {
    title: "Customizable Columns",
    description:
      "Define your own column structure with customizable gutters and margins for perfect spacing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
  },
  {
    title: "Snap to Grid",
    description:
      "Align elements perfectly with our intelligent snap-to-grid functionality for pixel-perfect designs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    title: "Export Options",
    description:
      "Export your designs to HTML/CSS, Figma, or other popular design tools with a single click.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    ),
  },
  {
    title: "Component Library",
    description:
      "Access a vast library of pre-designed components that work seamlessly with our grid system.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.5 9.4 7.5 4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" x2="12" y1="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Collaboration Tools",
    description:
      "Work together with your team in real-time with our powerful collaboration features.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

// Benefits list
const benefits = [
  "Consistent spacing and alignment across all designs",
  "Faster design process with grid-based templates",
  "Improved collaboration between designers and developers",
  "Responsive layouts that work on all devices",
  "Reduced design inconsistencies and visual bugs",
];

// Stats data
const stats = [
  {
    value: "10K+",
    label: "Active Users",
  },
  {
    value: "250K+",
    label: "Projects Created",
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
  },
];
