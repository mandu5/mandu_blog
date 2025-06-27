// Icon imports
const contact = "/icons/contact.svg";
const github = "/icons/github.svg";
const linkedin = "/icons/linkedin.svg";
const codeforces = "/icons/codeforces.svg";
const atcoder = "/icons/atcoder.svg";
const topcoder = "/icons/topcoder.svg";
const boj = "/icons/boj.svg";
const maple = "/icons/maple.svg";

interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface Project {
  theme: string;
  name: string;
  description: string;
  link: string;
}

interface Competitive {
  theme: string;
  name: string;
  icon: string;
  tier: string;
  nickName: string;
  rate: string;
  link: string;
}

interface Game {
  name: string;
  value: string;
  icon: string;
  link: string;
  code?: string;
}

export const skillsInfo: string[] = [];

export const experiencesInfo: Experience[] = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: github,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: github,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: ["Developing and maintaining web applications using React.js and other related technologies."],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: github,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: ["Implementing responsive design and ensuring cross-browser compatibility."],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: github,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: ["Developing and maintaining web applications using React.js and other related technologies."],
  },
];

export const projectsInfo: Project[] = [
  {
    theme: "btn-back-green",
    name: "JaksimFriend",
    description: "Developed a web application.",
    link: "https://github.com/mandu5",
  },
  {
    theme: "btn-back-blue",
    name: "Twitproview",
    description: "Developed a web application.",
    link: "https://github.com/mandu5",
  },
  {
    theme: "btn-back-pink",
    name: "Holoschedule",
    description: "Developed a web application.",
    link: "https://github.com/mandu5",
  },
  {
    theme: "btn-back-black",
    name: "DatePP",
    description: "Developed a web application.",
    link: "https://github.com/mandu5",
  },
];

export const competitiveInfo: Competitive[] = [
  {
    theme: "btn-back-orange",
    name: "Codeforces",
    icon: codeforces,
    tier: "MASTER",
    nickName: "mandu5",
    rate: "2000",
    link: "https://github.com/mandu5",
  },
  {
    theme: "btn-back-yellow",
    name: "Atcoder",
    icon: atcoder,
    tier: "MASTER",
    nickName: "mandu5",
    rate: "2038",
    link: "https://github.com/mandu5",
  },
  {
    theme: "btn-back-green",
    name: "Topcoder",
    icon: topcoder,
    tier: "MASTER",
    nickName: "mandu5",
    rate: "2000",
    link: "https://github.com/mandu5",
  },
  {
    theme: "btn-back-blue",
    name: "Baekjoon",
    icon: boj,
    tier: "MASTER",
    nickName: "mandu5",
    rate: "2000",
    link: "https://github.com/mandu5",
  },
];

export const gamesInfo: Game[] = [
  {
    name: "Maplestory",
    value: "썸무최0고",
    icon: maple,
    link: "https://maple.gg/u/%EC%8C%88%EB%AC%B4%EC%B5%9C0%EA%B3%A0",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Contact",
    icon: contact,
    link: "mailto:rhdudals0505@naver.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/mandu5",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/mandu5/",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company: "Starbucks",
    icon: github,
    date: "March 2020 - April 2021",
  },
  {
    title: "React Native Developer",
    company: "Tesla",
    icon: github,
    date: "Jan 2021 - Feb 2022",
  },
  {
    title: "Web Developer",
    company: "Shopify",
    icon: github,
    date: "Jan 2022 - Jan 2023",
  },
  {
    title: "Full stack Developer",
    company: "Meta",
    icon: github,
    date: "Jan 2023 - Present",
  },
];

export const profileInfo = [
  {
    name: "Email (Personal)",
    value: "rhdudals0505@naver.com",
    icon: contact,
    link: "mailto:rhdudals0505@naver.com",
  },
  {
    name: "GitHub",
    value: "mandu5",
    icon: github,
    link: "https://github.com/mandu5",
  },
  {
    name: "LinkedIn",
    value: "mandu5",
    icon: linkedin,
    link: "https://www.linkedin.com/in/mandu5/",
  },
];

