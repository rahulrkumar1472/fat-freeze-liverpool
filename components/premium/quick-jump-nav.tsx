import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type JumpItem = {
  id: string;
  label: string;
};

export function QuickJumpNav({ items }: { items: JumpItem[] }) {
  return (
    <nav className="sticky top-[88px] z-30 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-3 shadow-sm backdrop-blur">
      <Badge variant="outline" className="px-2">
        Quick jump
      </Badge>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <Button key={item.id} asChild variant="secondary" size="sm">
            <Link href={`#${item.id}`}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
