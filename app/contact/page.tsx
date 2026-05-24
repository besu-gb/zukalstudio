"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

/* Contact info cards */
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email Us",
    value: "zukalstudio@gmail.com",
    href: "mailto:zukalstudio@gmail.com",
  },
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: "+251 972115853",
    href: "https://wa.me/251972115853",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Addis Ababa, Ethiopia",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat, 9am – 6pm EAT",
    href: null,
  },
];

const SOCIALS = [
  {
    icon: Instagram,
    href: "https://instagram.com/zukalstudio",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://twitter.com/zukalstudio", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/zukal-studio",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/zukalstudio",
    label: "Facebook",
  },
];

const SERVICES = [
  "Web Development",
  "Content Creation",
  "Social Media Management",
  "Brand Identity",
  "Video Production",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Update any field value */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* Simulate form submission */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        console.log(
          "Failed to send message: " + (data.message || "Unknown error"),
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

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
            <p className="eyebrow">Get in Touch</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-[var(--text)] max-w-3xl mb-6">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing Together</span>
            </h1>
            <p className="text-[var(--dim)] text-xl max-w-xl leading-relaxed">
              Ready to grow your business? Fill in the form below or reach out
              directly. We'll get back to you within 24 hours.
            </p>
          </SectionReveal>
          <div className="relative left-9 w-full flex items-center justify-center lg:w-full hidden lg:block">
            <Image
              src="/contact.svg"
              alt="Zukal Contact Image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* ── Main Contact Area ── */}
      <section className="section mt-[-50px]">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* ── Left: Info ── */}
            <div className="lg:col-span-2 space-y-5 ">
              <SectionReveal className="space-y-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="card p-5 flex items-start gap-4 hover:border-[var(--green)]/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--green)]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} color="#A8E320" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text)] text-sm font-medium hover:text-[var(--green)] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[var(--text)] text-sm font-medium">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </SectionReveal>

              <SectionReveal delay={200}>
                <div className="card p-6">
                  <p className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {SOCIALS.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 rounded-xl border border-[#2A2A2A] flex items-center justify-center text-[var(--dim)] hover:text-[var(--green)] hover:border-[var(--green)] transition-all"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div className="rounded-2xl bg-[var(--green)]/10 border border-[var(--green)]/20 p-6">
                  <p className="text-[var(--green)] font-display font-semibold mb-2">
                    Free Consultation
                  </p>
                  <p className="text-[var(--dim)] text-sm mb-4">
                    Not sure what you need? Book a free 30-minute call and let's
                    figure it out together.
                  </p>
                  <a
                    href="https://wa.me/251911234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    WhatsApp Us <ArrowRight size={15} />
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <SectionReveal delay={100}>
                {submitted ? (
                  /* Success state */
                  <div className="card p-12 rounded-2xl text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--green)]/20 border border-[var(--green)]/40 flex items-center justify-center mx-auto mb-6">
                      <Send size={32} color="#A8E320" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-[var(--text)] mb-4">
                      Message Sent!
                    </h2>
                    <p className="text-[var(--dim)] mb-8">
                      Thank you for reaching out. We'll get back to you within
                      24 hours. Can't wait to work with you!
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          budget: "",
                          message: "",
                        });
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  /* Contact form */
                  <div className="card p-8 md:p-10 rounded-2xl">
                    <h2 className="font-display font-bold text-2xl text-[var(--text)] mb-8">
                      Tell Us About Your Project
                    </h2>

                    <div className="space-y-5">
                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <label className="block">
                          <span className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-2 block">
                            Your Name *
                          </span>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Mekdes Alemu"
                            required
                            className="w-full bg-[var(--dark)] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--green)] transition-colors placeholder:text-[#444]"
                          />
                        </label>
                        <label className="block">
                          <span className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-2 block">
                            Email Address *
                          </span>
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                            className="w-full bg-[var(--dark)] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--green)] transition-colors placeholder:text-[#444]"
                          />
                        </label>
                      </div>

                      {/* Phone */}
                      <label className="block">
                        <span className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-2 block">
                          Phone / WhatsApp
                        </span>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+251 9XX XXX XXX"
                          className="w-full bg-[var(--dark)] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--green)] transition-colors placeholder:text-[#444]"
                        />
                      </label>

                      {/* Service + Budget row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <label className="block">
                          <span className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-2 block">
                            Service Interested In
                          </span>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-[var(--dark)] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--green)] transition-colors"
                          >
                            <option value="">Select a service</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="block">
                          <span className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-2 block">
                            Budget Range (ETB)
                          </span>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-[var(--dark)] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--green)] transition-colors"
                          >
                            <option value="">Select budget</option>
                            <option>5,000</option>
                            <option>5,000 – 15,000</option>
                            <option>15,000 – 30,000</option>
                            <option>30,000+</option>
                            <option>Not sure yet</option>
                          </select>
                        </label>
                      </div>

                      {/* Message */}
                      <label className="block">
                        <span className="text-xs font-mono text-[var(--dim)] uppercase tracking-wide mb-2 block">
                          Tell Us About Your Project *
                        </span>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us what your business does, what you need, and what results you're hoping for..."
                          required
                          className="w-full bg-[var(--dark)] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--green)] transition-colors placeholder:text-[#444] resize-none"
                        />
                      </label>

                      {/* Submit */}
                      <button
                        onClick={handleSubmit}
                        disabled={
                          loading ||
                          !formData.name ||
                          !formData.email ||
                          !formData.message
                        }
                        className="btn-primary w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[var(--dark)]/30 border-t-[var(--dark)] rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[var(--dim)] text-xs">
                        We respond within 24 hours. Or{" "}
                        <a
                          href="https://wa.me/251911234567"
                          className="text-[var(--green)] hover:underline"
                        >
                          WhatsApp us directly
                        </a>{" "}
                        for a faster response.
                      </p>
                    </div>
                  </div>
                )}
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
