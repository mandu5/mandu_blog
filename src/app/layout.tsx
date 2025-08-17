import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mandu - AI Engineer & Developer",
  description: "AI Engineer and Developer specializing in machine learning and web development",
  keywords: ["AI Engineer", "Machine Learning", "Web Development", "Portfolio"],
  authors: [{ name: "Mandu" }],
  creator: "Mandu",
  publisher: "Mandu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mandu - AI Engineer & Developer",
    description: "AI Engineer and Developer specializing in machine learning and web development",
    url: "https://your-domain.com",
    siteName: "Mandu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mandu - AI Engineer & Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandu - AI Engineer & Developer",
    description: "AI Engineer and Developer specializing in machine learning and web development",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-400 via-blue-500 to-cyan-600 relative overflow-hidden">
              {/* Global Animated Background Elements */}
              <div className="fixed inset-0 pointer-events-none z-0">
                {/* Floating Clouds */}
                <div className="absolute top-20 left-10 w-20 h-12 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-16 h-10 bg-white/15 rounded-full animate-float-delayed"></div>
                <div className="absolute top-60 left-1/4 w-24 h-14 bg-white/25 rounded-full animate-float-slow"></div>

                {/* Ocean Waves */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-400/30 to-transparent animate-wave"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-400/20 to-transparent animate-wave-delayed"></div>

                {/* Floating Elements */}
                <div className="absolute top-1/3 right-10 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce-gentle"></div>
                <div className="absolute top-2/3 left-10 w-6 h-6 bg-pink-400/30 rounded-full animate-bounce-gentle-delayed"></div>
              </div>

              <Header />
              <main className="flex-1 relative z-10">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
