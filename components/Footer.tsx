import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const SOLUTIONS = [
  { label: "Web Development", href: "/solutions#web" },
  { label: "Content Creation", href: "/solutions#content" },
  { label: "Social Media", href: "/solutions#social" },
  { label: "Brand Identity", href: "/solutions#brand" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "https://instagram.com/zukalstudio", label: "Instagram" },
  { icon: Twitter,   href: "https://twitter.com/zukalstudio",   label: "Twitter" },
  { icon: Linkedin,  href: "https://linkedin.com/company/zukal-studio", label: "LinkedIn" },
  { icon: Facebook,  href: "https://facebook.com/zukalstudio",  label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0E0E0E] pt-16">

      {/* ── Main Footer Grid ── */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/zukal_logo.jpg"
                alt="Zukal Studio"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <p className="font-display font-semibold text-xl text-[var(--text)]">Zukal Studio</p>
                <p className="text-xs text-[var(--dim)] font-mono tracking-widest uppercase">Creative Agency</p>
              </div>
            </Link>

            <p className="text-[var(--dim)] leading-relaxed max-w-xs mb-8">
              We help Ethiopian businesses grow online through powerful web design,
              creative content, and smart social media strategies.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-[#2A2A2A] flex items-center justify-center text-[var(--dim)] hover:text-[var(--green)] hover:border-[var(--green)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-display font-semibold text-[var(--text)] mb-6">Solutions</h4>
            <ul className="space-y-3">
              {SOLUTIONS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[var(--dim)] hover:text-[var(--green)] transition-colors text-sm link-hover"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-[var(--text)] mb-6">Company</h4>
            <ul className="space-y-3">
              {COMPANY.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[var(--dim)] hover:text-[var(--green)] transition-colors text-sm link-hover"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="mt-16 mb-10 rounded-2xl bg-[var(--green)]/10 border border-[var(--green)]/20 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-semibold text-xl text-[var(--text)] mb-1">
              Ready to grow your business?
            </p>
            <p className="text-[var(--dim)] text-sm">
              Let's talk about how Zukal Studio can help you.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#2A2A2A] p-3">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--dim)] text-xs">
            © {year} Zukal Studio. All rights reserved. — Addis Ababa, Ethiopia
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[var(--dim)] hover:text-[var(--green)] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[var(--dim)] hover:text-[var(--green)] text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
