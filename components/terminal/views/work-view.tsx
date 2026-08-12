"use client";

import { useState } from "react";
import { CASE_STUDY, PROJECTS } from "@/lib/data";
import { PromptLine } from "../prompt-line";

function ProjectRow({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="border-b border-border py-3 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
        <span className="text-ink">
          {project.name}
          {project.featured && <span className="ml-2 text-[10px] text-accent">★ flagship</span>}
        </span>
        <span className="text-xs text-ink-faint">
          {project.lang} · {project.modified}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-faint">{project.description}</p>
      <div className="-my-1 mt-1 flex flex-wrap gap-x-4 text-xs">
        <a href={project.href} target="_blank" rel="noreferrer noopener" className="inline-block py-2 text-ink-muted transition-colors hover:text-accent sm:py-1">
          [code]
        </a>
        {project.liveHref && (
          <a href={project.liveHref} target="_blank" rel="noreferrer noopener" className="inline-block py-2 text-ink-muted transition-colors hover:text-accent sm:py-1">
            [live]
          </a>
        )}
        {project.extraHref && (
          <a
            href={project.extraHref.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block py-2 text-ink-muted transition-colors hover:text-accent sm:py-1"
          >
            [{project.extraHref.label.toLowerCase()}]
          </a>
        )}
      </div>
    </div>
  );
}

/** Rendered as a restricted file entry rather than a normal project card — the private case-study deserves to feel different from the public repos around it, not just badged "private" on an identical card. */
function RestrictedRow() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-3">
      <button type="button" onClick={() => setOpen((o) => !o)} className="w-full text-left">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <span className="text-ink-muted">
            agent_runtime<span className="text-ink-faint">.priv</span>
          </span>
          <span className="text-xs text-ink-faint">-rwx------</span>
        </div>
        <p className="mt-1.5 text-sm text-ink-faint">{open ? "cat: showing restricted contents…" : "permission denied — click to request access"}</p>
      </button>

      {open && (
        <div className="fade-in mt-3 space-y-3 border-l border-border pl-4">
          <p className="text-sm leading-relaxed text-ink-faint">{CASE_STUDY.description}</p>
          <ul className="space-y-1.5">
            {CASE_STUDY.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-ink-faint">
                <span className="text-accent">›</span>
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {CASE_STUDY.stack.map((s) => (
              <span key={s} className="rounded border border-border px-1.5 py-0.5 text-[11px] text-ink-faint">
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs text-ink-faint">{CASE_STUDY.status}</p>
        </div>
      )}
    </div>
  );
}

export function WorkView() {
  return (
    <div>
      <PromptLine command="ls -la ~/projects" />
      <p className="mb-4 text-xs text-ink-faint">{PROJECTS.length + 1} entries — click a row to expand</p>
      <div>
        {PROJECTS.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
        <RestrictedRow />
      </div>
    </div>
  );
}
