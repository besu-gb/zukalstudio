import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Globe, Pen, Share2 } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Zukal Studio's portfolio of web design, content creation, and social media projects for Ethiopian businesses.",
};

const CATEGORIES = ["All", "Web Design", "Branding", "Social Media", "Content"];

const PROJECTS = [
  {
    title: "Mekdes Boutique",
    category: "Web Design",
    tags: ["Web Design", "Branding"],
    description:
      "A stunning e-commerce-style website for a popular Addis Ababa fashion boutique. Sales inquiries increased 3x within the first month.",
    result: "3x more inquiries",
    color: "#A8E320",
    initial: "MB",
  },
  {
    title: "Tadesse Trading Co.",
    category: "Web Design",
    tags: ["Web Design", "Content"],
    description:
      "Corporate website redesign for an import/export company. Clean, professional, and optimized for B2B conversions.",
    result: "2x website traffic",
    color: "#7BC320",
    initial: "TT",
  },
  {
    title: "HG Cosmetics",
    category: "Social Media",
    tags: ["Social Media", "Content"],
    description:
      "Full social media takeover for an Ethiopian cosmetics brand. Built from 500 to 15,000 followers in 6 months.",
    result: "+14,500 followers",
    color: "#A8E320",
    initial: "HG",
  },
  {
    title: "Selam Restaurant",
    category: "Branding",
    tags: ["Branding", "Web Design"],
    description:
      "Brand identity and website for a new fine-dining Ethiopian restaurant. Included menu design, logo, and social setup.",
    result: "Fully booked in week 1",
    color: "#C8F240",
    initial: "SR",
  },
  {
    title: "Abebe Law Firm",
    category: "Web Design",
    tags: ["Web Design"],
    description:
      "Professional, trustworthy website for a leading Addis Ababa law firm. Focused on building credibility and generating consultations.",
    result: "40% more consultations",
    color: "#A8E320",
    initial: "AL",
  },
  {
    title: "EthioTech Startup",
    category: "Content",
    tags: ["Content", "Social Media"],
    description:
      "Content strategy and production for an Ethiopian tech startup. Blog posts, LinkedIn content, and thought leadership pieces.",
    result: "3,000 organic readers/mo",
    color: "#90D410",
    initial: "ET",
  },
  {
    title: "Sheger Market",
    category: "Social Media",
    tags: ["Social Media", "Content"],
    description:
      "Community management and daily content creation for a local marketplace. Grew engagement rate from 1% to 8%.",
    result: "8% engagement rate",
    color: "#A8E320",
    initial: "SM",
  },
  {
    title: "Addis Fitness Studio",
    category: "Branding",
    tags: ["Branding", "Web Design", "Social Media"],
    description:
      "Complete brand overhaul — new logo, website, and social strategy for a growing fitness studio in Addis Ababa.",
    result: "60 new members in month 1",
    color: "#B8F050",
    initial: "AF",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 grid-bg relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 rounded-full"
          style={{
            background: "radial-gradient(circle, #A8E320, transparent 70%)",
          }}
        />
        <div className="container flex relative z-10">
          <SectionReveal>
            <p className="eyebrow">Our Work</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-[var(--text)] max-w-3xl mb-6">
              Projects That{" "}
              <span className="text-gradient">Delivered Results</span>
            </h1>
            <p className="text-[var(--dim)] text-xl max-w-2xl leading-relaxed mb-10">
              We measure success by real outcomes — more customers, more
              revenue, more growth. Here's a sample of what we've built for
              Ethiopian businesses.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </SectionReveal>
          <div className="relative left-9 w-full flex items-center justify-center lg:w-full hidden lg:block">
            <Image
              src="/project.svg"
              alt="Zukal Projects Image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="section">
        <div className="container">
          {/* Filter tabs (visual only — full filtering needs JS state) */}
          <SectionReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    i === 0
                      ? "bg-[var(--green)] text-[var(--dark)]"
                      : "border border-[#2A2A2A] text-[var(--dim)] hover:border-[var(--green)] hover:text-[var(--green)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PROJECTS.map(
              (
                { title, category, tags, description, result, color, initial },
                i,
              ) => (
                <SectionReveal key={title} delay={(i % 4) * 80}>
                  <div className="card p-6 hover:border-[var(--green)]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                    {/* Thumbnail */}
                    <div
                      className="w-full h-36 rounded-xl mb-5 flex items-center justify-center text-3xl font-bold font-display relative overflow-hidden"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <span style={{ color }}>{initial}</span>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[var(--green)]/0 group-hover:bg-[var(--green)]/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ExternalLink size={20} color="#A8E320" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-[var(--dim)] bg-[var(--muted)] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-semibold text-lg text-[var(--text)] mb-2">
                      {title}
                    </h3>
                    <p className="text-[var(--dim)] text-sm leading-relaxed flex-1 mb-4">
                      {description}
                    </p>

                    {/* Result badge */}
                    <div className="mt-auto pt-4 border-t border-[#2A2A2A]">
                      <p className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-1">
                        Result
                      </p>
                      <p className="text-[var(--green)] font-display font-semibold">
                        {result}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#0E0E0E]">
        <div className="container text-center">
          <SectionReveal>
            <p className="eyebrow justify-center">Let's Build Something</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-6">
              Your Business Could Be Next
            </h2>
            <p className="text-[var(--dim)] max-w-lg mx-auto mb-10">
              Join these businesses and many more that chose Zukal Studio to
              grow their digital presence and reach more customers.
            </p>
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
