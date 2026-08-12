import { PROFILE } from "@/lib/data";
import { PromptLine } from "../prompt-line";

const BOOT_LOG = [
  { label: "Loading profile", value: "kaushal.dev" },
  { label: "Mounting /projects", value: "5 entries" },
  { label: "Establishing uplink", value: "github.com/Kaushald4" },
  { label: "System ready", value: "" },
];

export function HomeView() {
  return (
    <div className="space-y-8">
      <div className="space-y-1.5 font-mono text-xs text-ink-faint">
        {BOOT_LOG.map((line) => (
          <div key={line.label} className="flex items-baseline gap-2">
            <span className="shrink-0 text-ok">[ OK ]</span>
            <span className="shrink-0">{line.label}</span>
            {line.value && (
              <>
                <span className="mb-0.5 h-0 flex-1 border-b border-dotted border-ink-faint/40" aria-hidden />
                <span className="shrink-0">{line.value}</span>
              </>
            )}
          </div>
        ))}
      </div>

      <div>
        <PromptLine command="whoami" />
        <h1 className="text-2xl font-semibold text-ink sm:text-3xl">{PROFILE.name}</h1>
        <p className="mt-2 text-ink-muted">{PROFILE.headline}.</p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-faint">{PROFILE.bio}</p>
      </div>

      <div>
        <PromptLine command="cat status.txt" />
        <dl className="space-y-1.5 text-sm">
          {[
            ["LOCATION", `${PROFILE.location} (${PROFILE.timezone})`],
            ["AVAILABLE", PROFILE.availability],
            ["FOCUS", "AI Engineering, Full-Stack, System Design"],
            ["CONTACT", PROFILE.email],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3">
              <dt className="w-24 shrink-0 text-ink-faint">{k}</dt>
              <dd className="text-ink-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="inline-flex items-center gap-2 rounded border-b border-border px-3 py-1.5 text-xs text-ink-muted">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-ok" />
        </span>
        {PROFILE.githubStats.repos} repos · {PROFILE.githubStats.contributionsThisYear} contributions/yr · open to work
      </div>
    </div>
  );
}
