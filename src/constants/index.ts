import { NavLink, SocialLink, CVItem, AwardItem, Project, BlogPost, GameItem } from "@/types";

const contact = "/icons/contact.svg";
const github = "/icons/github.svg";
const linkedin = "/icons/linkedin.svg";
const codeforces = "/icons/codeforces.svg";
const atcoder = "/icons/atcoder.svg";
const topcoder = "/icons/topcoder.svg";
const boj = "/icons/boj.svg";
const maple = "/icons/maple.svg";

export const navLinks: NavLink[] = [
  { href: "/about", label: "링크" },
  { href: "/cv", label: "이력" },
  { href: "/projects", label: "작업" },
  { href: "/blog", label: "블로그" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Contact",
    icon: "/icons/contact.svg",
    link: "mailto:rhdudals0505@naver.com",
  },
  // ... (기존 socialLinks 데이터)
];

export const educationData: CVItem[] = [
  {
    school: "Pennsylvania State University",
    major: "B.S. in Software Engineering",
    period: "2024 - Present",
    location: "Pennsylvania, United States",
  },
  {
    school: "Xi'an Jiaotong Liverpool University",
    major: "B.E. in Computer Science and Technology",
    period: "2020 - 2022",
    location: "Suzhou, Jiangsu, China",
  },
  {
    school: "Indus International School Bangalore",
    major: "High School Diploma, International Baccalaureate",
    period: "2011 - 2019",
    location: "Bangalore, India",
  },
].map((e) => ({ title: e.school, subtitle: e.major, period: e.period, location: e.location }));

export const careerData: CVItem[] = [
  {
    company: "R.O.K, MND",
    position: "UI/UX Designer",
    period: "08/2022 - 01/2024",
    team: "",
    details: [
      "Re-architected website structure using code minification, lazy loading, and image compression to reduce page load times by 40%.",
      "Implemented fully responsive UI designs that improved user retention and engagement.",
    ],
  },
].map((c) => ({ title: c.company, subtitle: c.position, period: c.period, description: c.details }));

export const awardsData: AwardItem[] = [
  {
    name: "LG AImers",
    date: "06/2024 - 08/2024",
    desc: "LG AI Research - Ranked in the top 5.5% among 1,400 participants in an Anomaly Detection competition",
  },
];

export const certificatesData: CVItem[] = [
  {
    title: "Google Machine Learning Bootcamp",
    subtitle: "Google Developers Group",
    period: "06/2024 - 10/2024",
    description: [
      "Engineered a regression model for used car price prediction, increasing accuracy by 33% through advanced feature engineering and hyperparameter tuning.",
      "Deployed a financial advisor model using Python and TensorFlow achieving scalable production API integration with sub-second response times.",
      "Utilized scikit-learn, XGBoost, and LightGBM to drive data-driven decision-making on real-world datasets.",
    ],
  },
  {
    title: "Deep Learning Specialization",
    subtitle: "DeepLearning.ai",
    period: "05/2024 - 08/2024",
    description: [],
  },
  {
    title: "Kakao Enterprise Military AI-SW Intermediate Course",
    subtitle: "Kakao",
    period: "09/2024 - 11/2024",
    description: [],
  },
  {
    title: "IBM Data Science Specialization",
    subtitle: "IBM",
    period: "08/2023 - 10/2023",
    description: [],
  },
  {
    title: "Ne(O)rdinary Hackathon",
    subtitle: "CMC 10th App Launching Club, SoftSquared",
    period: "04/2022 - 05/2022",
    description: [
      "Developed a schedule-sharing platform for small theaters, resolving conflicting user preferences and improving access to play schedules.",
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "Financial Advisor Chatbot",
    theme: "btn-back-green",
    name: "Google Machine Learning Bootcamp",
    description:
      "Built an AI-driven chatbot using google/gemma-2-2b-it to deliver personalized financial recommendations. Leveraged Parameter-Efficient Fine-Tuning (PEFT) with LoRA and 4-bit quantization to reduce memory overhead and improve model performance.",
    image: "/assets/images/project1.jpg",
    tags: ["Python", "TensorFlow", "PEFT", "LoRA", "Gemma"],
    link: "https://www.kaggle.com/models/mandu5/financial-advisor",
    period: "08/2024 - 10/2024",
  },
  {
    title: "JakimFriend",
    theme: "btn-back-blue",
    name: "SoftSquared",
    description:
      "Led front-end development of a cross-platform React Native application for group self-improvement challenges. Integrated data visualization and social login features to enhance user experience and engagement.",
    image: "/assets/images/project2.jpg",
    tags: ["React Native", "JavaScript", "Data Visualization", "Social Login"],
    link: "https://github.com/JakSimFriend/frontend",
    period: "06/2024 - 08/2024",
  },
];

export const contactData = {
  location: "Seoul, South Korea",
  phone: "(+82) 1098554562",
  email: "rhdudals0505@naver.com",
  links: [
    { name: "LinkedIn", url: "http://www.linkedin.com/in/mandu5" },
    { name: "Github", url: "https://github.com/mandu5" },
  ],
};

export const languagesData = [
  { language: "English", level: "native" },
  { language: "Korean", level: "native" },
  { language: "Japanese", level: "Working knowledge" },
];

export const profileData = {
  contacts: [
    { name: "Email", value: "me@mandu.com", icon: contact, link: "mailto:me@mandu.com" },
    { name: "GitHub", value: "mandu5", icon: github, link: "https://github.com/mandu5" },
    { name: "LinkedIn", value: "in/mandu5", icon: linkedin, link: "https://www.linkedin.com/in/mandu5/" },
  ],
  services: [
    { name: "Blog", value: "blog.mandu.com", icon: github, link: "https://blog.mandu.com" },
    { name: "solved.ac", value: "solved.ac", icon: boj, link: "https://solved.ac/profile/mandu" },
  ],
  sns: [{ name: "X (Twitter)", value: "@mandu", icon: github, link: "https://twitter.com/mandu" }],
  programming: [
    { name: "npm", value: "mandu", icon: github, link: "https://npmjs.com/~mandu" },
    { name: "Stack Overflow", value: "mandu (1,926)", icon: github, link: "https://stackoverflow.com/users/mandu" },
  ],
  cp: [
    { name: "Baekjoon OJ", value: "mandu (#98)", icon: boj, link: "https://acmicpc.net/user/mandu" },
    { name: "Codeforces", value: "mandu (2,128)", icon: codeforces, link: "https://codeforces.com/profile/mandu" },
    { name: "AtCoder", value: "mandu (2,039)", icon: atcoder, link: "https://atcoder.jp/users/mandu" },
    { name: "Topcoder", value: "mandu (1,821)", icon: topcoder, link: "https://topcoder.com/members/mandu" },
  ],
  design: [{ name: "Behance", value: "mandu", icon: github, link: "https://behance.net/mandu" }],
  games: {
    main: [
      {
        name: "Maplestory M (Scania)",
        value: "만칸 (Lv.251 Kain)",
        icon: maple,
        link: "https://maplestory.nexon.com",
      },
    ],
  },
};

export const blogPosts: BlogPost[] = [
  {
    title: "Next.js 14의 새로운 기능들",
    date: "2024-03-15",
    excerpt: "Next.js 14에서 소개된 새로운 기능들과 개선사항에 대해 알아봅니다.",
    slug: "nextjs-14-features",
  },
  {
    title: "TypeScript와 함께하는 React 개발",
    date: "2024-03-10",
    excerpt: "TypeScript를 사용하여 더 안전하고 효율적인 React 개발 방법을 소개합니다.",
    slug: "typescript-with-react",
  },
];
