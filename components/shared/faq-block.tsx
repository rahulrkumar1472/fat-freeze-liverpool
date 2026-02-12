import type { FaqItem } from "@/lib/content/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FaqBlock({ faqs }: { faqs: FaqItem[] }) {
  return (
    <Card className="mt-14">
      <CardHeader className="pb-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <Badge variant="teal">FAQ</Badge>
            <CardTitle className="mt-3 text-2xl sm:text-3xl">Frequently asked questions</CardTitle>
          </div>
          <p className="text-xs text-[var(--text-muted)]">Answers are informational and consultation-led.</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Accordion type="single" collapsible className="grid gap-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index + 1}`}>
              <AccordionTrigger className="text-base">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-navy)] text-xs font-semibold text-[var(--text-inverse)]">
                    {index + 1}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
