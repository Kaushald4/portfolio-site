export function PromptLine({ command }: { command: string }) {
  return (
    <p className="mb-4 text-sm text-ink-faint">
      <span className="text-accent">$</span> {command}
    </p>
  );
}
