import { FOCUS_AREAS, PROFILE, SUPERPOWERS } from "@/lib/data";
import { PromptLine } from "../prompt-line";

export function AboutView() {
  return (
    <div>
      <PromptLine command="cat about.md" />

      <div className="max-w-xl space-y-4 text-sm leading-relaxed text-ink-muted">
        <p>{PROFILE.bio}</p>
        <p className="text-ink-faint">
          Full-stack by trade, but the itch is always the same one: not stopping at &ldquo;it works,&rdquo; wanting to
          know why. That&rsquo;s taken me from rebuilding legacy monoliths into microservices, to real-time systems that
          have to react instead of just respond, to shipping the same product across web, mobile, and desktop from one
          shared architecture.
        </p>
      </div>

      <p className="mt-8 mb-3 text-xs text-ink-faint">{"// superpowers"}</p>
      <ul className="space-y-3">
        {SUPERPOWERS.map((s) => (
          <li key={s.title} className="text-sm">
            <span className="text-ink">{s.title}</span>
            <span className="text-ink-faint"> - {s.description}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 mb-3 text-xs text-ink-faint">{"// focus"}</p>
      <div className="flex flex-wrap gap-1.5">
        {FOCUS_AREAS.map((f) => (
          <span key={f} className="rounded border border-border px-2 py-0.5 text-xs text-ink-muted">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
