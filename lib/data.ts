export const PROFILE = {
  name: "Kaushal Mehta",
  headline: "Senior Full Stack Engineer specializing in scalable JS/TS systems and AI-powered applications",
  location: "Bengaluru, India",
  timezone: "IST",
  availability: "Open to Remote, Hybrid, On-site, or Relocation",
  email: "kaushalkumar304@gmail.com",
  github: "https://github.com/Kaushald4",
  linkedin: "https://www.linkedin.com/in/kaushal10-",
  twitter: "https://x.com/k_kaushal_",
  bio: "Full-stack engineer who thrives at the intersection of curiosity and code - from building user-friendly interfaces down to the server internals and system design underneath them. Lately most of that curiosity has gone into AI: agent architectures, RAG pipelines, and systems that reason over data rather than just serve it.",
  githubStats: {
    repos: 126,
    followers: 38,
    contributionsThisYear: 364,
  },
  /** GitHub account creation date - used as the "uptime" epoch for the terminal HUD's live counter. Real, not decorative. */
  bootEpoch: "2017-04-08T04:38:56Z",
};

export const FOCUS_AREAS = [
  "AI Engineering",
  "RAG Architectures",
  "Agent Workflows",
  "System Design",
  "Backend Engineering",
  "Microservices",
  "Distributed Systems",
  "Event-Driven Architecture",
];

export const SUPERPOWERS = [
  {
    title: "Curiosity that doesn't stop at “it works”",
    description: "Deep interest in how technology works under the hood - from CPU pipelines to distributed consensus.",
  },
  {
    title: "Monolith -> microservices migrations",
    description: "Experience taking legacy monoliths apart and re-architecting them into scalable service boundaries.",
  },
  {
    title: "Real-time systems",
    description: "WebSockets, Kafka, and Redis pub/sub for systems that need to react, not just respond.",
  },
  {
    title: "Cross-platform delivery",
    description:
      "Shipping web, mobile, and desktop apps from a shared architecture rather than three separate codebases.",
  },
];

export const CASE_STUDY = {
  name: "Self-Healing Agent Runtime + Private Research Platform",
  tagline: "An agent that fixes itself, and an AI that reads the internet for me",
  status: "Private codebase - architecture available on request",
  description:
    "Built an autonomous agent framework from scratch: browser sessions become replayable scripts that detect and repair themselves when the page underneath them changes, wrapped in a capability-scoped plugin system and exposed so other AI agents can call it directly. On top of that runtime sits a private research platform - a scheduler quietly reads across the web around the clock, an LLM pipeline extracts entities and tracks what's trending across everything it collects, and a set of generators turn raw signal into daily digests, research briefs. Every write the system makes is logged and replayable. Most of the internals stay private - happy to walk through the architecture in person.",
  highlights: [
    "Self-healing automation - scripts survive real-world change instead of breaking on the next run",
    "Agent-callable by design - the runtime exposes itself as tools for other AI agents to use",
    "Continuous ingestion + LLM entity and trend extraction across a live, growing knowledge graph",
    "Every write action fully audited and replayable, end to end",
  ],
  stack: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "LLM APIs"],
};

export interface Project {
  name: string;
  description: string;
  stack: string[];
  lang: string;
  modified: string;
  href: string;
  liveHref?: string;
  extraHref?: { label: string; href: string };
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "riscv64-emulator",
    description:
      "A 64-bit RISC-V emulator written from scratch in Rust, targeting RV64IMACFD, compiled to WebAssembly to run entirely in-browser - with the eventual goal of booting a real Linux distribution.",
    stack: ["Rust", "WebAssembly", "Systems"],
    lang: "Rust",
    modified: "2026-07",
    href: "https://github.com/Kaushald4/riscv64-emulator",
    featured: true,
  },
  {
    name: "pulse",
    description:
      "A desktop intelligence desk for keeping up with a field: it tracks repositories, papers, products and discussions across your sources, ranks what actually matters, and writes a daily briefing - with the items each brief was written from attached to it, collapsible at the foot of the brief.",
    stack: ["Tauri v2", "Next.js", "React", "TypeScript", "Rust", "SQLite"],
    lang: "TypeScript",
    modified: "2026-09",
    href: "https://github.com/Kaushald4/Pulse",
  },
  {
    name: "repost/",
    description:
      "A Reddit-inspired social platform: a Next.js 15 client with real-time interactions and community-driven content, backed by a scalable, microservices-based NestJS backend.",
    stack: ["Next.js 15", "NestJS", "Microservices", "TypeScript"],
    lang: "TypeScript",
    modified: "2025-12",
    href: "https://github.com/Kaushald4/repost_client",
    extraHref: { label: "Backend repo", href: "https://github.com/Kaushald4/repost_server" },
  },
  {
    name: "baggedFlix-desktop",
    description:
      "A cross-platform desktop streaming app built with Tauri v2 and React - browse, watch, and manage movies and shows with watchlists, watch history, and a native-feeling shell.",
    stack: ["Tauri v2", "React", "TypeScript"],
    lang: "TypeScript",
    modified: "2026-07",
    href: "https://github.com/Kaushald4/baggedFlix-desktop",
  },
  {
    name: "myflix",
    description:
      "The web counterpart - a Next.js streaming web app with watchlists, watch history, and downloads, focused on a clean, user-friendly browsing experience.",
    stack: ["Next.js", "TypeScript"],
    lang: "TypeScript",
    modified: "2026-01",
    href: "https://github.com/Kaushald4/myflix",
  },
  {
    name: "codeme",
    description: "A collaborative coding platform, live in production.",
    stack: ["TypeScript"],
    lang: "TypeScript",
    modified: "2025-08",
    href: "https://github.com/Kaushald4/codeme",
    liveHref: "https://codeme.xres.in/",
  },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "Go", "Rust", "Swift"] },
  { category: "Frontend", items: ["React", "Next.js", "React Native", "Angular", "Tailwind CSS", "HTML5 / CSS3"] },
  { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "Django", "Flask"] },
  { category: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"] },
  { category: "Infra & Cloud", items: ["Docker", "AWS", "Azure", "Kafka", "WebSockets"] },
  { category: "Tooling", items: ["Git", "Figma", "Postman", "Webpack", "Vite"] },
];
