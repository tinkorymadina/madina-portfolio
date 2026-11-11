"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  Smartphone,
  Layout,
  BarChart3,
  Calendar,
  Terminal,
  Wrench,
  GraduationCap,
  Users,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Send,
  MessageCircle,
} from "lucide-react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Github({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Linkedin({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface Project {
  title: string;
  badge: string;
  theme: "lavender" | "sage" | "butter" | "blush";
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  codeUrl: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Warranty Vault & Receipt Auditor",
    badge: "Mobile & AI Utility",
    theme: "lavender",
    description:
      "A mobile-first offline utility transforming physical receipts into structured warranty records and automated return claim drafts.",
    highlights: [
      "Multimodal receipt audit (Google Gemini 3.8 Flash)",
      "Local-first SQLite persistence",
      "Dynamic deadline status badges",
      "Automated return claim drafter",
    ],
    stack: [
      "React Native",
      "Expo (SDK 54)",
      "NativeWind v5",
      "Google Gemini API",
      "SQLite",
    ],
    codeUrl: "https://github.com/madinatinkory/warranty-vault-auditor",
    icon: <Smartphone className="h-5 w-5 text-[#4C51BF]" />,
  },
  {
    title: "Taskflow Pro",
    badge: "Web Application",
    theme: "sage",
    description:
      "A daily task management and productivity planner designed with glassmorphism UI, real-time progress tracking, and chronological time scheduling.",
    highlights: [
      "Dynamic task completion visualizer",
      "Subtasks and checklists",
      "Chronological time slots",
      "Persistent browser storage",
    ],
    stack: [
      "JavaScript (ES6+)",
      "HTML5",
      "Modern CSS3",
      "LocalStorage API",
    ],
    liveUrl: "https://madinatinkory.github.io/taskflow-pro/",
    codeUrl: "https://github.com/madinatinkory/taskflow-pro",
    icon: <Layout className="h-5 w-5 text-[#2E6B4D]" />,
  },
  {
    title: "Word Counter & Text Analytics",
    badge: "Analytics Tool",
    theme: "butter",
    description:
      "A high-performance text analysis tool featuring live statistical breakdown, token frequency sorting, and automated stop-word filtering.",
    highlights: [
      "Real-time word, character, and sentence tracking",
      "200 WPM reading pace estimator",
      "Top 5 word frequency analysis with punctuation stripping",
    ],
    stack: ["Vanilla JavaScript", "Semantic HTML5", "CSS Grid / Flexbox"],
    liveUrl: "https://wordcounter-sand.vercel.app/",
    codeUrl: "https://github.com/madinatinkory",
    icon: <BarChart3 className="h-5 w-5 text-[#9A6A12]" />,
  },
  {
    title: "Precision Age Calculator",
    badge: "Interactive Tool",
    theme: "blush",
    description:
      "An intuitive date analytics tool computing exact age breakdowns down to years, months, and days with real-time calendar validation.",
    highlights: [
      "Strict calendar edge-case validation (leap years, invalid month dates)",
      "Animated counter transitions",
      "Theme preference persistence",
    ],
    stack: [
      "HTML5",
      "CSS3 Variables",
      "JavaScript DOM API",
      "LocalStorage",
    ],
    liveUrl: "https://madinatinkory.github.io/Age-Calculator/",
    codeUrl: "https://github.com/madinatinkory/Age-Calculator",
    icon: <Calendar className="h-5 w-5 text-[#A84242]" />,
  },
];

