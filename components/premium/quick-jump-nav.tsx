import Link from "next/link";

export type JumpItem = {
  id: string;
  label: string;
};

export function QuickJumpNav({ items }: { items: JumpItem[] }) {
  return (
    <nav className="sticky top-[88px] z-30 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-3 shadow-sm backdrop-blur">
      <p className="px-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Quick jump</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] hover:text-[var(--primary-hover)]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
