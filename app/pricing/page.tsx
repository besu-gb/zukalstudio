import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Crown,
  HelpCircle,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing from Zukal Studio. Choose the right plan for your business — no hidden fees.",
};

/* ─── Plans ─────────────────────────────────────────── */

const PLANS = [
  {
    icon: Zap,
    name: "Starter",
    tag: "For businesses that need visibility",
    price: "10,000",
    unit: "ETB / month",
    description:
      "Perfect for businesses that want to stay active online with professional content that attracts customers and builds trust.",
    features: [
      "Social media post design (8–12 posts/month)",
      "Basic branding style for posts",
      "Caption writing for posts",
      "Content calendar planning",
      "2 social media platforms management",
      "Hashtag research for reach growth",
      "Simple engagement support",
      "Monthly performance overview",
    ],
    cta: "Start Content Growth",
    href: "/contact?plan=content-starter",
    popular: false,
  },

  {
    icon: Shield,
    name: "Growth",
    tag: "Most Powerful & Recommended",
    price: "20,000",
    unit: "ETB / month",
    description:
      "The perfect package for real business growth. You get a professional website + consistent content creation.",
    features: [
      "Professional 5-8 page website",
      "Mobile responsive & fast performance",
      "Basic SEO optimization",
      "Content Management System ",
      "Social media setup",
      "12-16 branded posts per month",
      "Content strategy aligned with your website",
      "WhatsApp Business integration",
      "Monthly growth reports",
      "Priority support for updates",
    ],
    cta: "Start Growing Online",
    href: "/contact?plan=web-content-growth",
    popular: true,
  },

  {
    icon: Crown,
    name: "Full Digital Solution",
    tag: "For serious brands & long-term growth",
    price: "Custom",
    unit: "ETB / month",
    description:
      "A complete digital system for businesses that want full control of their online presence.",
    features: [
      "Everything in Web & Content Growth",
      "Advanced website or web application",
      "Full brand identity",
      "Advanced SEO strategy",
      "Full social media management",
      "Reels & video content creation support",
      "Lead generation system setup",
      "Monthly strategy meetings",
      "Dedicated priority support",
    ],
    cta: "Get Full Solution",
    href: "/contact?plan=enterprise",
    popular: false,
  },
];

/* ─── Retainer plans ─────────────────────────────────── */

const RETAINERS = [
  {
    name: "Landing Page",
    price: "8,000",
    desc: "Single page website with contact form and basic SEO setup.",
  },
  {
    name: "Portfolio Website",
    price: "10,000",
    desc: "Multi-page personal site to show skills and projects clearly.",
  },
  {
    name: "Personal Brand Website",
    price: "14,000",
    desc: "Website for personal identity with services and contact section.",
  },
  {
    name: "Business Website",
    price: "18,000",
    desc: "Company website with admin tools, forms and SEO setup included.",
  },
  {
    name: "Blog Website",
    price: "24,000",
    desc: "Website to publish posts with login and content management system.",
  },
  {
    name: "Admin Dashboard",
    price: "30,000",
    desc: "Control panel with charts, data view and user management tools.",
  },
  {
    name: "School Website",
    price: "35,000",
    desc: "School system for students, announcements and admin control panel.",
  },
  {
    name: "Booking Website",
    price: "46,000",
    desc: "System to handle bookings, schedules and availability management.",
  },
  {
    name: "E-commerce Website",
    price: "55,000",
    desc: "Online store with products, cart, checkout and admin dashboard.",
  },
  {
    name: "POS System",
    price: "60,000",
    desc: "Sales system for shops with receipts and inventory tracking tools.",
  },
  {
    name: "Inventory Management System",
    price: "75,000",
    desc: "System to track stock, manage products and view reports easily.",
  },
  {
    name: "CRM System",
    price: "90,000",
    desc: "Customer system to manage clients, leads and business relationships.",
  },
  {
    name: "HR Management System",
    price: "90,000",
    desc: "Employee system for payroll, attendance and staff management.",
  },
  {
    name: "LMS Platform",
    price: "95,000",
    desc: "Learning platform with courses, videos, quizzes and student access.",
  },
  {
    name: "Custom Web App",
    price: "Custom Quote",
    desc: "Fully custom system built based on your specific business needs.",
  },
];

/* ─── FAQ ─────────────────────────────────────────────── */

const FAQS = [
  {
    q: "Do I have to pay everything upfront?",
    a: "No. We typically work on a 50% deposit upfront and 50% on project completion. We're flexible and can discuss payment plans for larger projects.",
  },
  {
    q: "How long does a website take to build?",
    a: "A standard website takes 2–4 weeks from start to finish. Complex projects may take longer. We always give you a clear timeline before we begin.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes. We build websites with easy-to-use content management systems so you can update text, images, and content without needing technical knowledge.",
  },
  {
    q: "Do you work with businesses outside Addis Ababa?",
    a: "Absolutely. We work with businesses across Ethiopia. All our communication and project management can be done remotely.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "Every plan includes revision rounds. We work closely with you throughout the process and make sure you love the final result.",
  },
];

