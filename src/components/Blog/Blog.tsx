"use client";
import React from "react";
import Link from "next/link";
import { blogPosts } from "@/constants";

const Blog = () => {
  return (
    <>
      <h1 className="py-16 text-heading mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
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
