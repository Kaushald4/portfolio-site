import { SKILLS } from "@/lib/data";
import { PromptLine } from "../prompt-line";

export function SkillsView() {
  return (
    <div>
      <PromptLine command="cat skills.txt" />
      <div className="space-y-6">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-xs text-ink-faint">{`// ${group.category.toLowerCase()}`}</p>
            <p className="text-sm leading-relaxed text-ink-muted">
              {group.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < group.items.length - 1 && <span className="text-ink-faint"> · </span>}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