export default function PricingPage() {
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
        <div className="container relative z-10 text-center">
          <SectionReveal>
            <p className="eyebrow justify-center">Pricing</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-[var(--text)] mb-6">
              Simple & <span className="text-gradient">Transparent</span>{" "}
              Pricing
            </h1>
            <p className="text-[var(--dim)] text-xl max-w-2xl mx-auto leading-relaxed">
              No confusing fees. No surprises. Just honest pricing designed for
              Ethiopian businesses.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {PLANS.map(
              (
                {
                  icon: Icon,
                  name,
                  tag,
                  price,
                  unit,
                  description,
                  features,
                  cta,
                  href,
                  popular,
                },
                i,
              ) => (
                <SectionReveal key={name} delay={i * 100}>
                  <div
                    className={`card p-8 rounded-2xl relative flex flex-col h-full transition-all duration-300 ${
                      popular
                        ? "border-[var(--green)] bg-[var(--green)]/5"
                        : "hover:border-[var(--green)]/30"
                    }`}
                  >
                    {/* Popular badge */}
                    {popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--green)] text-[var(--dark)] text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                        Most Popular
                      </div>
                    )}

                    <div className="w-12 h-12 rounded-xl bg-[var(--green)]/10 flex items-center justify-center mb-5">
                      <Icon size={22} color="#A8E320" />
                    </div>

                    <p className="text-[var(--dim)] text-xs font-mono tracking-widest uppercase mb-1">
                      {tag}
                    </p>
                    <h2 className="font-display font-bold text-2xl text-[var(--text)] mb-3">
                      {name}
                    </h2>
                    <p className="text-[var(--dim)] text-sm mb-6 leading-relaxed">
                      {description}
                    </p>

                    <div className="mb-8">
                      <span className="font-display font-bold text-4xl text-gradient">
                        {price === "Custom" ? "Custom" : `${price} ETB`}
                      </span>
                      <span className="text-[var(--dim)] text-sm ml-2">
                        {unit}
                      </span>
                    </div>

                    <ul className="space-y-3 flex-1 mb-8">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle
                            size={15}
                            color="#A8E320"
                            className="shrink-0 mt-0.5"
                          />
                          <span className="text-[var(--dim)] text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={href}
                      className={
                        popular
                          ? "btn-primary justify-center"
                          : "btn-outline justify-center"
                      }
                    >
                      {cta} <ArrowRight size={15} />
                    </Link>
                  </div>
                </SectionReveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Monthly Retainers ── */}
      <section className="section bg-[#0E0E0E]">
        <div className="container">
          <SectionReveal>
            <p className="eyebrow">Monthly Plans</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-4">
              Ongoing Support Packages
            </h2>
            <p className="text-[var(--dim)] max-w-lg mb-12">
              Need consistent help every month? These retainer packages keep
              your digital presence fresh and growing continuously.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {RETAINERS.map(({ name, price, desc }, i) => (
              <SectionReveal key={name} delay={i * 80}>
                <div className="card relative p-6 h-full hover:border-[var(--green)]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <h3 className="font-display font-semibold text-xl text-[var(--text)] mb-2">
                    {name}
                  </h3>
                  <p className="flex-1 flex items-center">
                    <span>
                      <span className="font-display text-[15px] text-[var(--text)] mt-2 mb-1">
                        Starts
                      </span>
                      <br />
                      <span className="font-display font-bold text-2xl text-gradient">
                        {price}
                      </span>{" "}
                      ETB
                      <span className="text-sm text-[var(--dim)] font-normal">
                        /mo
                      </span>
                    </span>
                  </p>
                  <p className="text-[var(--dim)] text-sm leading-relaxed pt-4">
                    {desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={400}>
            <p className="text-center text-[var(--dim)] text-sm mt-8">
              All prices listed in Ethiopian Birr (ETB). USD pricing available
              on request.{" "}
              <Link
                href="/contact"
                className="text-[var(--green)] hover:underline"
              >
                Contact us for a custom quote.
              </Link>
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-12">
              Common Questions
            </h2>
          </SectionReveal>

          <div className="max-w-3xl space-y-5">
            {FAQS.map(({ q, a }, i) => (
              <SectionReveal key={q} delay={i * 80}>
                <div className="card p-7 hover:border-[var(--green)]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <HelpCircle
                      size={20}
                      color="#A8E320"
                      className="shrink-0 mt-0.5"
                    />
                    <div>
                      <h3 className="font-display font-semibold text-[var(--text)] mb-3">
                        {q}
                      </h3>
                      <p className="text-[var(--dim)] text-sm leading-relaxed">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-[#0E0E0E]">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] mb-6">
              Not Sure Which Plan is Right?
            </h2>
            <p className="text-[var(--dim)] max-w-lg mx-auto mb-10">
              Book a free call with us. We'll listen to your goals and recommend
              exactly what your business needs.
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
