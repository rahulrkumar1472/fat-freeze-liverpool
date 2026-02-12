"use client";

import Link from "next/link";
import Script from "next/script";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { chatbotConfig } from "@/lib/chatbot-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mode = chatbotConfig.mode;
const scriptSrc = chatbotConfig.scriptSrc;
const inlineSnippet = chatbotConfig.inlineSnippet;
const compactMode = chatbotConfig.compactMode;
const storageKey = "ffl_chat_session_v2";

type Intent =
  | "pricing"
  | "areas"
  | "suitability"
  | "how"
  | "book"
  | "results"
  | "timing"
  | "contact"
  | "fallback";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
  links?: Array<{ label: string; href: string }>;
};

const suggestionPrompts = [
  "How much does it cost?",
  "What areas can you treat?",
  "Will this work for me?",
  "How does it work?",
  "How soon can I book?",
  "Show me results guidance",
];

function createMessage(role: Message["role"], text: string, links?: Message["links"]): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
    links,
  };
}

function pick<T>(options: T[], seed: number): T {
  return options[seed % options.length];
}

function detectArea(input: string) {
  const lower = input.toLowerCase();
  if (/(stomach|belly|abdomen|pouch)/.test(lower)) return "abdomen";
  if (/(love handle|flank|waist)/.test(lower)) return "flanks";
  if (/(arm|bingo wing)/.test(lower)) return "arms";
  if (/(thigh|inner thigh|outer thigh)/.test(lower)) return "thighs";
  if (/(chin|jaw)/.test(lower)) return "chin";
  return null;
}

function detectIntent(input: string): Intent {
  const lower = input.toLowerCase();

  if (/(price|pricing|cost|£|package|stomach.*much|how much)/.test(lower)) return "pricing";
  if (/(area|abdomen|belly|thigh|arm|chin|love handle|flank)/.test(lower)) return "areas";
  if (/(result|timeline|before|after|when.*see|how long)/.test(lower)) return "results";
  if (/(suitable|candidate|work for me|safe|am i|contra)/.test(lower)) return "suitability";
  if (/(how.*work|cryolipolysis|process|what is)/.test(lower)) return "how";
  if (/(book|booking|appointment|consultation|schedule)/.test(lower)) return "book";
  if (/(today|same day|soon|earliest|next slot)/.test(lower)) return "timing";
  if (/(phone|call|email|contact|where|address)/.test(lower)) return "contact";
  return "fallback";
}

