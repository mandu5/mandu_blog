"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BLOG_POSTS_DATA, PROJECTS_DATA } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const { t, language } = useLanguage();

  // 최신 블로그 포스트 3개
  const recentPosts = BLOG_POSTS_DATA.slice(0, 3);

  // 주요 프로젝트 3개
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("home.name").charAt(0)}
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">{t("home.greeting")} </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("home.name")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              {t("home.title")} {t("home.location")} 🇰🇷
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {language === "ko"
                ? "AI와 머신러닝에 대한 열정을 바탕으로 혁신적인 솔루션을 만들어가는 개발자입니다."
                : "Passionate developer creating innovative solutions with AI and machine learning."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {language === "ko" ? "프로젝트 보기" : "View Projects"}
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {language === "ko" ? "블로그 읽기" : "Read Blog"}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ko" ? "안녕하세요!" : "Hello!"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ko"
                ? "저는 AI와 머신러닝에 깊은 관심을 가진 개발자입니다. 새로운 기술을 배우고 적용하는 것을 좋아하며, 사용자에게 가치 있는 솔루션을 제공하는 것을 목표로 합니다."
                : "I'm a developer with a deep interest in AI and machine learning. I love learning and applying new technologies, aiming to provide valuable solutions to users."}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === "ko" ? "프론트엔드" : "Frontend"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === "ko"
                  ? "React, Next.js, TypeScript로 사용자 친화적인 웹 애플리케이션을 구축합니다."
                  : "Building user-friendly web applications with React, Next.js, and TypeScript."}
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === "ko" ? "AI/ML" : "AI/ML"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === "ko"
                  ? "머신러닝과 데이터 사이언스를 활용한 지능형 솔루션을 개발합니다."
                  : "Developing intelligent solutions using machine learning and data science."}
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === "ko" ? "백엔드" : "Backend"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === "ko"
                  ? "Node.js, Python으로 확장 가능한 서버 시스템을 구축합니다."
                  : "Building scalable server systems with Node.js and Python."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ko" ? "주요 프로젝트" : "Featured Projects"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === "ko" ? "최근에 작업한 프로젝트들을 소개합니다." : "Here are some of my recent projects."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">{project.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    {t("projects.viewGithub")}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              {language === "ko" ? "모든 프로젝트 보기" : "View All Projects"}
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ko" ? "최신 블로그 포스트" : "Latest Blog Posts"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === "ko"
                ? "최근에 작성한 기술 블로그 포스트들입니다."
                : "Here are my recent technical blog posts."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium"
                >
                  {language === "ko" ? "읽기" : "Read More"} →
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              {language === "ko" ? "모든 포스트 보기" : "View All Posts"}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === "ko" ? "함께 작업해요!" : "Let's Work Together!"}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === "ko"
              ? "새로운 프로젝트나 협업 기회에 대해 이야기해보고 싶으시다면 언제든 연락주세요."
              : "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/links"
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              {language === "ko" ? "연락처 보기" : "Get In Touch"}
            </Link>
            <Link
              href="/profile"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              {language === "ko" ? "이력서 보기" : "View Resume"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