const themeStyles = {
  lavender: {
    cardBg: "bg-[#F4F5FD]",
    cardBorder: "border-[#E0E3FA]",
    badgeBg: "bg-[#ECEFFE]",
    badgeText: "text-[#4C51BF]",
    badgeBorder: "border-[#4C51BF]/20",
    iconWrapper: "bg-white/90 border-[#E0E3FA]",
    accentHover: "hover:border-[#4C51BF]/35",
    bulletColor: "text-[#4C51BF]",
    dividerBorder: "border-[#E0E3FA]",
  },
  sage: {
    cardBg: "bg-[#F1F7F2]",
    cardBorder: "border-[#DCECE0]",
    badgeBg: "bg-[#E8F3EA]",
    badgeText: "text-[#2E6B4D]",
    badgeBorder: "border-[#2E6B4D]/20",
    iconWrapper: "bg-white/90 border-[#DCECE0]",
    accentHover: "hover:border-[#2E6B4D]/35",
    bulletColor: "text-[#2E6B4D]",
    dividerBorder: "border-[#DCECE0]",
  },
  butter: {
    cardBg: "bg-[#FDF9EE]",
    cardBorder: "border-[#F7ECD0]",
    badgeBg: "bg-[#FEF7E6]",
    badgeText: "text-[#9A6A12]",
    badgeBorder: "border-[#9A6A12]/20",
    iconWrapper: "bg-white/90 border-[#F7ECD0]",
    accentHover: "hover:border-[#9A6A12]/35",
    bulletColor: "text-[#9A6A12]",
    dividerBorder: "border-[#F7ECD0]",
  },
  blush: {
    cardBg: "bg-[#FDF3F3]",
    cardBorder: "border-[#F9E2E2]",
    badgeBg: "bg-[#FCEFEF]",
    badgeText: "text-[#A84242]",
    badgeBorder: "border-[#A84242]/20",
    iconWrapper: "bg-white/90 border-[#F9E2E2]",
    accentHover: "hover:border-[#A84242]/35",
    bulletColor: "text-[#A84242]",
    dividerBorder: "border-[#F9E2E2]",
  },
};

