/** Lightweight route-level suspense fallback (no extra dependencies). */
export function PageLoadFallback() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="h-10 w-10 motion-safe:animate-spin rounded-full border-4 border-slate-200 border-t-green-500" />
    </div>
  );
}
