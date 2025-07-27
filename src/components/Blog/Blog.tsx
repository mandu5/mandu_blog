"use client";
import React from "react";
import Link from "next/link";
import { BLOG_POSTS_DATA } from "@/constants";
import { BlogPost } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-subheading mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-semibold">
          {post.title}
        </h2>
      </Link>
      <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
      <p className="text-body text-gray-600 dark:text-gray-300 mt-2">{post.excerpt}</p>
    </article>
  );
};

const Blog: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="py-16 text-heading mb-8">{t("blog.title")}</h1>
      <div className="space-y-8">
        {BLOG_POSTS_DATA.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Blog;
