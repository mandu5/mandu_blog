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
            <div className="min-h-screen bg-gradient-to-br from-primary-navy via-primary-navy to-primary-mint dark:from-background-dark dark:via-background-dark dark:to-background-dark transition-all duration-300">
              {/* Animated Background Elements */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Floating Clouds */}
                <div
                  className="absolute top-20 left-10 w-20 h-12 bg-white/10 rounded-full animate-float"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute top-40 right-20 w-16 h-10 bg-white/10 rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-60 left-1/4 w-24 h-14 bg-white/10 rounded-full animate-float"
                  style={{ animationDelay: "4s" }}
                ></div>

                {/* Moving Vehicles */}
                <div className="absolute bottom-20 left-0 w-16 h-8 bg-primary-mint/20 rounded-full animate-car-move"></div>
                <div
                  className="absolute bottom-32 left-0 w-20 h-6 bg-primary-mint/20 rounded-full animate-boat-move"
                  style={{ animationDelay: "5s" }}
                ></div>
                <div
                  className="absolute bottom-40 left-0 w-12 h-4 bg-primary-mint/20 rounded-full animate-plane-move"
                  style={{ animationDelay: "10s" }}
                ></div>

                {/* Water Waves */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-primary-mint/10 animate-wave"></div>
                <div
                  className="absolute bottom-2 left-0 w-full h-6 bg-primary-mint/5 animate-wave-reverse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <Header />
              <main className="relative z-10">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
