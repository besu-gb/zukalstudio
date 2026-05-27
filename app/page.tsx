import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Pen,
  Share2,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowUpRight,
  Zap,
  Users,
  Award,
  Rocket,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

/* ─── Data ─────────────────────────────────────────── */

const SERVICES = [
  {
    icon: Globe,
    title: "Web Solutions",
    description:
      "We build fast, beautiful, and conversion-focused websites that represent your brand and turn visitors into customers.",
    tag: "Design & Dev",
  },
  {
    icon: Pen,
    title: "Content Creation",
    description:
      "From blog posts to videos and graphics — we create content that tells your story and keeps your audience engaged.",
    tag: "Creative",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We handle your social media so you don't have to — strategy, posting, engagement, and growth, all included.",
    tag: "Growth",
  },
  {
    icon: TrendingUp,
    title: "Brand Identity",
    description:
      "Your brand is more than a logo. We craft a complete visual identity that makes you unforgettable.",
    tag: "Branding",
  },
];

const STATS = [
  { icon: Users, value: "0+", label: "Happy Clients" },
  { icon: Rocket, value: "0+", label: "Projects Delivered" },
  { icon: Award, value: "0+", label: "Years Experience" },
  { icon: Zap, value: "0%", label: "Client Satisfaction" },
];

const TESTIMONIALS = [
  {
    name: "Besukal gobena",
    role: "Founder of Zukal",
    text: "Zukal Studio is the most creative agency in ethiopia so if you try it you will get best result.",
    stars: 5,
  },
  {
    name: "Daniel wendimu",
    role: "Video editor at Zukal",
    text: "We will make your visuals and videos more better and cathcy than your competitors",
    stars: 5,
  },
  {
    name: "Aynalem akeberegn",
    role: "Social media marketer at Zukal",
    text: "We will make your social media more engaging and grow your audience faster than you ever thought possible.",
    stars: 5,
  },
];

const MARQUEE_ITEMS = [
  "Web Solutions",
  "Content Strategy",
  "Content Creation",
  "Social Media",
  "Custom Systems",
  "Brand Identity",
  "Video Production",
  "Web Solutions",
  "Content Strategy",
  "Content Creation",
  "Social Media",
  "Custom Systems",
  "Brand Identity",
  "Video Production",
  "Web Solutions",
  "Content Strategy",
  "Content Creation",
  "Social Media",
  "Custom Systems",
  "Brand Identity",
  "Video Production",
];

