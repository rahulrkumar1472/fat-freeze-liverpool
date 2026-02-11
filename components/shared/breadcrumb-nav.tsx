import Link from "next/link";
import type { Breadcrumb } from "@/lib/seo";

export function BreadcrumbNav({ crumbs }: { crumbs: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--text-muted)]">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={`${crumb.path}-${crumb.name}-${index}`} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-semibold text-[var(--accent-navy)]">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="hover:text-[var(--accent-navy)]">
                  {crumb.name}
                </Link>
              )}
              {!isLast ? <span className="text-slate-400">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
