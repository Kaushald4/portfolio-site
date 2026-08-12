"use client";

import Image from "next/image";
import { useEffect } from "react";

export function PhotoOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-6 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-xs" onClick={(e) => e.stopPropagation()}>
        <p className="mb-2 text-xs text-ink-faint">$ cat photo.jpg</p>
        <div className="overflow-hidden rounded border border-border-strong">
          <Image src="/kaushal.jpg" alt="Kaushal Mehta" width={640} height={638} className="w-full object-cover grayscale-[10%]" />
        </div>
        <p className="mt-2 text-[11px] text-ink-faint">kaushal.jpg — press Esc or click anywhere to close</p>
      </div>
    </div>
  );
}
