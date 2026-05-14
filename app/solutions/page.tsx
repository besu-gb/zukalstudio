import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Pen,
  Share2,
  TrendingUp,
  Search,
  Video,
  ArrowRight,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Zukal Studio's web solutions, content creation, social media management, and branding services for Ethiopian businesses.",
};

const SOLUTIONS = [
  {
    id: "web",
    icon: Globe,
    title: "Web Solutions",
    subtitle: "Beautiful websites that convert",
    description:
      "Your website is your most powerful sales tool. We design and build websites that are beautiful, fast, and built to turn visitors into customers. From landing pages to full business websites — we handle everything.",
    features: [
      "Custom website design no generic templates",
      "Custom systems to solve your unique business needs",
      "Custom built for speed and performance (fast loading)",
      "SEO-ready structure from day one",
      "Content management system (easy to update)",
      "Domain setup and hosting guidance",
      "1-month free support after launch",
    ],
    cta: "Start Your Website",
    color: "#A8E320",
  },
  {
    id: "content",
    icon: Pen,
    title: "Content Creation",
    subtitle: "Content that tells your story",
    description:
      "Great content builds trust and brings customers to you. We create blog posts, social media graphics, videos, and more — all tailored to your brand voice and your audience's needs.",
    features: [
      "Short-form content for social media (posts, reels, stories)",
      "Long-form content (blog posts, articles)",
      "Graphic design for social media and marketing materials",
      "Video content creation (product videos, brand stories)",
      "Content strategy and planning",
      "Content calendar management and scheduling",
    ],
    cta: "Get Content Help",
    color: "#A8E320",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Grow your audience consistently",
    description:
      "Social media done right takes time and skill. We manage your accounts so you can focus on running your business while we grow your following, drive engagement, and bring you more customers.",
    features: [
      "Full account management (Instagram, Facebook, TikTok)",
      "Daily/weekly posting schedule",
      "Community management and response",
      "Monthly analytics and reports",
      "Influencer collaboration support",
      "Hashtag and audience research",
    ],
    cta: "Grow My Social",
    color: "#A8E320",
  },
  {
    id: "brand",
    icon: TrendingUp,
    title: "Brand Identity",
    subtitle: "Stand out and be remembered",
    description:
      "A strong brand is more than a logo — it's how the world sees you. We create full brand identities that make your business look professional, trustworthy, and unique.",
    features: [
      "Logo design and brand mark",
      "Color palette and typography",
      "Brand guidelines document",
      "Business card and stationery design",
      "Social media profile design",
      "Brand voice and messaging guide",
      "2 rounds of revisions included",
    ],
    cta: "Build My Brand",
    color: "#A8E320",
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    subtitle: "Video content that drives action",
    description:
      "Video is the most engaging form of content online. We produce professional videos — from product showcases to brand stories — that make your business stand out.",
    features: [
      "Brand story videos",
      "Product / service showcase videos",
      "Social media reels and shorts",
      "Testimonial video production",
      "Script writing and storyboarding",
      "Professional editing and color grade",
      "Captions and subtitles included",
    ],
    cta: "Create a Video",
    color: "#A8E320",
  },
];

export default function SolutionsPage() {
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
            <p className="eyebrow">Our Solutions</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-[var(--text)] max-w-3xl mb-6">
              Everything You Need to{" "}
              <span className="text-gradient">Grow Online</span>
            </h1>
            <p className="text-[var(--dim)] text-xl max-w-2xl leading-relaxed mb-10">
              From building your first website to managing your social media,
              Zukal Studio is the one-stop creative partner for Ethiopian
              businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="btn-outline">
                See Pricing
              </Link>
            </div>
          </SectionReveal>
          <div className="relative left-[7rem] w-full flex items-center justify-center lg:w-full hidden lg:block">
            <Image src="/solution.svg" alt="Zukal Solutions Image" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* ── Solution Cards ── */}
      <section className="section">
        <div className="container space-y-24">
          {SOLUTIONS.map(
            (
              { id, icon: Icon, title, subtitle, description, features, cta },
              i,
            ) => (
              <SectionReveal key={id} delay={100}>
                <div
                  id={id}
                  className={`grid md:grid-cols-2 gap-12 items-start ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text side */}
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[var(--green)]/10 flex items-center justify-center mb-6">
                      <Icon size={26} color="#A8E320" />
                    </div>
                    <p className="text-[var(--green)] text-sm font-mono tracking-widest uppercase mb-2">
                      {subtitle}
                    </p>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--text)] mb-5">
                      {title}
                    </h2>
                    <p className="text-[var(--dim)] leading-relaxed mb-8">
                      {description}
                    </p>
                    <Link href="/contact" className="btn-primary">
                      {cta} <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  {/* Features card */}
                  <div className="card p-8 rounded-2xl">
                    <p className="text-[var(--dim)] text-xs font-mono tracking-widest uppercase mb-5">
                      What's included
                    </p>
                    <ul className="space-y-4">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            color="#A8E320"
                            className="shrink-0 mt-0.5"
                          />
                          <span className="text-[var(--dim)] text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ),
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#0E0E0E]">
        <div className="container text-center">
          <SectionReveal>
            <p className="eyebrow justify-center">Not sure where to start?</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-6">
              Let's Find the Right Solution for You
            </h2>
            <p className="text-[var(--dim)] max-w-lg mx-auto mb-10">
              Book a free 30-minute consultation call and we'll map out exactly
              what your business needs to grow.
            </p>
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
