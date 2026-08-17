"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-outline-variant bg-surface transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_6px_rgba(0,0,0,0.07)]" : ""
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label={`${siteConfig.legalName} home`} className="flex items-center">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.legalName}
              width={722}
              height={294}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <nav aria-label="Primary" className="hidden h-full items-center gap-6 md:flex">
            {mainNav.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-full items-center font-display text-xs font-semibold uppercase tracking-[0.05em] transition-colors ${
                    active
                      ? "border-b-2 border-secondary text-secondary"
                      : "text-content-variant hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn btn-cta hidden sm:inline-flex">
              Request Quote
            </Link>
            <button
              type="button"
              className="inline-flex text-primary md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`${open ? "flex" : "hidden"} flex-col border-t border-outline-variant bg-surface md:hidden`}
      >
        {mainNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border-t border-surface-high px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.05em] text-content-variant first:border-t-0 hover:bg-surface-low hover:text-secondary"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="border-t border-surface-high px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.05em] text-cta hover:bg-surface-low"
        >
          Request Quote
        </Link>
      </nav>
    </header>
  );
}
