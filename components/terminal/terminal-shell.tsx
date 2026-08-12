"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { closeLine, darkModeLine, exitLine, lightModeLine, minimizeLine, sudoLine, zoomLine } from "./easter-eggs";
import { NAV_ITEMS, resolveCommand, type ViewId } from "./nav-items";
import { NavBar } from "./nav-bar";
import { PhotoOverlay } from "./photo-overlay";
import { SysHeader } from "./sys-header";
import { TitleBar, type DotAction, type Theme } from "./title-bar";
import { AboutView } from "./views/about-view";
import { ContactView } from "./views/contact-view";
import { HomeView } from "./views/home-view";
import { SkillsView } from "./views/skills-view";
import { WorkView } from "./views/work-view";

const VIEWS: Record<ViewId, () => React.ReactElement> = {
  home: HomeView,
  work: WorkView,
  about: AboutView,
  skills: SkillsView,
  contact: ContactView,
};

const HELP_TEXT = "commands: home · work · about · skills · contact";

/**
 * A fake shell, not a real one: view switching + a tiny command parser, all
 * client state. No routing needed — this is the entire page. Left/Right move
 * the keyboard menu focus (independent of the currently open view, so you
 * can browse before committing with Enter); Up/Down scroll the content pane
 * instead, since scrolling now happens inside the terminal, not the page.
 */
export function TerminalShell() {
  const [view, setView] = useState<ViewId>("home");
  const [focusIndex, setFocusIndex] = useState(0);
  const [command, setCommand] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showPhoto, setShowPhoto] = useState(false);
  // Lazy initializer (not an effect) so the very first client render already
  // matches a returning visitor's saved preference — reading localStorage in
  // an effect would mean setState-during-effect, plus a one-frame flash back
  // to dark before the stored theme kicks in.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  const navigate = useCallback((id: ViewId) => {
    const idx = NAV_ITEMS.findIndex((n) => n.id === id);
    setView(id);
    setFocusIndex(idx);
    setFeedback(null);
  }, []);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    setCommand("");
    if (!cmd) {
      navigate(NAV_ITEMS[focusIndex].id);
      return;
    }
    if (cmd === "help") {
      setFeedback(HELP_TEXT);
      return;
    }
    if (cmd === "clear") {
      setFeedback(null);
      return;
    }
    if (cmd === "photo" || cmd === "cat photo.jpg") {
      setShowPhoto(true);
      return;
    }
    if (cmd.startsWith("sudo")) {
      setFeedback(sudoLine());
      return;
    }
    if (cmd === "exit" || cmd === "quit" || cmd === ":q") {
      setFeedback(exitLine());
      return;
    }
    const target = resolveCommand(cmd);
    if (target) {
      navigate(target);
      return;
    }
    setFeedback(`command not found: ${cmd} — type 'help'`);
  }

  function handleDotAction(action: DotAction) {
    if (action === "close") setFeedback(closeLine());
    else if (action === "minimize") setFeedback(minimizeLine());
    else setFeedback(zoomLine());
  }

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      setFeedback(next === "light" ? lightModeLine() : darkModeLine());
      return next;
    });
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // The idle caret blinks from the moment the page loads, implying you can just
    // start typing — true on a real terminal, so the input should actually be
    // focused already. Skipped on touch devices, where autofocus would pop the
    // on-screen keyboard unprompted.
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFocusIndex((i) => (i - 1 + NAV_ITEMS.length) % NAV_ITEMS.length);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setFocusIndex((i) => (i + 1) % NAV_ITEMS.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        mainRef.current?.scrollBy({ top: -96, behavior: "smooth" });
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        mainRef.current?.scrollBy({ top: 96, behavior: "smooth" });
      } else if (e.key === "Enter" && document.activeElement !== inputRef.current) {
        setFocusIndex((i) => {
          navigate(NAV_ITEMS[i].id);
          return i;
        });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  const ActiveView = VIEWS[view];

  return (
    <div className="flex h-dvh items-center justify-center bg-bg p-0 sm:p-5 md:p-8">
      <div className="pt-safe pb-safe flex h-full w-full max-w-6xl flex-col overflow-hidden border-border-strong bg-surface sm:h-[min(880px,100%)] sm:rounded-xl sm:border sm:shadow-2xl sm:shadow-black/60">
        <TitleBar onAction={handleDotAction} theme={theme} onToggleTheme={toggleTheme} />

        <div className="flex min-h-0 flex-1 flex-col px-5 sm:px-8">
          <div className="pt-5 sm:pt-6">
            <SysHeader />
          </div>
          <main ref={mainRef} key={view} className="fade-in scroll-styled min-h-0 flex-1 overflow-y-auto py-8">
            <ActiveView />
          </main>
          <NavBar
            view={view}
            focusIndex={focusIndex}
            command={command}
            feedback={feedback}
            onCommandChange={setCommand}
            onSubmit={() => runCommand(command)}
            onNavClick={navigate}
            inputRef={inputRef}
          />
        </div>
      </div>
      {showPhoto && <PhotoOverlay onClose={() => setShowPhoto(false)} />}
    </div>
  );
}
