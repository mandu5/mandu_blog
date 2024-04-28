import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ManduTown",
  description: "Software Engineer Mandu's personal website & blog",
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        href: "/images/favicon.png",
        sizes: "25px",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300/20">{children}</body>
    </html>
  );
}
