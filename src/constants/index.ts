import {
  NavigationLink,
  SocialLink,
  EducationItem,
  CareerItem,
  CertificateItem,
  AwardItem,
  Project,
  BlogPost,
} from "@/types";

// Icon Paths
const ICONS = {
  CONTACT: "/icons/contact.svg",
  GITHUB: "/icons/github.svg",
  LINKEDIN: "/icons/linkedin.svg",
  BLOG: "/icons/blog.svg",
  CODEFORCES: "/icons/codeforces.svg",
  ATCODER: "/icons/atcoder.svg",
  TOPCODER: "/icons/topcoder.svg",
  BOJ: "/icons/boj.svg",
  MAPLE: "/icons/maple.svg",
  SOLVED_AC: "/icons/solved-ac.svg",
  LEETCODE: "/icons/leetcode.svg",
  HACKERRANK: "/icons/hackerrank.svg",
} as const;

// Navigation Configuration
export const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "/links", labelKey: "nav.links" },
  { href: "/profile", labelKey: "nav.profile" },
  { href: "/projects", labelKey: "nav.projects" },
  { href: "/blog", labelKey: "nav.blog" },
];

// Social Links Configuration
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Contact",
    icon: ICONS.CONTACT,
    link: "mailto:rhdudals0505@naver.com",
  },
  {
    name: "GitHub",
    icon: ICONS.GITHUB,
    link: "https://github.com/mandu5",
  },
  {
    name: "LinkedIn",
    icon: ICONS.LINKEDIN,
    link: "https://www.linkedin.com/in/mandu5",
  },
];

// Education Data
export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Pennsylvania State University",
    degree: "B.S. in Software Engineering",
    period: "2024 - Present",
    location: "Pennsylvania, United States",
  },
  {
    institution: "Xi'an Jiaotong Liverpool University",
    degree: "B.E. in Computer Science and Technology",
    period: "2020 - 2022",
    location: "Suzhou, Jiangsu, China",
  },
  {
    institution: "Indus International School Bangalore",
    degree: "High School Diploma, International Baccalaureate",
    period: "2011 - 2019",
    location: "Bangalore, India",
  },
];

// Career Data
export const CAREER_DATA: CareerItem[] = [
  {
    company: "R.O.K, MND",
    position: "UI/UX Designer",
    period: "08/2022 - 01/2024",
    team: "",
    achievements: [
      "Re-architected website structure using code minification, lazy loading, and image compression to reduce page load times by 40%.",
      "Implemented fully responsive UI designs that improved user retention and engagement.",
    ],
  },
];

// Awards Data
export const AWARDS_DATA: AwardItem[] = [
  {
    name: "LG AImers",
    date: "06/2024 - 08/2024",
    description: "LG AI Research - Ranked in the top 5.5% among 1,400 participants in an Anomaly Detection competition",
  },
];

// Certificates Data
export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    title: "Google Machine Learning Bootcamp",
    issuer: "Google Developers Group",
    period: "06/2024 - 10/2024",
    description: [
      "Engineered a regression model for used car price prediction, increasing accuracy by 33% through advanced feature engineering and hyperparameter tuning.",
      "Deployed a financial advisor model using Python and TensorFlow achieving scalable production API integration with sub-second response times.",
      "Utilized scikit-learn, XGBoost, and LightGBM to drive data-driven decision-making on real-world datasets.",
    ],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.ai",
    period: "05/2024 - 08/2024",
    description: [],
  },
  {
    title: "Kakao Enterprise Military AI-SW Intermediate Course",
    issuer: "Kakao",
    period: "09/2024 - 11/2024",
    description: [],
  },
  {
    title: "IBM Data Science Specialization",
    issuer: "IBM",
    period: "08/2023 - 10/2023",
    description: [],
  },
  {
    title: "Ne(O)rdinary Hackathon",
    issuer: "CMC 10th App Launching Club, SoftSquared",
    period: "04/2022 - 05/2022",
    description: [
      "Developed a schedule-sharing platform for small theaters, resolving conflicting user preferences and improving access to play schedules.",
    ],
  },
];

// Projects Data
export const PROJECTS_DATA: Project[] = [
  {
    id: "financial-advisor-chatbot",
    title: "Financial Advisor Chatbot",
    organization: "Google Machine Learning Bootcamp",
    description:
      "Built an AI-driven chatbot using google/gemma-2-2b-it to deliver personalized financial recommendations. Leveraged Parameter-Efficient Fine-Tuning (PEFT) with LoRA and 4-bit quantization to reduce memory overhead and improve model performance.",
    image: "/assets/images/project1.jpg",
    tags: ["Python", "TensorFlow", "PEFT", "LoRA", "Gemma"],
    link: "https://www.kaggle.com/models/mandu5/financial-advisor",
    period: "08/2024 - 10/2024",
    theme: "primary",
  },
  {
    id: "jaksimfriend",
    title: "JakSimFriend",
    organization: "SoftSquared",
    description:
      "Led front-end development of a cross-platform React Native application for group self-improvement challenges. Integrated data visualization and social login features to enhance user experience and engagement.",
    image: "/assets/images/project2.jpg",
    tags: ["React Native", "JavaScript", "Data Visualization", "Social Login"],
    link: "https://github.com/JakSimFriend/frontend",
    period: "06/2024 - 08/2024",
    theme: "secondary",
  },
];

