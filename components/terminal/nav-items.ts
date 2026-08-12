export type ViewId = "home" | "work" | "about" | "skills" | "contact";

export const NAV_ITEMS: { id: ViewId; label: string; command: string }[] = [
  { id: "home", label: "HOME", command: "home" },
  { id: "work", label: "WORK", command: "ls ~/projects" },
  { id: "about", label: "ABOUT", command: "cat about.md" },
  { id: "skills", label: "SKILLS", command: "cat skills.txt" },
  { id: "contact", label: "CONTACT", command: "cat contact.txt" },
];

const ALIASES: Record<string, ViewId> = {
  home: "home",
  start: "home",
  index: "home",
  work: "work",
  projects: "work",
  ls: "work",
  about: "about",
  whoami: "about",
  bio: "about",
  skills: "skills",
  stack: "skills",
  tools: "skills",
  contact: "contact",
  mail: "contact",
  hi: "contact",
  hello: "contact",
};

export function resolveCommand(raw: string): ViewId | null {
  return ALIASES[raw] ?? null;
}
