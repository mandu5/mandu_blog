"use client";
import React from "react";
import { Header, Footer } from "@/components";

const Blog: React.FC = () => {
  return (
    <>
      <Header />
      <section className="max-container">
        <h1 className="head-text">
          <span>Blog</span>
        </h1>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