const skillCategories = [
  {
    title: "Frontend & Mobile",
    subtitle: "Interfaces, design systems & cross-platform apps",
    theme: "lavender" as const,
    icon: <Layers className="h-5 w-5 text-[#4C51BF]" />,
    skills: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "NativeWind",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Core Scripting & Systems",
    subtitle: "Runtime logic, local persistence & data pipelines",
    theme: "sage" as const,
    icon: <Terminal className="h-5 w-5 text-[#2E6B4D]" />,
    skills: [
      "Modern JavaScript (ES6+)",
      "Node.js",
      "SQLite",
      "REST APIs",
    ],
  },
  {
    title: "Dev Tools & AI Integration",
    subtitle: "Version control, cloud deployment & multimodal AI",
    theme: "butter" as const,
    icon: <Wrench className="h-5 w-5 text-[#9A6A12]" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Gemini API",
      "Vercel",
      "Expo Go",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 overflow-x-hidden">
      {/* Ambient Floating Pastel Blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rose-100/40 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-24 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl animate-pulse duration-1000" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-stone-200/60 transition-all">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Monogram & Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-stone-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-stone-200/80 shadow-xs font-mono text-sm font-bold text-stone-900 group-hover:border-[#2E6B4D]/40 group-hover:bg-[#E8F3EA]/50 transition-colors">
              MT
            </span>
            <span className="hidden sm:inline-block font-semibold text-stone-800 group-hover:text-stone-950 transition-colors">
              Madina Tinkory
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a
              href="#about"
              className="hover:text-stone-900 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-stone-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-stone-900 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-stone-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F3EA] px-3.5 py-1.5 text-xs font-semibold text-[#2E6B4D] border border-[#2E6B4D]/15 shadow-[0_0_15px_rgba(46,107,77,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available for Projects</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
          {/* Subtle decorative pastel blurs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
          >
            <div className="h-64 w-[38rem] rounded-full bg-gradient-to-tr from-[#ECEFFE] via-[#E8F3EA] to-[#FEF7E6] opacity-70" />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Side: Headline, Bio, Pills & Action Buttons */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                {/* Cascade Item 1: Greeting & Prominent Hero Name & Headline */}
                <Reveal delay={0}>
                  <p className="text-base sm:text-lg font-medium text-stone-600 mb-1 flex items-center gap-2">
                    <span>Hello, I&apos;m</span>
                    <span
                      role="img"
                      aria-label="Waving hand"
                      className="animate-wave hover:rotate-12 transition-transform duration-300 inline-block cursor-pointer select-none"
                    >
                      👋
                    </span>
                  </p>
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.08]">
                    Madina Tinkory
                  </h1>

                  {/* Headline / One-liner with Red Accent on "test" */}
                  <p className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
                    I architect, code,{" "}
                    <span className="text-rose-600 underline decoration-rose-300/80 decoration-2 underline-offset-4">
                      test
                    </span>
                    , and deploy.
                  </p>
                </Reveal>

                {/* Cascade Item 2: Subtitle Bio */}
                <Reveal delay={150}>
                  <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl max-w-2xl">
                    Software Engineering student at the University of Mauritius
                    building intuitive mobile utilities, modern web applications,
                    and AI-assisted workflows.
                  </p>
                </Reveal>

                {/* Cascade Item 3: Role & Location Pills */}
                <Reveal delay={300}>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#ECEFFE] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#4C51BF] border border-[#E0E3FA] shadow-2xs hover:scale-105 transition-transform duration-200">
                      <Sparkles className="h-4 w-4 text-[#4C51BF]" />
                      Software Engineering Student &amp; Full-Stack Developer
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FDF3F3] px-3.5 py-1.5 text-xs font-semibold text-[#A84242] border border-[#F9E2E2] hover:scale-105 transition-transform duration-200">
                      <MapPin className="h-3.5 w-3.5 text-[#A84242]" />
                      Mauritius
                    </span>
                  </div>
                </Reveal>

                {/* Cascade Item 4: Action Buttons & Social Icons */}
                <Reveal delay={450}>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-[#FAF8F5] shadow-sm hover:bg-stone-800 hover:shadow-md active:scale-[0.98] transition-all duration-150"
                    >
                      <span>Explore Projects</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#F4F5FD] px-6 py-3.5 text-sm font-semibold text-[#4C51BF] border border-[#E0E3FA] shadow-xs hover:bg-[#ECEFFE] hover:border-[#4C51BF]/30 active:scale-[0.98] transition-all duration-150"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Get In Touch</span>
                    </a>

                    <div className="h-6 w-px bg-stone-200/80 hidden sm:block mx-1" />

                    {/* Social Icons */}
                    <div className="flex items-center gap-2.5">
                      <a
                        href="https://github.com/madinatinkory"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-stone-700 border border-stone-200/70 shadow-xs hover:bg-[#ECEFFE]/60 hover:text-[#4C51BF] hover:border-[#4C51BF]/30 hover:shadow-sm active:scale-[0.98] transition-all duration-150"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/madinatinkory"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-stone-700 border border-stone-200/70 shadow-xs hover:bg-[#E8F3EA]/70 hover:text-[#2E6B4D] hover:border-[#2E6B4D]/30 hover:shadow-sm active:scale-[0.98] transition-all duration-150"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Side: Circular Pastel Portrait */}
              <div className="lg:col-span-5 order-first lg:order-last flex justify-center">
                <Reveal delay={200}>
                  <div className="group relative p-2.5 rounded-full bg-gradient-to-tr from-[#F1F7F2] via-[#F4F5FD] to-[#FDF3F3] border-2 border-stone-200/60 shadow-lg shadow-stone-200/50 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out">
                    <div className="relative rounded-full overflow-hidden w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 aspect-square">
                      <Image
                        src="/profile.jpg"
                        alt="Madina Tinkory"
                        width={320}
                        height={320}
                        priority
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Staggered Workflow Cards (Cards 1 through 4) */}
            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={100} className="h-full">
                <div className="h-full rounded-2xl bg-[#F4F5FD] p-6 border border-[#E0E3FA] shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md">
                  <span className="inline-block rounded-lg bg-[#ECEFFE] px-3 py-1 text-xs font-semibold text-[#4C51BF] border border-[#4C51BF]/15 hover:scale-105 transition-transform duration-200">
                    Architecture
                  </span>
                  <p className="mt-3.5 text-base font-bold text-stone-900">
                    System Design
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    Clean state management &amp; offline-first data schemas
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200} className="h-full">
                <div className="h-full rounded-2xl bg-[#F1F7F2] p-6 border border-[#DCECE0] shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md">
                  <span className="inline-block rounded-lg bg-[#E8F3EA] px-3 py-1 text-xs font-semibold text-[#2E6B4D] border border-[#2E6B4D]/15 hover:scale-105 transition-transform duration-200">
                    Full-Stack Code
                  </span>
                  <p className="mt-3.5 text-base font-bold text-stone-900">
                    Modern Engineering
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    TypeScript, React, React Native &amp; modular ES6+
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300} className="h-full">
                <div className="h-full rounded-2xl bg-[#FDF9EE] p-6 border border-[#F7ECD0] shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md">
                  <span className="inline-block rounded-lg bg-[#FEF7E6] px-3 py-1 text-xs font-semibold text-[#9A6A12] border border-[#9A6A12]/15 hover:scale-105 transition-transform duration-200">
                    Rigorous Testing
                  </span>
                  <p className="mt-3.5 text-base font-bold text-stone-900">
                    Quality Assurance
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    Strict edge-case validation &amp; resilient user flows
                  </p>
                </div>
              </Reveal>

              <Reveal delay={400} className="h-full">
                <div className="h-full rounded-2xl bg-[#FDF3F3] p-6 border border-[#F9E2E2] shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md">
                  <span className="inline-block rounded-lg bg-[#FCEFEF] px-3 py-1 text-xs font-semibold text-[#A84242] border border-[#A84242]/15 hover:scale-105 transition-transform duration-200">
                    Deployment
                  </span>
                  <p className="mt-3.5 text-base font-bold text-stone-900">
                    Production Delivery
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    Optimized builds shipped on Vercel, Expo &amp; Pages
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Featured Projects (Curated 4-Card Grid) */}
        <section id="projects" className="py-16 md:py-24 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            {/* Stacked Left-Aligned Section Header */}
            <Reveal delay={0}>
              <div className="flex flex-col gap-2 max-w-2xl text-left mb-12">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECEFFE] px-3.5 py-1 text-xs font-semibold text-[#4C51BF] border border-[#4C51BF]/15">
                    <Code2 className="h-3.5 w-3.5" />
                    Selected Work
                  </span>
                </div>
                <h2 className="mt-1 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  A curated collection of mobile utilities, AI-powered workflows,
                  and interactive web applications engineered from concept to
                  deployment.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project, index) => {
                const style = themeStyles[project.theme];
                return (
                  <Reveal key={project.title} delay={index * 120} className="h-full">
                    <article
                      className={`group flex flex-col justify-between rounded-3xl ${style.cardBg} p-7 border ${style.cardBorder} shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md h-full ${style.accentHover}`}
                    >
                      <div>
                        {/* Top row: Icon + Pastel Category Badge */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-2xs ${style.iconWrapper}`}
                          >
                            {project.icon}
                          </div>
                          <span
                            className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold border ${style.badgeBg} ${style.badgeText} ${style.badgeBorder} hover:scale-105 transition-transform duration-200`}
                          >
                            {project.badge}
                          </span>
                        </div>

                        {/* Project Title & Description */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-950">
                            {project.title}
                          </h3>
                          <ArrowUpRight
                            className={`h-5 w-5 shrink-0 mt-1 ${style.bulletColor} opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200`}
                          />
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                          {project.description}
                        </p>

                        {/* Key Highlights Box */}
                        <div className="mt-5 bg-white/70 backdrop-blur-sm border border-stone-200/40 rounded-xl p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
                            Key Highlights
                          </p>
                          <ul className="space-y-2">
                            {project.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs sm:text-sm text-stone-700"
                              >
                                <CheckCircle2
                                  className={`h-4 w-4 shrink-0 mt-0.5 ${style.bulletColor}`}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`mt-6 pt-5 border-t ${style.dividerBorder}`}>
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-stone-800 border border-stone-200/70 shadow-2xs hover:scale-105 hover:-rotate-1 even:hover:rotate-1 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Direct Link Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-xl bg-stone-900 px-4 py-2 text-xs font-semibold text-[#FAF8F5] shadow-xs hover:bg-stone-800 active:scale-[0.98] transition-all duration-150"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                            </a>
                          )}
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-stone-800 border border-stone-200/90 shadow-2xs hover:bg-stone-50 active:scale-[0.98] transition-all duration-150"
                          >
                            <Github className="h-3.5 w-3.5" />
                            <span>View Code</span>
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Technical Skills (Categorized Pastel Cards) */}
        <section id="skills" className="py-16 md:py-24 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal delay={0}>
              <div className="flex flex-col gap-2 max-w-2xl text-left mb-12">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F3EA] px-3.5 py-1 text-xs font-semibold text-[#2E6B4D] border border-[#2E6B4D]/15">
                    <Terminal className="h-3.5 w-3.5" />
                    Technical Toolkit
                  </span>
                </div>
                <h2 className="mt-1 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                  Skills &amp; Technologies
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Tools and frameworks I use to design, build, test, and ship
                  reliable software across web and mobile platforms.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {skillCategories.map((category, index) => {
                const style = themeStyles[category.theme];
                return (
                  <Reveal key={category.title} delay={index * 150} className="h-full">
                    <div
                      className={`flex flex-col justify-between rounded-3xl ${style.cardBg} p-7 border ${style.cardBorder} shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md h-full ${style.accentHover}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-2xs ${style.iconWrapper}`}
                          >
                            {category.icon}
                          </div>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold border ${style.badgeBg} ${style.badgeText} ${style.badgeBorder} hover:scale-105 transition-transform duration-200`}
                          >
                            {category.skills.length} Skills
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-stone-900">
                          {category.title}
                        </h3>
                        <p className="mt-1 text-xs text-stone-600">
                          {category.subtitle}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center rounded-xl bg-white border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-800 shadow-xs hover:scale-105 hover:-rotate-1 even:hover:rotate-1 transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. About & Background */}
        <section id="about" className="py-16 md:py-24 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal delay={0}>
              <div className="flex flex-col gap-2 max-w-2xl text-left mb-12">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF7E6] px-3.5 py-1 text-xs font-semibold text-[#9A6A12] border border-[#9A6A12]/15">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Background &amp; Journey
                  </span>
                </div>
                <h2 className="mt-1 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                  About &amp; Leadership
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Combining academic rigor in software engineering with hands-on
                  industry internship experience and campus developer leadership.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Column 1: Education & Internship (Soft Pastel Sage Green) */}
              <Reveal delay={0} className="h-full">
                <div className="rounded-3xl bg-[#F1F7F2] p-8 border border-[#DCECE0] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md h-full">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 border border-[#DCECE0] shadow-2xs">
                      <GraduationCap className="h-6 w-6 text-[#2E6B4D]" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-[#E8F3EA] px-3 py-0.5 text-xs font-semibold text-[#2E6B4D] border border-[#2E6B4D]/15 hover:scale-105 transition-transform duration-200">
                        Academic &amp; Industry
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-stone-900">
                        Education &amp; Internship
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-stone-700">
                    Pursuing a{" "}
                    <span className="font-semibold text-stone-900">
                      BSc (Hons) Software Engineering
                    </span>{" "}
                    at the{" "}
                    <span className="font-semibold text-stone-900">
                      University of Mauritius
                    </span>
                    , paired with hands-on software development internship
                    experience building production-focused applications.
                  </p>

                  <div className="mt-6 space-y-3 rounded-2xl bg-white/70 backdrop-blur-sm p-4 border border-stone-200/40">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="h-4 w-4 text-[#2E6B4D] shrink-0 mt-0.5" />
                      <span>
                        BSc (Hons) Software Engineering — University of Mauritius
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="h-4 w-4 text-[#2E6B4D] shrink-0 mt-0.5" />
                      <span>
                        Software development internship experience delivering
                        clean, maintainable, production-ready features
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Column 2: Community & Leadership (Soft Pastel Blush/Rose) */}
              <Reveal delay={150} className="h-full">
                <div className="rounded-3xl bg-[#FDF3F3] p-8 border border-[#F9E2E2] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md h-full">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 border border-[#F9E2E2] shadow-2xs">
                      <Users className="h-6 w-6 text-[#A84242]" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-[#FCEFEF] px-3 py-0.5 text-xs font-semibold text-[#A84242] border border-[#A84242]/15 hover:scale-105 transition-transform duration-200">
                        Campus Ecosystem
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-stone-900">
                        Community &amp; Leadership
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-stone-700">
                    Active student leader across{" "}
                    <span className="font-semibold text-stone-900">
                      Google Developer Groups (GDG) on Campus
                    </span>{" "}
                    (Organising &amp; Graphics teams) and the{" "}
                    <span className="font-semibold text-stone-900">
                      FOICDT society
                    </span>
                    , collaborating on technical workshops, developer events, and
                    visual community branding.
                  </p>

                  <div className="mt-6 space-y-3 rounded-2xl bg-white/70 backdrop-blur-sm p-4 border border-stone-200/40">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="h-4 w-4 text-[#A84242] shrink-0 mt-0.5" />
                      <span>
                        Google Developer Groups (GDG) on Campus — Organising &amp;
                        Graphics Teams
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="h-4 w-4 text-[#A84242] shrink-0 mt-0.5" />
                      <span>
                        FOICDT Society — Student community engagement &amp; event
                        coordination
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6. Contact Call-Out Section */}
        <section id="contact" className="py-16 md:py-24 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal delay={0}>
              <div className="relative overflow-hidden rounded-3xl bg-[#F6F5FC] border border-[#E4E2F5] p-8 sm:p-12 md:p-16 shadow-sm text-center">
                <div className="mx-auto max-w-2xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#4C51BF] border border-[#E0E3FA] shadow-2xs">
                    <Send className="h-3.5 w-3.5" />
                    Open for Opportunities &amp; Collaborations
                  </span>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                    Let&apos;s build something great together.
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
                    Whether you have a full-stack project in mind, a mobile
                    utility to prototype, or an internship / graduate engineering
                    opportunity, I&apos;d love to hear from you.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:tinkorymadina@gmail.com"
                      className="inline-flex items-center gap-2.5 rounded-2xl bg-stone-900 px-6 py-4 text-sm font-semibold text-[#FAF8F5] shadow-sm hover:bg-stone-800 hover:shadow-md active:scale-[0.98] transition-all duration-150"
                    >
                      <Mail className="h-4 w-4" />
                      <span>tinkorymadina@gmail.com</span>
                    </a>

                    <a
                      href="https://wa.me/23058264847"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-2xl bg-[#E8F3EA] px-6 py-4 text-sm font-semibold text-[#2E6B4D] border border-[#DCECE0] shadow-xs hover:bg-[#dcece0] hover:shadow-sm active:scale-[0.98] transition-all duration-150"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/madinatinkory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-stone-800 border border-[#E0E3FA] shadow-xs hover:bg-[#ECEFFE]/60 hover:text-[#4C51BF] active:scale-[0.98] transition-all duration-150"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200/70 bg-[#FDFBF7] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-stone-200/80 font-mono text-xs font-bold text-stone-900">
              MT
            </span>
            <p className="text-sm text-stone-600">
              &copy; 2026 Madina Tinkory. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-stone-600">
            <a
              href="https://github.com/madinatinkory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/madinatinkory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/23058264847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#2E6B4D] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:tinkorymadina@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