/* ─── Page ─────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <section className="relative min-h-screen mt-10 flex items-center grid-bg overflow-hidden">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #A8E320 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #A8E320 0%, transparent 70%)",
          }}
        />

        <div className="container flex items-center justify-between relative z-10 pt-28 pb-20">
          <div className="max-w-4xl mt-5 mb-5">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--green)]/10 border border-[var(--green)]/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
              <span className="text-[var(--green)] text-xs font-mono tracking-widest uppercase">
                Ethiopia's Creative Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[var(--text)] mb-6">
              We Make Your <span className="text-gradient">Business</span>
              <br />
              Shine Online.
            </h1>

            {/* Sub headline */}
            <p className="text-[var(--dim)] text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Zukal Studio helps Ethiopian small and medium businesses grow with
              beautiful websites, powerful content, and social media that
              actually works.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="btn-primary text-base px-8 py-4 animate-pulse-green"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="btn-outline text-base px-8 py-4"
              >
                See Our Work
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center -space-x-3">
                {["M", "B", "H", "A", "T"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[var(--dark)] flex items-center justify-center text-xs font-bold font-display text-[var(--dark)]"
                    style={{ background: `hsl(${80 + i * 15}, 80%, 50%)` }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={14} fill="#A8E320" color="#A8E320" />
                    ))}
                </div>
                <p className="text-sm text-[var(--dim)]">
                  <span className="text-[var(--text)] font-semibold">
                    0+ businesses
                  </span>{" "}
                  trust us
                </p>
              </div>
            </div>
          </div>
          <div className="relative left-9 w-full flex items-center justify-center lg:w-full hidden lg:block">
            <Image src="/hero.svg" alt="Hero Image" width={600} height={600} />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-[45%] -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-[var(--dim)] text-xs font-mono tracking-widest">
            SCROLL
          </p>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--green)] to-transparent" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MARQUEE / TICKER
      ════════════════════════════════════════════ */}
      <div className="border-y border-[#2A2A2A] py-5 overflow-hidden bg-[#0E0E0E]">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6">
              <span className="text-[var(--dim)] text-sm font-mono tracking-widest uppercase">
                {item}
              </span>
              <span className="text-[var(--green)] text-lg">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          STATS SECTION
      ════════════════════════════════════════════ */}
      <section className="section bg-[#0E0E0E]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <SectionReveal key={label} delay={i * 100}>
                <div className="card p-6 text-center hover:border-[var(--green)]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--green)]/20 transition-colors">
                    <Icon size={22} color="var(--green)" />
                  </div>
                  <p className="font-display font-bold text-4xl text-gradient mb-1">
                    {value}
                  </p>
                  <p className="text-[var(--dim)] text-sm">{label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES SECTION
      ════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <p className="eyebrow">What We Do</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] max-w-xl mb-4">
              Everything Your Business Needs to Win Online
            </h2>
            <p className="text-[var(--dim)] max-w-lg mb-14">
              We are a full-service creative agency. You bring the vision; we
              bring the tools, talent, and strategy to make it real.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, description, tag }, i) => (
              <SectionReveal key={title} delay={i * 80}>
                <div className="card p-8 hover:border-[var(--green)]/40 hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--green)]/10 flex items-center justify-center group-hover:bg-[var(--green)]/20 transition-colors">
                      <Icon size={26} color="var(--green)" />
                    </div>
                    <span className="text-xs font-mono text-[var(--dim)] border border-[var(--muted)] px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[var(--text)] mb-3">
                    {title}
                  </h3>
                  <p className="text-[var(--dim)] leading-relaxed text-sm mb-6">
                    {description}
                  </p>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 text-[var(--green)] text-sm font-medium hover:gap-3 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={400}>
            <div className="text-center mt-12">
              <Link href="/solutions" className="btn-outline">
                View All Solutions <ArrowUpRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHY US SECTION
      ════════════════════════════════════════════ */}
      <section className="section bg-[#0E0E0E]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <SectionReveal>
              <p className="eyebrow">Why Zukal Studio</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-6">
                We Are Built for Ethiopian Businesses
              </h2>
              <p className="text-[var(--dim)] leading-relaxed mb-8">
                We understand the Ethiopian market, the culture, and what it
                takes for a local business to succeed online. We don't use
                templates or generic approaches — every project is crafted with
                purpose.
              </p>

              <ul className="space-y-4">
                {[
                  "Local market knowledge — we know your audience",
                  "Affordable pricing designed for Ethiopian SMBs",
                  "Dedicated team with fast turnaround",
                  "Results-focused — we measure what matters",
                  "Ongoing support after your project launches",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      color="#A8E320"
                      className="shrink-0 mt-0.5"
                    />
                    <span className="text-[var(--dim)] text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-primary mt-10 inline-flex">
                About Our Team <ArrowRight size={16} />
              </Link>
            </SectionReveal>

            {/* Right: visual card stack */}
            <SectionReveal delay={200}>
              <div className="relative">
                {/* Back card */}
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[var(--green)]/5 border border-[var(--green)]/10" />
                {/* Main card */}
                <div className="relative card p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/zukal_logo.jpg"
                      alt="Zukal Studio"
                      width={56}
                      height={56}
                      className="rounded-xl"
                    />
                    <div>
                      <p className="font-display font-semibold text-[var(--text)]">
                        Zukal Studio
                      </p>
                      <p className="text-[var(--dim)] text-xs">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        label: "Projects Completed",
                        value: "0+",
                        color: "#A8E320",
                      },
                      {
                        label: "Client Retention",
                        value: "95%",
                        color: "#A8E320",
                      },
                      {
                        label: "Avg. Response Time",
                        value: "< 2hrs",
                        color: "#A8E320",
                      },
                    ].map(({ label, value, color }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between py-3 border-b border-[#2A2A2A] last:border-0"
                      >
                        <span className="text-[var(--dim)] text-sm">
                          {label}
                        </span>
                        <span
                          className="font-display font-semibold text-lg"
                          style={{ color }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-[var(--green)]/10 border border-[var(--green)]/20">
                    <p className="text-[var(--green)] text-xs font-mono tracking-wide uppercase mb-1">
                      Our Mission
                    </p>
                    <p className="text-[var(--text)] text-sm leading-relaxed">
                      "To be the most valuable creative partner for every
                      Ethiopian business."
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <p className="eyebrow">Testimonials</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[var(--dim)] max-w-lg mb-14">
              Don't just take our word for it — here's what real clients say
              about working with Zukal Studio.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, text, stars }, i) => (
              <SectionReveal key={name} delay={i * 100}>
                <div className="card p-7 hover:border-[var(--green)]/30 transition-all duration-300 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array(stars)
                      .fill(0)
                      .map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          fill="#A8E320"
                          color="#A8E320"
                        />
                      ))}
                  </div>
                  {/* Quote */}
                  <p className="text-[var(--dim)] text-sm leading-relaxed flex-1 mb-6">
                    "{text}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display text-[var(--dark)]"
                      style={{ background: "#A8E320" }}
                    >
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-[var(--text)] text-sm font-semibold">
                        {name}
                      </p>
                      <p className="text-[var(--dim)] text-xs">{role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <div className="relative rounded-3xl overflow-hidden bg-[var(--green)]/10 border border-[var(--green)]/20 p-12 md:p-20 text-center">
              {/* Background decoration */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(168,227,32,0.3) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <span className="eyebrow justify-center">
                  Get Started Today
                </span>
                <h2 className="font-display font-bold text-4xl md:text-6xl text-[var(--text)] mb-6">
                  Your Business Deserves
                  <br />
                  <span className="text-gradient">to Be Seen.</span>
                </h2>
                <p className="text-[var(--dim)] max-w-xl mx-auto mb-10 text-lg">
                  Join 10+ Ethiopian businesses that choose Zukal Studio to grow
                  their digital presence. Let's build something great together.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn-primary text-base px-10 py-4"
                  >
                    Let's Start <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="btn-outline text-base px-10 py-4"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