function getIntentResponse(intent: Intent, userInput: string, history: Message[]): Message {
  const area = detectArea(userInput);
  const seed = history.length;

  if (intent === "pricing") {
    const variants = [
      "Our pricing starts at £49 for 1 applicator and scales by applicator count. We charge per applicator, and one applicator covers roughly a 20cm zone.",
      "Packages begin at £49. If your concern is in a larger area, we usually map applicator count during consultation so you know the plan before treatment.",
      "You can check package pricing right away. We keep it simple: per-applicator pricing, then a consultation confirms final count.",
    ];
    const areaLink =
      area === "abdomen"
        ? { label: "Abdomen guidance", href: "/fat-freezing/areas/abdomen/" }
        : area === "flanks"
          ? { label: "Flanks guidance", href: "/fat-freezing/areas/flanks-love-handles/" }
          : area === "arms"
            ? { label: "Upper arms guidance", href: "/fat-freezing/areas/upper-arms-bingo-wings/" }
            : area === "thighs"
              ? { label: "Thigh guidance", href: "/fat-freezing/areas/inner-thighs/" }
              : area === "chin"
                ? { label: "Double chin guidance", href: "/fat-freezing/areas/double-chin/" }
                : null;

    return createMessage(
      "assistant",
      `${pick(variants, seed)} If you are ready, booking now lets our team confirm your exact plan during consultation.`,
      [
        { label: "View pricing", href: "/pricing/" },
        ...(areaLink ? [areaLink] : []),
        { label: "Book consultation", href: "/book/" },
      ],
    );
  }

  if (intent === "areas") {
    return createMessage(
      "assistant",
      "We treat multiple areas including abdomen, flanks, thighs, upper arms, bra-back area, and double chin. If you tell me your priority area, I can guide you to the most relevant page.",
      [
        { label: "Areas we treat", href: "/fat-freezing/areas-we-treat/" },
        { label: "Treatment overview", href: "/fat-freezing-liverpool/" },
        { label: "Book consultation", href: "/book/" },
      ],
    );
  }

  if (intent === "results") {
    return createMessage(
      "assistant",
      "Results are usually gradual and reviewed over time. Our team explains a realistic timeline for your area during consultation and sets practical checkpoints.",
      [
        { label: "Results timeline", href: "/fat-freezing/results-timeline/" },
        { label: "How it works", href: "/fat-freezing/how-it-works/" },
        { label: "Book consultation", href: "/book/" },
      ],
    );
  }

  if (intent === "suitability") {
    return createMessage(
      "assistant",
      "Suitability is confirmed during consultation after screening. This is not a weight-loss treatment, and results vary by individual. If you like, we can get you to the best page before booking.",
      [
        { label: "Treatment overview", href: "/fat-freezing-liverpool/" },
        { label: "How it works", href: "/fat-freezing/how-it-works/" },
        { label: "Book consultation", href: "/book/" },
      ],
    );
  }

  if (intent === "how") {
    return createMessage(
      "assistant",
      "In simple terms, cryolipolysis (fat freezing) uses controlled cooling in selected areas. We explain the process clearly at consultation and tailor your plan to your goals.",
      [
        { label: "How it works", href: "/fat-freezing/how-it-works/" },
        { label: "FAQs", href: "/faq/" },
        { label: "Book consultation", href: "/book/" },
      ],
    );
  }

  if (intent === "timing") {
    return createMessage(
      "assistant",
      "We offer appointments from 10:00 to 20:00, seven days a week. Same-day treatment may be available subject to clinical suitability and schedule.",
      [
        { label: "Book now", href: "/book/" },
        { label: "Contact our team", href: "/contact/" },
      ],
    );
  }

  if (intent === "contact") {
    return createMessage(
      "assistant",
      "You can call, email, or use the booking page for the fastest route. If you prefer, we can start with your area and send you to the right guide first.",
      [
        { label: "Contact page", href: "/contact/" },
        { label: "Book consultation", href: "/book/" },
      ],
    );
  }

  if (intent === "book") {
    const options = [
      "Great, we can get that started now.",
      "Perfect, booking is the fastest next step.",
      "Good choice. We can move straight to booking.",
    ];
    return createMessage("assistant", `${pick(options, seed)} Choose a time that suits you and confirmation will be sent by email.`, [
      { label: "Book consultation", href: "/book/" },
      { label: "View pricing", href: "/pricing/" },
    ]);
  }

  return createMessage(
    "assistant",
    "Thanks for your question. I can help with pricing, areas, suitability, results, or booking. Tell me your main goal and I will point you to the best next page.",
    [
      { label: "Treatment overview", href: "/fat-freezing-liverpool/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Book consultation", href: "/book/" },
    ],
  );
}

