export const siteConfig = {
  name: "mandu5",
  description: "Personal portfolio website of Youngmin, a Software Developer from South Korea",
  url: "https://mandu5.com",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/mandu5",
    linkedin: "https://www.linkedin.com/in/mandu5",
    email: "rhdudals0505@naver.com",
  },
  contact: {
    location: "Seoul, South Korea",
    phone: "(+82) 1098554562",
    email: "rhdudals0505@naver.com",
  },
  navigation: {
    main: [
      { href: "/links", labelKey: "nav.links" },
      { href: "/profile", labelKey: "nav.profile" },
      { href: "/projects", labelKey: "nav.projects" },
      { href: "/blog", labelKey: "nav.blog" },
    ],
  },
  metadata: {
    title: {
      default: "mandu5",
      template: "%s | mandu5",
    },
    description: "Personal portfolio website of Youngmin, a Software Developer from South Korea",
    keywords: [
      "portfolio",
      "developer",
      "software engineer",
      "web development",
      "frontend",
      "backend",
      "AI engineer",
      "machine learning",
    ],
    authors: [{ name: "Youngmin" }] as const,
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
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
  },
} as const;
