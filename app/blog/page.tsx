import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and insights for Ethiopian businesses looking to grow online — from the Zukal Studio team.",
};

const FEATURED = {
  title: "5 Reasons Your Ethiopian Business Needs a Website in 2025",
  excerpt:
    "In 2025, not having a website means losing customers to competitors who do. We break down exactly why every Ethiopian SMB needs to be online — and how to start.",
  category: "Web Tips",
  date: "May 10, 2025",
  readTime: "6 min read",
  initial: "WB",
};

const POSTS = [
  {
    title: "How to Grow Your Instagram Following as an Ethiopian Business",
    excerpt:
      "A step-by-step guide to building a real, engaged audience on Instagram — written specifically for Ethiopian brands.",
    category: "Social Media",
    date: "April 28, 2025",
    readTime: "5 min read",
    initial: "IG",
    color: "#A8E320",
  },
  {
    title: "What Makes a Good Business Website? 7 Must-Have Features",
    excerpt:
      "Not all websites are equal. Here are the 7 things every business website needs to actually bring in customers.",
    category: "Web Tips",
    date: "April 15, 2025",
    readTime: "4 min read",
    initial: "WW",
    color: "#90D410",
  },
  {
    title: "Content Marketing for Ethiopian SMBs: Where to Start",
    excerpt:
      "Content marketing sounds complex, but it doesn't have to be. Here's a simple starting guide for small businesses in Ethiopia.",
    category: "Content",
    date: "March 30, 2025",
    readTime: "7 min read",
    initial: "CM",
    color: "#B8F050",
  },
  {
    title: "Facebook vs Instagram: Which Platform is Best for Your Business?",
    excerpt:
      "Both platforms work, but one might be better for your specific business. We break down the difference.",
    category: "Social Media",
    date: "March 18, 2025",
    readTime: "5 min read",
    initial: "FB",
    color: "#A8E320",
  },
  {
    title: "How to Write a Website That Converts Visitors into Customers",
    excerpt:
      "Great design gets people to stay. Great copy gets them to act. Learn the basics of conversion copywriting.",
    category: "Web Tips",
    date: "March 5, 2025",
    readTime: "6 min read",
    initial: "CW",
    color: "#C8F240",
  },
  {
    title: "Local SEO: How to Get Your Business to Appear on Google Maps",
    excerpt:
      "When someone searches for your type of business in Addis Ababa, you want to show up first. Here's how.",
    category: "SEO",
    date: "February 20, 2025",
    readTime: "8 min read",
    initial: "SE",
    color: "#A8E320",
  },
];

const CATEGORIES = [
  "All",
  "Web Tips",
  "Social Media",
  "Content",
  "SEO",
  "Branding",
];

export default function BlogPage() {
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
            <p className="eyebrow">The Zukal Blog</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-[var(--text)] max-w-3xl mb-6">
              Insights to Help Your{" "}
              <span className="text-gradient">Business Grow</span>
            </h1>
            <p className="text-[var(--dim)] text-xl max-w-2xl leading-relaxed">
              Practical tips, guides, and real talk about digital marketing —
              made for Ethiopian small and medium businesses.
            </p>
          </SectionReveal>
          <div className="relative left-9 w-full flex items-center justify-center lg:w-full hidden lg:block">
            <Image src="/blog.svg" alt="ZukalBlogs Image" width={600} height={600} />
          </div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <p className="eyebrow">Featured Article</p>
            <div className="card p-8 md:p-12 rounded-2xl hover:border-[var(--green)]/30 transition-all duration-300 group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Thumbnail */}
                <div
                  className="h-56 rounded-xl flex items-center justify-center text-5xl font-bold font-display"
                  style={{
                    background: "rgba(168,227,32,0.08)",
                    border: "1px solid rgba(168,227,32,0.2)",
                    color: "#A8E320",
                  }}
                >
                  {FEATURED.initial}
                </div>
                {/* Content */}
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-[var(--green)] border border-[var(--green)]/30 px-3 py-1 rounded-full mb-4">
                    <Tag size={10} /> {FEATURED.category}
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-[var(--text)] mb-4 group-hover:text-[var(--green)] transition-colors">
                    {FEATURED.title}
                  </h2>
                  <p className="text-[var(--dim)] leading-relaxed mb-6">
                    {FEATURED.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--dim)] font-mono mb-6">
                    <span>{FEATURED.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {FEATURED.readTime}
                    </span>
                  </div>
                  <Link href="/blog/post" className="btn-primary">
                    Read Article <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="section bg-[#0E0E0E]">
        <div className="container">
          {/* Filter */}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(
              (
                { title, excerpt, category, date, readTime, initial, color },
                i,
              ) => (
                <SectionReveal key={title} delay={(i % 3) * 80}>
                  <div className="card p-6 hover:border-[var(--green)]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full">
                    {/* Thumbnail */}
                    <div
                      className="h-32 rounded-xl flex items-center justify-center text-3xl font-bold font-display mb-5"
                      style={{ background: `${color}10`, color }}
                    >
                      {initial}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--green)] mb-3">
                      <Tag size={10} /> {category}
                    </span>

                    <h3 className="font-display font-semibold text-lg text-[var(--text)] mb-3 group-hover:text-[var(--green)] transition-colors flex-1">
                      {title}
                    </h3>
                    <p className="text-[var(--dim)] text-sm leading-relaxed mb-5">
                      {excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2A]">
                      <div className="flex items-center gap-3 text-xs text-[var(--dim)] font-mono">
                        <span>{date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} /> {readTime}
                        </span>
                      </div>
                      <ArrowRight
                        size={15}
                        color="#A8E320"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </SectionReveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <div className="card p-10 md:p-16 rounded-2xl text-center border-[var(--green)]/20 bg-[var(--green)]/5">
              <p className="eyebrow justify-center">Newsletter</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text)] mb-4">
                Get Weekly Digital Tips
              </h2>
              <p className="text-[var(--dim)] max-w-md mx-auto mb-8">
                Join 1,000+ Ethiopian business owners who get practical digital
                marketing tips straight to their inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-[var(--dark)] border border-[#2A2A2A] rounded-full px-5 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--green)] transition-colors"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe <ArrowRight size={15} />
                </button>
              </div>
              <p className="text-[var(--dim)] text-xs mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