export function ChatbotSlot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") {
      return [
        createMessage(
          "assistant",
          "Hi, welcome to our clinic. Ask me about pricing, areas, suitability, results, or booking.",
          [
            { label: "View pricing", href: "/pricing/" },
            { label: "Book consultation", href: "/book/" },
          ],
        ),
      ];
    }

    const raw = window.sessionStorage.getItem(storageKey);
    if (!raw) {
      return [
        createMessage(
          "assistant",
          "Hi, welcome to our clinic. Ask me about pricing, areas, suitability, results, or booking.",
          [
            { label: "View pricing", href: "/pricing/" },
            { label: "Book consultation", href: "/book/" },
          ],
        ),
      ];
    }

    try {
      const parsed = JSON.parse(raw) as Message[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch {
      // Ignore parse errors and start a fresh session.
    }

    return [createMessage("assistant", "Hi, how can we help today?")];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("chatbot:open", handleOpen);
    return () => window.removeEventListener("chatbot:open", handleOpen);
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    window.sessionStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages]);

  const renderMock = mode !== "provider";
  const latest = useMemo(() => messages[messages.length - 1] ?? null, [messages]);

  function submitPrompt(prompt: string) {
    const value = prompt.trim();
    if (!value) return;
    const intent = detectIntent(value);

    setMessages((prev) => {
      const userMessage = createMessage("user", value);
      const response = getIntentResponse(intent, value, prev);
      return [...prev, userMessage, response];
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!input.trim()) return;
    submitPrompt(input);
    setInput("");
  }

  const launcherClass = compactMode
    ? "inline-flex h-10 items-center gap-2 px-4 text-sm shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
    : "inline-flex h-11 items-center gap-2 px-5 text-sm shadow-[0_12px_26px_rgba(15,23,42,0.14)]";
  const panelClass =
    "mb-3 w-[min(360px,calc(100vw-1.5rem))] max-w-[360px] rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.12)]";

  return (
    <>
      {scriptSrc ? <Script src={scriptSrc} strategy="afterInteractive" /> : null}
      {inlineSnippet ? (
        <Script id="chatbot-inline" strategy="afterInteractive">
          {inlineSnippet}
        </Script>
      ) : null}

      <div className="fixed bottom-24 right-4 z-40 md:bottom-6 md:right-6">
        {open ? (
          <div className={panelClass} role="dialog" aria-label="Chat assistant">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted-foreground)]">
                  Assistant
                </p>
                <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">
                  Need help choosing the right option?
                </p>
              </div>
              <Button
                type="button"
                onClick={() => setOpen(false)}
                variant="secondary"
                size="sm"
                className="h-9 px-3 text-sm"
              >
                Close
              </Button>
            </div>

            {renderMock ? (
              <>
                <div
                  className="mt-3 max-h-56 space-y-2 overflow-auto rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3"
                >
                  {messages.map((message, index) => (
                    <div key={`${message.role}-${index}`} className="space-y-1">
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted-foreground)]"
                      >
                        {message.role === "assistant" ? "Assistant" : "You"}
                      </p>
                      <p className="text-sm leading-6 text-[var(--foreground)]">
                        {message.text}
                      </p>
                      {message.links?.length ? (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {message.links.map((link) => (
                            <Link
                              key={link.href + link.label}
                              className="rounded-full border border-[#cbd5e1] bg-[#f8fafc] px-3.5 py-2 text-[13px] font-medium leading-5 text-[#0f172a] transition hover:bg-[#f1f5f9]"
                              href={link.href}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                <form onSubmit={onSubmit} className="mt-3 grid gap-2">
                  <label htmlFor="chatbot-input" className="sr-only">
                    Ask a question
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="chatbot-input"
                      type="text"
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      placeholder="Ask about price, areas, results, or booking"
                      className="h-10 rounded-full border-[#cbd5e1] bg-white px-4 text-sm"
                    />
                    <Button
                      type="submit"
                      size="default"
                      className="h-10 px-4 text-sm"
                    >
                      Send
                    </Button>
                  </div>
                </form>

                <div className="mt-3 flex flex-wrap gap-2">
                  {suggestionPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => submitPrompt(prompt)}
                      className="rounded-full border border-[#cbd5e1] bg-[#f8fafc] px-3.5 py-2 text-[13px] leading-5 text-[#0f172a] transition hover:bg-[#f1f5f9]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-[13px] leading-5 text-[var(--muted-foreground)]">
                  {latest?.role === "assistant"
                    ? "Ask a follow-up and I can guide you to the right page."
                    : "One moment while I guide you to the best next page."}
                </p>
              </>
            ) : (
              <div className="mt-3 space-y-3">
                <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                  Live chatbot provider mode is enabled. If the third-party widget is blocked, you can still book or contact us directly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm">
                    <Link href="/book/">Book now</Link>
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/contact/">Contact clinic</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : null}

        <Button
          type="button"
          onClick={() => setOpen((value) => !value)}
          variant="secondary"
          className={launcherClass}
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          {chatbotConfig.launcherLabel}
        </Button>
      </div>
    </>
  );
}
