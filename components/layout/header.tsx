"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const OPEN_DELAY_MS = 90;
const CLOSE_DELAY_MS = 220;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFatFreezingOpen, setMobileFatFreezingOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const groupRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  function clearTimers() {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenu(delay = OPEN_DELAY_MS) {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (desktopOpen) return;
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    openTimerRef.current = setTimeout(() => {
      setDesktopOpen(true);
      openTimerRef.current = null;
    }, delay);
  }

  function closeMenu(delay = CLOSE_DELAY_MS) {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setDesktopOpen(false);
      closeTimerRef.current = null;
    }, delay);
  }

  function focusItem(index: number) {
    const item = itemRefs.current[index];
    if (!item) return;
    item.focus();
  }

  function openAndFocus(index: number) {
    clearTimers();
    setDesktopOpen(true);
    requestAnimationFrame(() => focusItem(index));
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (desktopOpen) {
        closeMenu(0);
      } else {
        openAndFocus(0);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      openAndFocus(0);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      openAndFocus(navigation.fatFreezingDropdown.length - 1);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(0);
      triggerRef.current?.focus();
    }
  }

  function handleMenuItemKeyDown(
    event: KeyboardEvent<HTMLAnchorElement>,
    index: number,
  ) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusItem((index + 1) % navigation.fatFreezingDropdown.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex =
        index === 0 ? navigation.fatFreezingDropdown.length - 1 : index - 1;
      focusItem(nextIndex);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(0);
      triggerRef.current?.focus();
    }
  }

  function isInsideMenu(target: EventTarget | null) {
    return !!(target instanceof Node && groupRef.current?.contains(target));
  }

  function openChatbot() {
    window.dispatchEvent(new CustomEvent("chatbot:open"));
    setMobileOpen(false);
  }

  const isFatFreezingActive =
    pathname.startsWith("/fat-freezing/") ||
    pathname === "/fat-freezing-liverpool" ||
    pathname === "/fat-freezing-liverpool/";

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/90",
        scrolled ? "shadow-[0_10px_28px_rgba(15,39,66,0.12)]" : "shadow-none",
      )}
    >
      <Container className="flex items-center justify-between gap-4 py-4">
        <div className="flex flex-col">
          <Link href="/" className="font-display text-xl font-semibold tracking-tight text-[var(--accent-navy)]">
            {siteConfig.clinicName}
          </Link>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">Liverpool Clinic</p>
        </div>

        <Button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          variant="secondary"
          size="sm"
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          Menu
        </Button>

        <nav className="hidden items-center gap-5 md:flex">
          <Link
            href="/"
            className={clsx(
              "text-sm font-medium transition-colors",
              pathname === "/" ? "text-[var(--accent-navy)]" : "text-[var(--text-muted)] hover:text-[var(--accent-navy)]",
            )}
          >
            Home
          </Link>

          <div
            ref={groupRef}
            className="relative"
            onMouseEnter={() => openMenu(OPEN_DELAY_MS)}
            onMouseLeave={() => closeMenu(CLOSE_DELAY_MS)}
            onFocusCapture={() => openMenu(0)}
            onBlurCapture={(event) => {
              if (!isInsideMenu(event.relatedTarget)) closeMenu(220);
            }}
          >
            <div
              className={clsx(
                "inline-flex items-center gap-1 rounded-full px-2 py-1",
                isFatFreezingActive ? "bg-[var(--primary-soft)]" : "bg-transparent",
              )}
            >
              <Link
                href="/fat-freezing-liverpool/"
                className={clsx(
                  "text-sm font-medium transition-colors",
                  isFatFreezingActive
                    ? "text-[var(--accent-navy)]"
                    : "text-[var(--text-muted)] hover:text-[var(--accent-navy)]",
                )}
              >
                Fat Freezing
              </Link>
              <button
                ref={triggerRef}
                type="button"
                onClick={() => {
                  clearTimers();
                  setDesktopOpen((value) => !value);
                }}
                onKeyDown={handleTriggerKeyDown}
                aria-haspopup="menu"
                aria-expanded={desktopOpen}
                aria-label="Open Fat Freezing menu"
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs font-semibold text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--accent-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
              >
                <ChevronDown className={clsx("h-3.5 w-3.5 transition-transform", desktopOpen ? "rotate-180" : "")} />
              </button>
            </div>

            {desktopOpen ? (
              <>
                <div
                  className="absolute -left-4 top-full h-6 w-[calc(100%+8rem)]"
                  onMouseEnter={() => openMenu(0)}
                  onMouseLeave={() => closeMenu(CLOSE_DELAY_MS)}
                  aria-hidden
                />
                <div
                  role="menu"
                  className="absolute left-0 top-[calc(100%+12px)] w-[340px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl"
                  onMouseEnter={() => openMenu(0)}
                  onMouseLeave={() => closeMenu(CLOSE_DELAY_MS)}
                >
                  <ul className="grid gap-1.5">
                    {navigation.fatFreezingDropdown.map((item, index) => (
                      <li key={item.href}>
                        <Link
                          ref={(node) => {
                            itemRefs.current[index] = node;
                          }}
                          href={item.href}
                          role="menuitem"
                          onClick={() => closeMenu(0)}
                          onKeyDown={(event) => handleMenuItemKeyDown(event, index)}
                          className="block rounded-xl border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : null}
          </div>

          <Link
            href="/pricing/"
            className={clsx(
              "text-sm font-medium transition-colors",
              pathname === "/pricing/" || pathname === "/pricing"
                ? "text-[var(--accent-navy)]"
                : "text-[var(--text-muted)] hover:text-[var(--accent-navy)]",
            )}
          >
            Pricing
          </Link>
          <Link
            href="/contact/"
            className={clsx(
              "text-sm font-medium transition-colors",
              pathname === "/contact/" || pathname === "/contact"
                ? "text-[var(--accent-navy)]"
                : "text-[var(--text-muted)] hover:text-[var(--accent-navy)]",
            )}
          >
            Contact
          </Link>

          <Button asChild size="lg" className="min-w-[8.25rem] px-6 text-base">
            <Link href={navigation.primaryCta.href}>{navigation.primaryCta.label}</Link>
          </Button>

          <Button type="button" onClick={openChatbot} variant="secondary" className="min-w-[9.5rem] px-5 text-sm">
            Speak to us now
          </Button>
        </nav>
      </Container>

      {mobileOpen ? (
        <nav className="border-t border-[var(--border)] bg-[var(--surface)] px-4 pb-5 pt-3 md:hidden">
          <div className="grid gap-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text)] hover:bg-[var(--surface-soft)]"
            >
              Home
            </Link>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-2">
              <div className="flex items-center justify-between gap-3 px-1">
                <Link
                  href="/fat-freezing-liverpool/"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-[var(--accent-navy)]"
                >
                  Fat Freezing
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileFatFreezingOpen((value) => !value)}
                  className="rounded-md border border-[var(--border)] px-2 py-1 text-xs font-semibold text-[var(--text)]"
                >
                  {mobileFatFreezingOpen ? "Hide" : "Show"}
                </button>
              </div>
              {mobileFatFreezingOpen ? (
                <ul className="mt-2 grid gap-1">
                  {navigation.fatFreezingDropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-2 py-1.5 text-xs font-medium text-[var(--text)] hover:bg-[var(--primary-soft)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <Link
              href="/pricing/"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text)] hover:bg-[var(--surface-soft)]"
            >
              Pricing
            </Link>
            <Link
              href="/contact/"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text)] hover:bg-[var(--surface-soft)]"
            >
              Contact
            </Link>
            <Link
              href="/book/"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-[var(--primary)] px-3 py-3 text-center text-sm font-semibold text-[var(--text-inverse)] shadow-[0_10px_24px_rgba(14,116,144,0.2)]"
            >
              Book
            </Link>
            <Button
              type="button"
              onClick={openChatbot}
              variant="secondary"
              className="rounded-xl px-4 py-3 text-sm"
            >
              Speak to us now
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
