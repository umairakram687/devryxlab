import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Devryxlab — Digital Agency & Software Studio",
    template: "%s | Devryxlab",
  },
  description:
    "Devryxlab builds high-performance web apps, mobile experiences, and digital products that drive growth. Expert team in React, Next.js, and modern cloud infrastructure.",
  keywords: [
    "Devryxlab",
    "digital agency",
    "software studio",
    "web development",
    "mobile apps",
    "React",
    "Next.js",
    "UI/UX design",
    "cloud solutions",
  ],
  authors: [{ name: "Devryxlab Team", url: "https://devryxlab.com" }],
  creator: "Devryxlab",
  publisher: "Devryxlab",
  metadataBase: new URL("https://devryxlab.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devryxlab.com",
    siteName: "Devryxlab",
    title: "Devryxlab — Digital Agency & Software Studio",
    description:
      "High-performance web apps, mobile experiences, and digital products that drive growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devryxlab — Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devryxlab — Digital Agency & Software Studio",
    description:
      "High-performance web apps, mobile experiences, and digital products that drive growth.",
    images: ["/og-image.png"],
    creator: "@devryxlab",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google-site-verification-placeholder", // Replace with actual code from GSC
  },
  category: "technology",
};

export function generateViewport() {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#00f3ff" }, // Cyber Cyan
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  };
}

import { Providers } from "@/components/providers/Providers";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Devryxlab",
              "url": "https://devryxlab.com",
              "logo": "https://devryxlab.com/logo.png",
              "description": "Devryxlab builds high-performance web apps, mobile experiences, and digital products.",
              "sameAs": [
                "https://twitter.com/devryxlab",
                "https://github.com/devryxlab",
                "https://linkedin.com/company/devryxlab"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "availableLanguage": "en"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

