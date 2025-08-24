import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "MANDU - AI Engineer Portfolio",
  description:
    "AI Engineer and Machine Learning Developer Portfolio showcasing cutting-edge projects and expertise in artificial intelligence.",
  keywords: ["AI Engineer", "Machine Learning", "Portfolio", "Developer", "Artificial Intelligence"],
  authors: [{ name: "MANDU" }],
  openGraph: {
    title: "MANDU - AI Engineer Portfolio",
    description: "AI Engineer and Machine Learning Developer Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MANDU - AI Engineer Portfolio",
    description: "AI Engineer and Machine Learning Developer Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <LoadingScreen />
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