// Profile Data
export const PROFILE_DATA = {
  contacts: [
    {
      nameKey: "common.email",
      value: "rhdudals0505@naver.com",
      icon: ICONS.CONTACT,
      link: "mailto:rhdudals0505@naver.com",
    },
    {
      nameKey: "common.github",
      value: "mandu5",
      icon: ICONS.GITHUB,
      link: "https://github.com/mandu5",
    },
    {
      nameKey: "common.linkedin",
      value: "in/mandu5",
      icon: ICONS.LINKEDIN,
      link: "https://www.linkedin.com/in/mandu5/",
    },
  ],
  sns: [
    {
      nameKey: "common.blog",
      value: "Portfolio Blog",
      icon: ICONS.BLOG,
      link: "https://mandu5-7446mgauy-mandu5s-projects.vercel.app/cv",
    },
  ],
  programming: [
    {
      nameKey: "common.solvedAc",
      value: "gosmain05",
      icon: ICONS.SOLVED_AC,
      link: "https://solved.ac/profile/gosmain05",
    },
    {
      nameKey: "common.baekjoon",
      value: "gosmain05",
      icon: ICONS.BOJ,
      link: "https://www.acmicpc.net/user/gosmain05",
    },
    {
      nameKey: "common.codeforces",
      value: "mandu5",
      icon: ICONS.CODEFORCES,
      link: "https://codeforces.com/profile/mandu5",
    },
    {
      nameKey: "common.atcoder",
      value: "rhdudals0505",
      icon: ICONS.ATCODER,
      link: "https://atcoder.jp/users/rhdudals0505",
    },
    {
      nameKey: "common.topcoder",
      value: "mandu0505",
      icon: ICONS.TOPCODER,
      link: "https://profiles.topcoder.com/mandu0505",
    },
    {
      nameKey: "common.leetcode",
      value: "mandu5",
      icon: ICONS.LEETCODE,
      link: "https://leetcode.com/u/mandu5/",
    },
    {
      nameKey: "common.hackerrank",
      value: "rhdudals0505",
      icon: ICONS.HACKERRANK,
      link: "https://www.hackerrank.com/profile/rhdudals0505",
    },
  ],
  games: {
    main: [
      {
        nameKey: "common.maplestory",
        value: "만칸 (Lv.251 Kain)",
        icon: ICONS.MAPLE,
        link: "https://maplestory.nexon.com",
      },
    ],
  },
} as const;

// Blog Posts Data
export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "nextjs-14-features",
    title: "Next.js 14의 새로운 기능들",
    date: "2024-03-15",
    excerpt: "Next.js 14에서 소개된 새로운 기능들과 개선사항에 대해 알아봅니다.",
    slug: "nextjs-14-features",
  },
  {
    id: "typescript-with-react",
    title: "TypeScript와 함께하는 React 개발",
    date: "2024-03-10",
    excerpt: "TypeScript를 사용하여 더 안전하고 효율적인 React 개발 방법을 소개합니다.",
    slug: "typescript-with-react",
  },
];

// Contact Information
export const CONTACT_INFO = {
  location: "Seoul, South Korea",
  phone: "(+82) 1098554562",
  email: "rhdudals0505@naver.com",
  links: [
    { name: "LinkedIn", url: "http://www.linkedin.com/in/mandu5" },
    { name: "Github", url: "https://github.com/mandu5" },
  ],
} as const;

// Language Skills
export const LANGUAGE_SKILLS = [
  { language: "English", level: "native" },
  { language: "Korean", level: "native" },
  { language: "Japanese", level: "Working knowledge" },
] as const;

// Legacy exports for backward compatibility (to be removed in future)
export const navLinks = NAVIGATION_LINKS;
export const socialLinks = SOCIAL_LINKS;
export const educationData = EDUCATION_DATA;
export const careerData = CAREER_DATA;
export const awardsData = AWARDS_DATA;
export const certificatesData = CERTIFICATES_DATA;
export const projectsData = PROJECTS_DATA;
export const profileData = PROFILE_DATA;
export const blogPosts = BLOG_POSTS_DATA;
export const contactData = CONTACT_INFO;
export const languagesData = LANGUAGE_SKILLS;
