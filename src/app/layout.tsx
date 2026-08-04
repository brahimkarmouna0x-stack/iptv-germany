import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HashScrollManager from "@/components/shared/HashScrollManager";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { getPhoneNumber } from "@/lib/settings";
import Analytics from "@/components/analytics/Analytics";
import WebVitals from "@/components/analytics/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptv-germany.com"),
  applicationName: "IPTV Germany",
  title: {
    default:
      "IPTV Germany: 31.000+ Sender in 4K | Sofortige Aktivierung",
    template: "%s | IPTV Germany",
  },
  description:
    "Premium IPTV in Deutschland: über 31.000 TV-Sender, Filme und Serien in 4K, ohne Unterbrechungen. Sofortige Aktivierung und schnelle Server bei IPTV Germany.",
  keywords: [
    "iptv abo",
    "iptv abo deutschland",
    "iptv deutschland",
    "bestes iptv",
    "premium iptv deutschland",
    "iptv 4k",
    "günstiges iptv",
    "iptv kaufen",
    "iptv 4k kaufen",
    "iptv smarters pro",
    "iptv anbieter",
    "iptv sender",
  ],
  authors: [{ name: "IPTV Germany" }],
  // hreflang is emitted per-page via metadata.alternates; here we declare the
  // site's primary content language for crawlers.
  alternates: {
    languages: {
      "de-DE": "https://iptv-germany.com",
      "x-default": "https://iptv-germany.com",
    },
  },
  manifest: "/site.webmanifest",
  // `?v=8` busts aggressive browser favicon caching after the 2026-08-04 logo refresh.
  icons: {
    icon: [
      { url: "/favicon.ico?v=8", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=8", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=8", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png?v=8", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png?v=8", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png?v=8", type: "image/png", sizes: "192x192" },
      { url: "/favicon-256x256.png?v=8", type: "image/png", sizes: "256x256" },
    ],
    shortcut: ["/favicon.ico?v=8"],
    apple: [
      { url: "/apple-touch-icon.png?v=8", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png?v=8", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-167x167.png?v=8", sizes: "167x167", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png?v=8",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://iptv-germany.com",
    siteName: "IPTV Germany",
    title:
      "IPTV Germany: 31.000+ Sender in 4K",
    description:
      "Stabiles 4K-Streaming, über 31.000 Sender und keine Unterbrechungen.",
    images: [
      {
        url: "https://iptv-germany.com/images/logo-iptv-streaming.png",
        width: 1200,
        height: 630,
        alt: "IPTV Germany – Premium IPTV-Abonnement in Deutschland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IPTV Germany: 31.000+ Sender in 4K",
    description:
      "Stabiles 4K-Streaming, über 31.000 Sender und keine Unterbrechungen.",
    images: ["https://iptv-germany.com/images/logo-iptv-streaming.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console verification for the iptv-germany.com property.
  verification: {
    google: ["H7gKJISItEHjJYDZB0QjYE5Ji31M9HLd0sNQFBUKSHk"],
  },
};

// Theme color + color scheme belong in the viewport export in Next.js 16.
export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneNumber = await getPhoneNumber();
  return (
    <html
      lang="de"
      className={`h-full antialiased ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema(phoneNumber)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Analytics (env-gated, afterInteractive) + Core Web Vitals reporting */}
        <Analytics />
        <WebVitals />

        {/* Skip-to-content link for keyboard users — first focusable element */}
        <a
          href="#main-content"
          id="skip-to-content"
          className="fixed -top-40 left-4 z-[9999] rounded-xl bg-rouge-500 px-6 py-3 font-black text-blanc-50 shadow-lg transition-all focus:top-4 focus:outline-2 focus:outline-france-400"
        >
          Ga naar inhoud
        </a>

        <NavBar />
        <HashScrollManager />

        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
