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
  { school: "서강대학교", major: "컴퓨터공학과 학부 졸업", period: "2018. 3 – 2025. 2" },
].map((e) => ({ title: e.school, subtitle: e.major, period: e.period }));

export const careerData: CVItem[] = [
  {
    company: "넥슨코리아",
    position: "소프트웨어 엔지니어",
    period: "2025. 1 – 현재",
    team: "인텔리전스랩스 알고리즘연구팀",
    details: ["프로그래밍 대회 기획 및 알고리즘 문제 연구개발", "사내 분야불문 여러 최적화 문제의 해결"],
  },
  // ... (기타 경력 데이터)
].map((c) => ({ title: c.company, subtitle: `${c.position} | ${c.team}`, period: c.period, description: c.details }));

export const awardsData: AwardItem[] = [
  { name: "삼성 대학생 프로그래밍 경진대회 (SCPC) 2024", date: "2024. 8. 31", desc: "개인, 4등상" },
  // ... (기타 수상 데이터)
];

export const profileData = {
  contacts: [
    { name: "이메일 (개인)", value: "me@mandu.com", icon: contact, link: "mailto:me@mandu.com" },
    { name: "GitHub", value: "mandu5", icon: github, link: "https://github.com/mandu5" },
    { name: "LinkedIn", value: "in/mandu5", icon: linkedin, link: "https://www.linkedin.com/in/mandu5/" },
  ],
  services: [
    { name: "블로그", value: "blog.mandu.com", icon: github, link: "https://blog.mandu.com" },
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
        name: "메이플스토리 (오로라)",
        value: "싶프트 (Lv.279 아크)",
        icon: maple,
        link: "https://maplestory.nexon.com",
      },
    ],
    other: [{ name: "기타 게임", value: "생각나는 대로 업데이트 예정입니다.", icon: github, link: "" }],
  },
};

export const projectsData: Project[] = [
  {
    title: "Next.js 14의 새로운 기능들",
    theme: "btn-back-green",
    name: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and TypeScript",
    image: "/assets/images/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "https://example.com",
  },
  {
    title: "Next.js 14의 새로운 기능들",
    theme: "btn-back-blue",
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and skills",
    image: "/assets/images/project2.jpg",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://example.com",
  },
];

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
