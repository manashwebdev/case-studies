import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/projects";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const homeTitle = "Manash Khati | Full stack developer case studies";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: "%s | Manash Khati" },
  description: site.description,
  openGraph: {
    title: homeTitle,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title: homeTitle, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <footer className="border-t border-ink">
          <div className="wrap py-4 font-mono text-sm font-medium">
            <a
              href={site.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center underline underline-offset-4 hover:text-accent"
            >
              More projects
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
