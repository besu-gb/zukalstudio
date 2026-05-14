"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

/* Navigation links used in both desktop and mobile menus */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  /* Track scroll position to add backdrop blur on scroll */
  const [scrolled, setScrolled] = useState(false);

  /* Mobile menu open/close state */
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu whenever the route changes */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141414]/90 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpg"
            alt="Zukal Studio Logo"
            width={44}
            height={44}
            className="rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-display font-semibold text-[var(--text)] text-lg leading-tight hidden sm:block">
            Zukal
            <br />
            <span className="text-[var(--green)]">Studio</span>
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-[var(--green)] bg-[var(--green)]/10"
                  : "text-[var(--dim)] hover:text-[var(--text)] hover:bg-[var(--muted)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── CTA Button (desktop) ── */}
        <Link href="/contact" className="btn-primary hidden md:inline-flex">
          Get Started
        </Link>

        {/* ── Mobile Menu Toggle ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[var(--text)] hover:text-[var(--green)] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#1C1C1C] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-[var(--green)] bg-[var(--green)]/10"
                  : "text-[var(--dim)] hover:text-[var(--text)] hover:bg-[var(--muted)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4 justify-center">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
