"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/data";

function formatUptime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

/** Real uptime, not decorative — counts from the actual GitHub account creation date. Ticks live, client-only to avoid a server/client render mismatch on the current second. */
export function SysHeader() {
  const [uptime, setUptime] = useState<string | null>(null);

  useEffect(() => {
    const epoch = new Date(PROFILE.bootEpoch).getTime();
    function tick() {
      setUptime(formatUptime(Date.now() - epoch));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="grid grid-cols-1 gap-x-8 gap-y-0.5 border-b border-border pb-3 text-xs text-ink-faint sm:gap-y-1 sm:pb-4 sm:grid-cols-2">
      <div className="space-y-0.5 sm:space-y-1">
        <div>
          whoami&nbsp;&nbsp;: <span className="text-ink-muted">kaushal</span>
        </div>
        <div className="hidden sm:block">
          host&nbsp;&nbsp;&nbsp;&nbsp;: <span className="text-ink-muted">kaushald4.vercel.app</span>
        </div>
        <div>
          shell&nbsp;&nbsp;&nbsp;: <span className="text-ink-muted">zsh</span>
        </div>
      </div>
      <div className="space-y-0.5 sm:space-y-1 sm:text-right">
        <div>
          uptime&nbsp;: <span className="tabular-nums text-ink-muted">{uptime ?? "…"}</span>
        </div>
        <div className="hidden sm:block">
          commits: <span className="text-ink-muted">{PROFILE.githubStats.contributionsThisYear}/yr</span>
        </div>
        <div>
          status&nbsp;: <span className="text-ok">ONLINE</span>
        </div>
      </div>
    </header>
  );
}
