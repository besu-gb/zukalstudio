import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import Script from "next/script";

/* -------------------------------------------------------
   Root metadata — used for SEO and social sharing
------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Zukal Studio | Creative Agency — Ethiopia",
    template: "%s | Zukal Studio",
  },
  verification: {
    google: "c30B9NAvvYwg_g1ks7s6uyCwKQ7h9T9HyWyW_18Efu8",
  },
  description:
    "Zukal Studio is an Ethiopian creative agency specializing in web solutions, content creation, and social media management for small and medium businesses.",
  keywords: [
    "Zukal Studio",
    "Ethiopian creative agency",
    "web development Ethiopia",
    "social media management Ethiopia",
    "content creation Addis Ababa",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zukalstudio.vercel.app",
    siteName: "Zukal Studio",
    title: "Zukal Studio | Creative Agency — Ethiopia",
    description:
      "Web solutions, content creation & social media management for Ethiopian businesses.",
    images: [{ url: "/main.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zukal Studio | Creative Agency",
    description: "Growing Ethiopian businesses through digital creativity.",
    images: ["/main.png"],
  },
};

/* -------------------------------------------------------
   Layout wraps every page with Navbar + Footer
------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Clash Display + Satoshi via Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* JetBrains Mono via Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-16ZJJNVKFW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-16ZJJNVKFW');
          `}
        </Script>
      </head>
      <body>
        {/* Ambient cursor glow — adds interactive feel */}
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
