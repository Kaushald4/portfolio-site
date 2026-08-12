import { Moon, Sun } from "lucide-react";

export type DotAction = "close" | "minimize" | "zoom";
export type Theme = "dark" | "light";

const DOTS: { id: DotAction; color: string; glyph: string; label: string }[] = [
  { id: "close", color: "#ff5f57", glyph: "×", label: "close" },
  { id: "minimize", color: "#febc2e", glyph: "−", label: "minimize" },
  { id: "zoom", color: "#28c840", glyph: "+", label: "zoom" },
];

interface TitleBarProps {
  onAction: (action: DotAction) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export function TitleBar({ onAction, theme, onToggleTheme }: TitleBarProps) {
  return (
    <div className="relative flex h-10 shrink-0 items-center border-b border-border px-4">
      <div className="-ml-1.5 flex items-center">
        {DOTS.map((dot) => (
          <button
            key={dot.id}
            type="button"
            aria-label={dot.label}
            onClick={() => onAction(dot.id)}
            className="group flex size-8 shrink-0 items-center justify-center"
          >
            <span className="flex size-3 items-center justify-center rounded-full" style={{ background: dot.color }}>
              <span className="text-[8px] leading-none font-bold text-black/60 opacity-0 group-hover:opacity-100">{dot.glyph}</span>
            </span>
          </button>
        ))}
      </div>
      <p className="pointer-events-none absolute inset-x-0 text-center font-mono text-xs text-ink-faint">kaushal@dev — zsh — 88×24</p>
      <button
        type="button"
        aria-label={theme === "dark" ? "switch to light theme" : "switch to dark theme"}
        onClick={onToggleTheme}
        className="relative -mr-1.5 ml-auto flex size-9 items-center justify-center rounded text-ink-faint transition-colors hover:bg-surface-2 hover:text-ink"
      >
        {theme === "dark" ? <Sun className="size-3.5" aria-hidden /> : <Moon className="size-3.5" aria-hidden />}
      </button>
    </div>
  );
}
