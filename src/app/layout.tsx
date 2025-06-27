import "./globals.css";
import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mandu5.com"),
  title: {
    default: "mandu5",
    template: "%s | mandu5",
  },
  description: "Personal portfolio website of Youngmin, a Software Developer from South Korea",
  keywords: ["portfolio", "developer", "software engineer", "web development", "frontend", "backend"],
  authors: [{ name: "Youngmin" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mandu5.com",
    siteName: "mandu5",
    title: "mandu5 - Software Developer",
    description: "Personal portfolio website of Youngmin, a Software Developer from South Korea",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "mandu5 portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mandu5 - Software Developer",
    description: "Personal portfolio website of Youngmin, a Software Developer from South Korea",
    images: ["/og-image.jpg"],
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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={workSans.variable}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
