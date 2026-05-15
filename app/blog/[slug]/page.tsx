import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  initial: string;
  color: string;
  content: string[];
};

const POSTS: BlogPost[] = [
  {
    slug: "5-reasons-ethiopian-business-website-2025",
    title: "5 Reasons Your Ethiopian Business Needs a Website in 2025",
    excerpt:
      "In 2025, not having a website means losing customers to competitors who do. We break down exactly why every Ethiopian SMB needs to be online — and how to start.",
    category: "Web Tips",
    date: "May 10, 2025",
    readTime: "6 min read",
    initial: "WB",
    color: "#A8E320",
    content: [
      "A website isn’t just “online presence” — it’s your most reliable way to convert searchers into customers.",
      "If people can’t find you on Google, they’ll find someone else. A simple, fast, trustworthy site helps you win attention in seconds.",
      "Start with the basics: clear services, proof (clients/results), and a strong call-to-action.",
    ],
  },
  {
    slug: "grow-instagram-following-ethiopian-business",
    title: "How to Grow Your Instagram Following as an Ethiopian Business",
    excerpt:
      "A step-by-step guide to building a real, engaged audience on Instagram — written specifically for Ethiopian brands.",
    category: "Social Media",
    date: "April 28, 2025",
    readTime: "5 min read",
    initial: "IG",
    color: "#A8E320",
    content: [
      "Your followers don’t need more posts — they need more clarity. Post around one promise: who you help and how.",
      "Consistency beats bursts. Build a simple content rhythm you can sustain for 30–60 days.",
      "Use captions and calls-to-action that invite action: ask a question, offer a next step, and respond fast.",
    ],
  },
  {
    slug: "good-business-website-7-must-have-features",
    title: "What Makes a Good Business Website? 7 Must-Have Features",
    excerpt:
      "Not all websites are equal. Here are the 7 things every business website needs to actually bring in customers.",
    category: "Web Tips",
    date: "April 15, 2025",
    readTime: "4 min read",
    initial: "WW",
    color: "#90D410",
    content: [
      "A good business site answers questions instantly: what you do, who it’s for, and why you’re trustworthy.",
      "Use clear navigation, strong page structure, and visible contact options so users can act without hunting.",
      "Don’t forget the customer journey: from first impression → proof → CTA → conversion.",
    ],
  },
  {
    slug: "content-marketing-ethiopian-smbs-where-to-start",
    title: "Content Marketing for Ethiopian SMBs: Where to Start",
    excerpt:
      "Content marketing sounds complex, but it doesn't have to be. Here's a simple starting guide for small businesses in Ethiopia.",
    category: "Content",
    date: "March 30, 2025",
    readTime: "7 min read",
    initial: "CM",
    color: "#B8F050",
    content: [
      "Choose topics based on customer questions you already hear in calls, chats, and visits.",
      "Write short, helpful content that makes one thing easier — then reuse it across channels.",
      "Measure what matters: views, saves, and inquiries (not just likes).",
    ],
  },
  {
    slug: "facebook-vs-instagram-which-platform-best",
    title: "Facebook vs Instagram: Which Platform is Best for Your Business?",
    excerpt:
      "Both platforms work, but one might be better for your specific business. We break down the difference.",
    category: "Social Media",
    date: "March 18, 2025",
    readTime: "5 min read",
    initial: "FB",
    color: "#A8E320",
    content: [
      "Facebook is often stronger for community and broad reach, especially for local awareness.",
      "Instagram is often stronger for visual storytelling and brand identity when you can post consistently.",
      "Pick the platform where your customers already pay attention — then commit for long enough to learn.",
    ],
  },
  {
    slug: "write-website-that-converts",
    title: "How to Write a Website That Converts Visitors into Customers",
    excerpt:
      "Great design gets people to stay. Great copy gets them to act. Learn the basics of conversion copywriting.",
    category: "Web Tips",
    date: "March 5, 2025",
    readTime: "6 min read",
    initial: "CW",
    color: "#C8F240",
    content: [
      "Conversion copy removes uncertainty: it clearly states value, proof, and the next step.",
      "Write in plain language and organize content for scanning — headlines, bullets, and short paragraphs.",
      "Add a clear CTA per page and keep it visible near the point of decision.",
    ],
  },
  {
    slug: "local-seo-appear-google-maps",
    title: "Local SEO: How to Get Your Business to Appear on Google Maps",
    excerpt:
      "When someone searches for your type of business in Addis Ababa, you want to show up first. Here's how.",
    category: "SEO",
    date: "February 20, 2025",
    readTime: "8 min read",
    initial: "SE",
    color: "#A8E320",
    content: [
      "Local SEO starts with accurate business details everywhere your customers search.",
      "Create or optimize your Google Business Profile and keep categories + services consistent.",
      "Get reviews from real customers and make it easy for visitors to find you instantly.",
    ],
  },
];

function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="pt-28 pb-16 grid-bg relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 left-0 w-[520px] h-[520px] opacity-10 rounded-full"
          style={{ background: `radial-gradient(circle, ${post.color}, transparent 70%)` }}
        />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
            <div
              className="h-56 md:h-full rounded-2xl flex items-center justify-center text-6xl font-bold font-display"
              style={{
                background: `${post.color}10`,
                border: `1px solid ${post.color}30`,
                color: post.color,
              }}
            >
              {post.initial}
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--green)] border border-[var(--green)]/30 px-3 py-1 rounded-full mb-4">
                <span aria-hidden>🏷️</span>
                {post.category}
              </div>

              <h1 className="font-display font-bold text-3xl md:text-5xl text-[var(--text)] mb-4">
                {post.title}
              </h1>

              <p className="text-[var(--dim)] text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-3 text-xs text-[var(--dim)] font-mono mb-6">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <div className="relative mt-2 hidden md:block">
                <Image
                  src="/blog.svg"
                  alt="Zukal Blog"
                  width={240}
                  height={240}
                  className="opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#0E0E0E]">
        <div className="container">
          <article className="card p-8 md:p-12 rounded-2xl border border-[#2A2A2A]">
            <div className="space-y-5">
              {post.content.map((p, idx) => (
                <p key={idx} className="text-[var(--dim)] leading-relaxed text-base">
                  {p}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
