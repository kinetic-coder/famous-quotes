import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "TechCorp - Building the Future of Technology",
    template: "%s | TechCorp"
  },
  description: "TechCorp delivers innovative digital solutions that transform businesses and drive growth. Expert web development, mobile apps, and cloud solutions with exceptional user experiences.",
  keywords: [
    "web development",
    "mobile apps",
    "cloud solutions",
    "digital transformation",
    "technology consulting",
    "software development",
    "user experience",
    "TechCorp"
  ],
  authors: [{ name: "TechCorp" }],
  creator: "TechCorp",
  metadataBase: new URL("https://techcorp.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techcorp.vercel.app",
    title: "TechCorp - Building the Future of Technology",
    description: "TechCorp delivers innovative digital solutions that transform businesses and drive growth. Expert web development, mobile apps, and cloud solutions.",
    siteName: "TechCorp",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechCorp - Professional Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCorp - Building the Future of Technology",
    description: "TechCorp delivers innovative digital solutions that transform businesses and drive growth.",
    images: ["/og-image.jpg"],
    creator: "@techcorp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
