import { PROFILE } from "@/lib/data";
import { PromptLine } from "../prompt-line";

const LINKS = [
  { label: "EMAIL", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "GITHUB", value: PROFILE.github.replace("https://", ""), href: PROFILE.github },
  { label: "LINKEDIN", value: PROFILE.linkedin.replace("https://", ""), href: PROFILE.linkedin },
  { label: "X", value: PROFILE.twitter.replace("https://", ""), href: PROFILE.twitter },
];

export function ContactView() {
  return (
    <div>
      <PromptLine command="cat contact.txt" />

      <dl className="space-y-2.5 text-sm">
        {LINKS.map((l) => (
          <div key={l.label} className="flex flex-wrap gap-3">
            <dt className="w-24 shrink-0 text-ink-faint">{l.label}</dt>
            <dd>
              <a href={l.href} target={l.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer noopener" className="text-ink-muted transition-colors hover:text-accent">
                {l.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 text-sm text-ink-faint">
        {PROFILE.availability} · {PROFILE.location} ({PROFILE.timezone}). Always up for talking AI-driven apps, real-time systems, or a gnarly system-design
        problem.
      </p>

      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-6 inline-flex items-center gap-2 rounded border border-border-strong px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
      >
        <span className="text-accent">$</span> open mailto:{PROFILE.email}
      </a>
    </div>
  );
}
