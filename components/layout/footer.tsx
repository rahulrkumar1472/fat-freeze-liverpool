import Link from "next/link";
import { clinicTrustNotes, liverpoolDistrictSignals, siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const treatmentLinks = [
  { label: "Fat Freezing Liverpool", href: "/fat-freezing-liverpool/" },
  { label: "How It Works", href: "/fat-freezing/how-it-works/" },
  { label: "Results & Timeline", href: "/fat-freezing/results-timeline/" },
  { label: "Ultrasound Cavitation", href: "/treatments/ultrasound-cavitation/" },
  { label: "Radio Frequency Skin Tightening", href: "/treatments/radio-frequency-skin-tightening/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Book", href: "/book/" },
];

const areaLinks = [
  { label: "Abdomen", href: "/fat-freezing/areas/abdomen/" },
  { label: "Flanks / Love Handles", href: "/fat-freezing/areas/flanks-love-handles/" },
  { label: "Lower Stomach / Pouch", href: "/fat-freezing/areas/lower-stomach-pouch/" },
  { label: "Bra Back Fat", href: "/fat-freezing/areas/bra-back-fat/" },
  { label: "Inner Thighs", href: "/fat-freezing/areas/inner-thighs/" },
  { label: "Outer Thighs", href: "/fat-freezing/areas/outer-thighs/" },
  { label: "Upper Arms", href: "/fat-freezing/areas/upper-arms-bingo-wings/" },
  { label: "Double Chin", href: "/fat-freezing/areas/double-chin/" },
];

const concernLinks = [
  { label: "Stubborn Belly Fat", href: "/concerns/stubborn-belly-fat/" },
  { label: "Love Handles", href: "/concerns/love-handles/" },
  { label: "Thigh Fat", href: "/concerns/thigh-fat/" },
  { label: "Arm Fat", href: "/concerns/arm-fat/" },
  { label: "Post Weight-Loss Shape", href: "/concerns/post-weight-loss-shape/" },
  { label: "Double Chin Fat", href: "/concerns/double-chin-fat/" },
  { label: "Articles Hub", href: "/articles/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
];

function LinkList({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8ec7d6]">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="text-slate-200 transition hover:text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--accent-navy)] text-slate-100">
      <Container className="py-14">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_1fr_1fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-semibold">{siteConfig.clinicName}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{siteConfig.address}</p>
            <p className="mt-1 text-sm leading-7 text-slate-300">Phone: {siteConfig.phone}</p>
            <p className="mt-1 text-sm leading-7 text-slate-300">Email: {siteConfig.enquiryEmail}</p>
            <p className="mt-1 text-sm leading-7 text-slate-300">Opening hours: Monday-Sunday, 10:00-20:00</p>
            <ul className="mt-5 space-y-2 text-xs text-slate-400">
              {clinicTrustNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <LinkList title="Treatments" links={treatmentLinks} />
          <LinkList title="Areas" links={areaLinks} />
          <LinkList title="Concerns & Content" links={concernLinks} />
          <LinkList title="Legal" links={legalLinks} />
        </div>

        <div className="mt-10 rounded-2xl border border-[#26445e] bg-[#0d2238] p-5">
          <Badge className="border-[#316084] bg-[#15314d] text-[#8ec7d6]">Local coverage</Badge>
          <p className="mt-2 text-sm leading-8 text-slate-300">
            We provide consultation-led fat freezing and cryolipolysis care across Liverpool and nearby districts. If you are comparing options, start with our treatment overview, then move to pricing and booking when you are ready.
            <Link className="mx-1 font-semibold text-white underline" href="/fat-freezing-liverpool/">
              Treatment overview
            </Link>
            and
            <Link className="ml-1 font-semibold text-white underline" href="/book/">
              online booking
            </Link>
            .
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-400">{liverpoolDistrictSignals.join(" • ")}</p>
        </div>
      </Container>

      <div className="border-t border-[#26445e] px-4 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.clinicName}. All rights reserved.
      </div>
    </footer>
  );
}