export const contactsInfo = [
  { name: "이메일 (개인)", value: "me@mandu.com", icon: contact, link: "mailto:me@mandu.com" },
  { name: "이메일 (솔브드)", value: "mandu@solved.ac", icon: contact, link: "mailto:mandu@solved.ac" },
  { name: "X (Twitter)", value: "@mandu", icon: github, link: "https://twitter.com/mandu" },
  { name: "Discord", value: "mandu", icon: github, link: "https://discord.com/users/mandu" },
  { name: "GitHub", value: "mandu", icon: github, link: "https://github.com/mandu5" },
];

export const servicesInfo = [
  { name: "블로그", value: "blog.mandu.com", icon: github, link: "https://blog.mandu.com" },
  { name: "solved.ac", value: "solved.ac", icon: github, link: "https://solved.ac" },
  { name: "mai", value: "mai.mandu.com", icon: github, link: "https://mai.mandu.com" },
];

export const snsInfo = [
  { name: "Bluesky", value: "@mandu.sky", icon: github, link: "https://bsky.app/profile/mandu.sky" },
  { name: "LinkedIn", value: "mandu", icon: linkedin, link: "https://linkedin.com/in/mandu5" },
  { name: "Facebook", value: "mandu", icon: github, link: "https://facebook.com/mandu" },
  { name: "Instagram", value: "@mandu", icon: github, link: "https://instagram.com/mandu" },
  { name: "Threads", value: "@mandu", icon: github, link: "https://threads.net/@mandu" },
  { name: "YouTube", value: "mandu", icon: github, link: "https://youtube.com/@mandu" },
  { name: "Steam", value: "mandu", icon: github, link: "https://steamcommunity.com/id/mandu" },
];

export const programmingInfo = [
  { name: "npm", value: "mandu", icon: github, link: "https://npmjs.com/~mandu" },
  { name: "Stack Overflow", value: "mandu (1,926)", icon: github, link: "https://stackoverflow.com/users/mandu" },
];

export const cpInfo = [
  { name: "Baekjoon OJ", value: "mandu (#98)", icon: boj, link: "https://acmicpc.net/user/mandu" },
  { name: "solved.ac", value: "mandu (2,743)", icon: github, link: "https://solved.ac/profile/mandu" },
  { name: "Codeforces", value: "mandu (2,128)", icon: codeforces, link: "https://codeforces.com/profile/mandu" },
  { name: "AtCoder", value: "mandu (2,039)", icon: atcoder, link: "https://atcoder.jp/users/mandu" },
  { name: "Topcoder", value: "mandu (1,821)", icon: topcoder, link: "https://topcoder.com/members/mandu" },
];

export const designInfo = [{ name: "Behance", value: "mandu", icon: github, link: "https://behance.net/mandu" }];

export const gamesMainInfo = [
  { name: "Steam", value: "shiftpsh", icon: github, code: "steamcode123", link: "https://steamcommunity.com/id/mandu" },
  {
    name: "maimai DX International",
    value: "ｓｏｌｖｅｄａｃ",
    icon: github,
    code: "7061399728945",
    link: "https://maimai.com",
  },
  {
    name: "작혼: 리치 마작",
    value: "한국/글로벌 서버 shiftpsh (◇작걸 1/▽작호 2)",
    icon: github,
    code: "80149226",
    link: "https://mahjong.com",
  },
  {
    name: "메이플스토리 KMS",
    value: "싶프트 (Lv.279 아크) 오로라",
    icon: maple,
    code: "",
    link: "https://maplestory.nexon.com",
  },
];

export const gamesOtherInfo = [
  { name: "기타 게임", value: "생각나는 대로 업데이트 예정입니다.", icon: github, code: "", link: "" },
];
