export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-line bg-white/3 px-3 py-1 text-xs font-medium text-muted">
      {label}
    </span>
  )
}
