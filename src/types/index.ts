export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

export interface CVItem {
  title: string;
  subtitle?: string;
  period: string;
  description?: string[];
  location?: string;
}

export interface AwardItem {
  name: string;
  date: string;
  desc: string;
}

export interface Project {
  theme: string;
  name: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
  title: string;
  period?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export interface ProfileItem {
  name: string;
  value: string;
  icon?: string;
  link?: string;
}
export interface GameItem extends ProfileItem {
  code?: string;
}
