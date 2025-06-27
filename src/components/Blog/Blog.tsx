"use client";
import React from "react";
import Link from "next/link";

const posts = [
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
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <>
      <h1 className="py-16 text-heading mb-8">블로그</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-subheading mb-2 hover:text-blue-600 transition-colors duration-200 font-semibold">
                {post.title}
              </h2>
            </Link>
            <time className="text-sm text-gray-500">{post.date}</time>
            <p className="text-body text-gray-600 mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Blog;
