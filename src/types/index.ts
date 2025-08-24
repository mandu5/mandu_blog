// Navigation Types
export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

// Profile Types
export interface ProfileItem {
  name?: string;
  nameKey?: string;
  value: string;
  icon?: string;
  link?: string;
}

export interface GameItem extends ProfileItem {
  code?: string;
}

// Education & Career Types
export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface CareerItem {
  company: string;
  position: string;
  period: string;
  team?: string;
  achievements: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  period: string;
  description?: string[];
}

export interface AwardItem {
  name: string;
  date: string;
  description: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  organization: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  period: string;
  theme: "primary" | "secondary" | "accent";
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
  content?: string;
  tags?: string[];
  author?: {
    name: string;
    avatar: string;
    followers: number;
  };
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isFollowing?: boolean;
}

// Language Types
export type Language = "ko" | "en";

// Theme Types
export type Theme = "light" | "dark";

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
