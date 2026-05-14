import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center grid-bg">
      <div className="text-center px-6">
        <p className="font-mono text-[var(--green)] text-sm tracking-widest uppercase mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-display font-bold text-7xl md:text-9xl text-gradient mb-4">
          Oops.
        </h1>
        <p className="text-[var(--dim)] text-xl max-w-md mx-auto mb-10">
          This page doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
