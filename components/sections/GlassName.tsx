"use client";

import { useCallback, useRef } from "react";

function Lines() {
  return (
    <>
      <span className="wordmark-line wordmark-line--title">Dzaki</span>
      <span className="wordmark-line wordmark-line--sub">Alqadrie</span>
    </>
  );
}

export function GlassName() {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  }, []);

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "40%");
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="wordmark animate-name-in"
    >
      {/* subtle moving light reflection clipped to the letters */}
      <span className="wordmark-reflect" aria-hidden="true">
        <Lines />
      </span>

      {/* main solid editorial wordmark */}
      <span className="wordmark-text">
        <h1>
          <Lines />
        </h1>
      </span>
    </div>
  );
}