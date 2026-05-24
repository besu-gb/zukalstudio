import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Lightbulb } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zukal Studio — an Ethiopian creative agency on a mission to help local businesses grow online.",
};

const TEAM = [
  {
    name: "Besukal Gobena",
    role: "Founder & Full-Stack Developer",
    bio: "Passionate about building digital solutions that empower Ethiopian businesses to thrive online.",
    initial: "/besu.jpg",
  },
  {
    name: "Daniel wendimu",
    role: "Video Editor & Camera Operator",
    bio: "Bringing stories to life through compelling visuals that captivate and engage your audience.",
    initial: "/dani.jpg",
  },
  {
    name: "Aynalem Akeberegn",
    role: "Sales & Account Management",
    bio: "Passionate about helping businesses grow and succeed in the digital world.",
    initial: "/ayni.jpg",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Results First",
    description:
      "Everything we do is focused on one thing real, measurable results for your business. Not just pretty designs.",
  },
  {
    icon: Heart,
    title: "Local Passion",
    description:
      "We are proud Ethiopians building for Ethiopia. We know the culture, language, and what resonates locally.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description:
      "We push creative boundaries to deliver work that stands out and makes your brand memorable.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No hidden fees, no surprises. We keep you informed at every step of the process.",
  },
];

const MILESTONES = [
  {
    year: "2025",
    event: "Zukal Studio founded in Addis Ababa with a team of 3.",
  },
  {
    year: "2025",
    event:
      "Reached 3 clients and launched our social media management service.",
  },
  {
    year: "2025",
    event:
      "Expanded to a full creative agency online contractors, 0+ projects delivered.",
  },
  {
    year: "2025",
    event:
      "Recognized as one of Addis Ababa's top digital agencies for small & medium businesses.",
  },
  {
    year: "2026+",
    event:
      "Vision: Becoming the go-to creative partner for all Ethiopian businesses.",
  },
];

export default function AboutPage() {
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
        <div className="container relative z-10 flex">
          <SectionReveal>
            <p className="eyebrow">About Us</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-[var(--text)] max-w-3xl mb-6">
              We Are <span className="text-gradient">Zukal Studio</span>
            </h1>
            <p className="text-[var(--dim)] text-xl max-w-2xl leading-relaxed mb-10">
              A creative agency born in Ethiopia, built to help small and medium
              businesses thrive in the digital world. We combine local knowledge
              with world-class creative skills to deliver results that matter.
            </p>
            <Link href="/contact" className="btn-primary">
              Work With Us <ArrowRight size={16} />
            </Link>
          </SectionReveal>
          <div className="relative left-9 w-full flex items-center justify-center lg:w-full hidden lg:block">
            <Image src="/about.svg" alt="Zukal About Image" width={600} height={600} />
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section bg-[#0E0E0E]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="eyebrow">Our Story</p>
              <h2 className="font-display font-bold text-4xl text-[var(--text)] mb-6">
                Started with a Simple Belief
              </h2>
              <div className="space-y-4 text-[var(--dim)] leading-relaxed">
                <p>
                  Zukal Studio was born from a simple observation: Ethiopian
                  businesses had incredible products and services, but lacked
                  the digital tools to reach more customers. We decided to
                  change that.
                </p>
                <p>
                  Starting as a small team in Addis Ababa in 2021, we helped our
                  first clients build websites and manage their social media.
                  The results were immediate — businesses started getting more
                  inquiries, more customers, and more revenue.
                </p>
                <p>
                  Today, Zukal Studio is a growing creative agency serving 50+
                  businesses across Ethiopia. Our vision is clear: in the next
                  five years, we want to be the most valuable digital partner
                  for all Ethiopian businesses.
                </p>
              </div>
            </SectionReveal>

            {/* Timeline */}
            <SectionReveal delay={200}>
              <div className="space-y-6">
                {MILESTONES.map(({ year, event }, i) => (
                  <div key={year} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/30 flex items-center justify-center shrink-0">
                        <span className="text-[var(--green)] text-xs font-mono">
                          {year.slice(0, 2)}
                        </span>
                      </div>
                      {i < MILESTONES.length - 1 && (
                        <div className="w-px h-8 bg-[#2A2A2A] mt-1" />
                      )}
                    </div>
                    <div className="pt-2">
                      <p className="text-[var(--green)] text-sm font-mono font-medium mb-1">
                        {year}
                      </p>
                      <p className="text-[var(--dim)] text-sm">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <p className="eyebrow">Our Values</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-[var(--dim)] max-w-lg mb-14">
              Our values are not just words on a wall — they shape every
              decision we make and every project we deliver.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <SectionReveal key={title} delay={i * 80}>
                <div className="card p-6 hover:border-[var(--green)]/40 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green)]/10 flex items-center justify-center mb-5">
                    <Icon size={22} color="#A8E320" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[var(--text)] mb-3">
                    {title}
                  </h3>
                  <p className="text-[var(--dim)] text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section bg-[#0E0E0E]">
        <div className="container">
          <SectionReveal>
            <p className="eyebrow">Our Team</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-4">
              The People Behind Zukal
            </h2>
            <p className="text-[var(--dim)] max-w-lg mb-14">
              A passionate, skilled team dedicated to making your business shine
              online.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, bio, initial }, i) => (
              <SectionReveal key={name} delay={i * 100}>
                <div className="card p-7 text-center hover:border-[var(--green)]/30 transition-all duration-300">
                  <Image
                    src={initial}
                    alt={name}
                    width={280}
                    height={200}
                    className="rounded-2xl mx-auto mb-5"
                  />
                  <h3 className="font-display font-semibold text-lg text-[var(--text)] mb-1">
                    {name}
                  </h3>
                  <p className="text-[var(--green)] text-xs font-mono tracking-wide mb-4">
                    {role}
                  </p>
                  <p className="text-[var(--dim)] text-sm leading-relaxed">
                    {bio}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-[var(--dim)] max-w-lg mx-auto mb-10">
              Let's start a conversation about how Zukal Studio can help your
              business grow.
            </p>
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
