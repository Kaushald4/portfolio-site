import { useState, type RefObject } from "react";
import { NAV_ITEMS, type ViewId } from "./nav-items";

interface NavBarProps {
  view: ViewId;
  focusIndex: number;
  command: string;
  feedback: string | null;
  onCommandChange: (value: string) => void;
  onSubmit: () => void;
  onNavClick: (id: ViewId) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

export function NavBar({
  view,
  focusIndex,
  command,
  feedback,
  onCommandChange,
  onSubmit,
  onNavClick,
  inputRef,
}: NavBarProps) {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <footer className="shrink-0 border-t border-border pt-3 pb-5">
      {feedback && (
        <div
          key={feedback}
          className="fade-in mb-3 flex items-center gap-2 rounded-md border bg-accent/4 border-none  px-3 py-2 text-sm text-accent"
        >
          <span className="shrink-0" aria-hidden>
            ▸
          </span>
          <p>{feedback}</p>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex items-center gap-2 text-sm"
      >
        <span className="shrink-0 text-accent">kaushal@dev:~$</span>
        <input
          ref={inputRef}
          value={command}
          onChange={(e) => onCommandChange(e.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholder="type a command…"
          spellCheck={false}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-ink caret-accent placeholder:text-ink-faint focus:outline-none"
        />
        {!inputFocused && (
          <span className="caret hidden text-accent sm:inline" aria-hidden>
            ▌
          </span>
        )}
      </form>

      <p className="mt-3 hidden text-[11px] text-ink-faint sm:block">
        SELECT [ ←→ + Enter, or click ] · SCROLL [ ↑↓ ] · type &lsquo;help&rsquo; for commands
      </p>
      <nav className="mt-2 flex flex-wrap gap-x-1 gap-y-2 text-[11px] sm:text-xs">
        {NAV_ITEMS.map((item, i) => {
          const focused = i === focusIndex;
          const active = item.id === view;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavClick(item.id)}
              className={`shrink-0 rounded px-2 py-2 transition-colors sm:px-2 sm:py-1 ${
                focused ? "bg-accent text-bg" : active ? "text-accent" : "text-ink-faint hover:text-ink-muted"
              }`}
            >
              {focused ? "› " : "  "}
              {String(i + 1).padStart(2, "0")}_{item.label}
            </button>
          );
        })}
      </nav>
    </footer>
  );
}
