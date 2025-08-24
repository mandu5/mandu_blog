"use client";

import React from "react";
import Link from "next/link";
import { usePostEngagement } from "@/hooks/usePostEngagement";
import { formatRelativeDate } from "@/lib/utils";
import { BlogPost } from "@/types";

export interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const { isClient, isLoading, likeCount, commentCount, isLiked, onToggleLike } = usePostEngagement(post.id);

  if (!isClient) {
    return (
      <article className="flex items-start gap-4 py-6 border-b border-white/20 last:border-b-0">
        <div className="flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-bold mb-2 text-white hover:text-primary-mint transition-colors duration-300">
              {post.title}
            </h2>
          </Link>
          <p className="text-white/80 mb-3 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-1">
              <span className="text-lg">☆</span>
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg">💬</span>
              <span>0</span>
            </div>
            <span>{formatRelativeDate(post.date)}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex items-start gap-4 py-6 border-b border-white/20 last:border-b-0">
      <div className="flex-1">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 text-white hover:text-primary-mint transition-colors duration-300">
            {post.title}
          </h2>
        </Link>
        <p className="text-white/80 mb-3 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleLike();
            }}
            className={`flex items-center gap-1 ${
              isLiked ? "text-primary-mint" : "hover:text-primary-mint transition-colors duration-300"
            }`}
            aria-label="Toggle like"
            disabled={isLoading}
          >
            <span className="text-lg">{isLiked ? "⭐" : "☆"}</span>
            <span>{likeCount}</span>
          </button>
          <div className="flex items-center gap-1" aria-label="Comment count">
            <span className="text-lg">💬</span>
            <span>{commentCount}</span>
          </div>
          <span>{formatRelativeDate(post.date)}</span>
        </div>
      </div>
    </article>
  );
};

export default React.memo(BlogPostCard);


