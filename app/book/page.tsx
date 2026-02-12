import type { Metadata } from "next";
import { BookingWizard } from "@/components/forms/booking-wizard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContentPage } from "@/components/shared/content-page";
import { PageSchema } from "@/components/seo/page-schema";
import { getCorePage } from "@/lib/content/core-pages";
import { buildMetadata } from "@/lib/seo";

const page = getCorePage("/book/");

if (!page) {
  throw new Error("Book consultation page content missing");
}

export const metadata: Metadata = buildMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [
    "book fat freezing consultation in liverpool",
    "fat freezing appointment Liverpool",
    "cryolipolysis consultation Liverpool",
  ],
});

export default function BookPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Book", path: "/book/" },
  ];

  return (
    <>
      <PageSchema
        crumbs={crumbs}
        faqs={page.faqs}
        webPage={{
          path: "/book/",
          name: "Book Consultation",
          type: "MedicalWebPage",
          description: page.metaDescription,
        }}
      />
      <ContentPage
        crumbs={crumbs}
        heroTitle={page.heroTitle}
        heroIntro={page.heroIntro}
        sections={page.sections}
        faqs={page.faqs}
        supportLink="/contact/"
        supportLabel="Contact our team"
        moneyAnchor="Treatment overview"
        eyebrow="3-Step Booking"
        withInlineCtas
        beforeSections={
          <div className="grid gap-4">
            <Card className="rounded-2xl border border-[#f5d39a] bg-[#fff4de] shadow-none">
              <CardContent className="p-4">
                <Badge className="border-[#f5d39a] bg-[#ffe6b7] text-[#7b4f00]">Availability note</Badge>
                <p className="mt-2 text-sm text-[#7b4f00]">
                  Same-day treatment may be available subject to clinical suitability and schedule.
                </p>
              </CardContent>
            </Card>
            <BookingWizard />
          </div>
        }
      />
    </>
  );
}
