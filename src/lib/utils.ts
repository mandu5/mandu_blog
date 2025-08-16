import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 * This ensures proper class merging and deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Formats a date string to a relative time format (e.g., "2 days ago")
 */
export function formatRelativeDate(date: string | Date): string {
  const now = new Date();
  const targetDate = new Date(date);
  const diffTime = Math.abs(now.getTime() - targetDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "오늘";
  if (diffDays === 1) return "어제";
  if (diffDays < 7) return `${diffDays}일 전`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`;
  return `${Math.floor(diffDays / 365)}년 전`;
}

/**
 * Formats a date string to a compact format (YYYY-MM-DD)
 */
export function formatCompactDate(date: string | Date): string {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

/**
 * Truncates text to a specified length and adds ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * Generates a slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Debounces a function call
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Checks if the current environment is development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

/**
 * Checks if the current environment is production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Safely accesses nested object properties
 */
export function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Formats file size in human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// 로컬 스토리지 기반 좋아요 시스템
const LIKED_POSTS_KEY = "liked_posts";
const COMMENT_RATE_LIMIT_KEY = "comment_rate_limit";

interface RateLimitData {
  timestamp: number;
  count: number;
}

// 로컬 스토리지에서 좋아요한 포스트 목록 가져오기
function getLikedPosts(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const likedPosts = localStorage.getItem(LIKED_POSTS_KEY);
    return likedPosts ? JSON.parse(likedPosts) : [];
  } catch (error) {
    console.error("Failed to get liked posts from localStorage:", error);
    return [];
  }
}

// 로컬 스토리지에 좋아요한 포스트 저장
function saveLikedPosts(likedPosts: string[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify(likedPosts));
  } catch (error) {
    console.error("Failed to save liked posts to localStorage:", error);
  }
}

// 좋아요 토글
export function toggleLike(postId: string): boolean {
  const likedPosts = getLikedPosts();
  const isLiked = likedPosts.includes(postId);

  if (isLiked) {
    // 좋아요 취소
    const newLikedPosts = likedPosts.filter((id) => id !== postId);
    saveLikedPosts(newLikedPosts);
    return false;
  } else {
    // 좋아요 추가
    const newLikedPosts = [...likedPosts, postId];
    saveLikedPosts(newLikedPosts);
    return true;
  }
}

// 사용자가 해당 포스트를 좋아요했는지 확인
export function isLikedByUser(postId: string): boolean {
  const likedPosts = getLikedPosts();
  return likedPosts.includes(postId);
}

// 좋아요 수 계산 (로컬 스토리지 기반)
export function getLikeCount(postId: string): number {
  const likedPosts = getLikedPosts();
  return likedPosts.filter((id) => id === postId).length;
}

// 댓글 작성 가능 여부 확인 (30분 제한)
export function canComment(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const rateLimitData = localStorage.getItem(COMMENT_RATE_LIMIT_KEY);
    if (!rateLimitData) return true;

    const data: RateLimitData = JSON.parse(rateLimitData);
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000; // 30분

    // 30분이 지났으면 리셋
    if (now - data.timestamp > thirtyMinutes) {
      localStorage.removeItem(COMMENT_RATE_LIMIT_KEY);
      return true;
    }

    return false;
  } catch (error) {
    console.error("Failed to check comment rate limit:", error);
    return true;
  }
}

// 댓글 작성 후 제한 설정
export function setCommentRateLimit(): void {
  if (typeof window === "undefined") return;

  try {
    const data: RateLimitData = {
      timestamp: Date.now(),
      count: 1,
    };
    localStorage.setItem(COMMENT_RATE_LIMIT_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to set comment rate limit:", error);
  }
}

// 댓글 작성
export function addComment(postId: string, comment: string): boolean {
  if (!canComment()) {
    return false;
  }

  setCommentRateLimit();
  return true;
}

// 댓글 수정/삭제를 위한 비밀번호 해시 생성
export function hashPassword(password: string): string {
  // 간단한 해시 함수 (실제로는 더 안전한 방법 사용)
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // 32bit 정수로 변환
  }
  return hash.toString();
}

// 댓글 비밀번호 검증
export function verifyCommentPassword(inputPassword: string, storedHash: string): boolean {
  return hashPassword(inputPassword) === storedHash;
}

// 댓글 데이터 구조
export interface CommentData {
  id: string;
  author: string;
  content: string;
  date: string;
  passwordHash: string;
  postId: string;
}

// 댓글 저장
export function saveComment(comment: CommentData): void {
  if (typeof window === "undefined") return;

  try {
    const commentsKey = `comments_${comment.postId}`;
    const existingComments = localStorage.getItem(commentsKey);
    const comments: CommentData[] = existingComments ? JSON.parse(existingComments) : [];

    comments.push(comment);
    localStorage.setItem(commentsKey, JSON.stringify(comments));
  } catch (error) {
    console.error("Failed to save comment:", error);
  }
}

// 댓글 목록 가져오기
export function getComments(postId: string): CommentData[] {
  if (typeof window === "undefined") return [];

  try {
    const commentsKey = `comments_${postId}`;
    const comments = localStorage.getItem(commentsKey);
    return comments ? JSON.parse(comments) : [];
  } catch (error) {
    console.error("Failed to get comments:", error);
    return [];
  }
}

// 댓글 삭제
export function deleteComment(postId: string, commentId: string, password: string): boolean {
  if (typeof window === "undefined") return false;

  try {
    const commentsKey = `comments_${postId}`;
    const comments: CommentData[] = getComments(postId);
    const comment = comments.find((c) => c.id === commentId);

    if (!comment) return false;

    if (!verifyCommentPassword(password, comment.passwordHash)) {
      return false;
    }

    const newComments = comments.filter((c) => c.id !== commentId);
    localStorage.setItem(commentsKey, JSON.stringify(newComments));
    return true;
  } catch (error) {
    console.error("Failed to delete comment:", error);
    return false;
  }
}

// 댓글 수정
export function editComment(postId: string, commentId: string, newContent: string, password: string): boolean {
  if (typeof window === "undefined") return false;

  try {
    const commentsKey = `comments_${postId}`;
    const comments: CommentData[] = getComments(postId);
    const commentIndex = comments.findIndex((c) => c.id === commentId);

    if (commentIndex === -1) return false;

    const comment = comments[commentIndex];
    if (!verifyCommentPassword(password, comment.passwordHash)) {
      return false;
    }

    comments[commentIndex] = {
      ...comment,
      content: newContent,
      date: new Date().toISOString(),
    };

    localStorage.setItem(commentsKey, JSON.stringify(comments));
    return true;
  } catch (error) {
    console.error("Failed to edit comment:", error);
    return false;
  }
}

// 댓글 수 가져오기
export function getCommentCount(postId: string): number {
  if (typeof window === "undefined") return 0;

  try {
    const comments = getComments(postId);
    return comments.length;
  } catch (error) {
    console.error("Failed to get comment count:", error);
    return 0;
  }
}
