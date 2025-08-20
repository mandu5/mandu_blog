"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BLOG_POSTS_DATA } from "@/constants";
import { BlogPost } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLikeCount, toggleLike, isLikedByUser, formatRelativeDate, getCommentCount } from "@/lib/utils";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setLikeCount(getLikeCount(post.id));
    setCommentCount(getCommentCount(post.id));
    setIsLiked(isLikedByUser(post.id));
  }, [post.id]);

  // 댓글 수와 좋아요 수를 주기적으로 업데이트
  useEffect(() => {
    if (!isClient) return;

    const updateCounts = () => {
      setLikeCount(getLikeCount(post.id));
      setCommentCount(getCommentCount(post.id));
    };

    // 초기 업데이트
    updateCounts();

    // 주기적 업데이트 (1초마다)
    const interval = setInterval(updateCounts, 1000);

    return () => clearInterval(interval);
  }, [post.id, isClient]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newLiked = toggleLike(post.id);
    setIsLiked(newLiked);
    setLikeCount(getLikeCount(post.id));
  };

  // 서버 사이드 렌더링 중에는 기본값 표시
  if (!isClient) {
    return (
      <article className="flex items-start gap-4 py-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        {/* 콘텐츠 */}
        <div className="flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400">{post.title}</h2>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{post.excerpt}</p>
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
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
    <article className="flex items-start gap-4 py-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      {/* 콘텐츠 */}
      <div className="flex-1">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400">{post.title}</h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{post.excerpt}</p>
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 ${isLiked ? "text-yellow-400" : "hover:text-yellow-400"}`}
          >
            <span className="text-lg">{isLiked ? "⭐" : "☆"}</span>
            <span>{likeCount}</span>
          </button>
          <div className="flex items-center gap-1">
            <span className="text-lg">💬</span>
            <span>{commentCount}</span>
          </div>
          <span>{formatRelativeDate(post.date)}</span>
        </div>
      </div>
    </article>
  );
};

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState("latest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const yearDropdownRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Overview 섹션의 댓글 수와 좋아요 수를 주기적으로 업데이트하기 위한 강제 리렌더링
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      // 강제 리렌더링을 위해 상태를 업데이트
      setSearchQuery((prev) => prev);
    }, 1000);

    return () => clearInterval(interval);
  }, [isClient]);

  // 선택된 연도의 활동 수 계산
  const getActivityCount = () => {
    return BLOG_POSTS_DATA.filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getFullYear() === selectedYear;
    }).length;
  };

  // 태그 사용 빈도 계산
  const getTagFrequency = () => {
    const tagCount: { [key: string]: number } = {};
    BLOG_POSTS_DATA.forEach((post) => {
      post.tags?.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    return tagCount;
  };

  // 상위 5개 태그 가져오기
  const getTopTags = () => {
    const tagFrequency = getTagFrequency();
    return Object.entries(tagFrequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([tag]) => tag);
  };

  // 모든 태그 수집
  const allTags = Array.from(new Set(BLOG_POSTS_DATA.flatMap((post) => post.tags || [])));
  const topTags = getTopTags();
  const displayedTags = showAllTags ? allTags : topTags;

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
        setShowYearDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags?.includes(tag));
    return matchesSearch && matchesTags;
  });

  // 정렬된 포스트
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortOrder) {
      case "latest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "popular":
        // 인기도는 현재 0으로 고정되어 있으므로 날짜순으로 정렬
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return 0;
    }
  });

  const getSortLabel = () => {
    switch (sortOrder) {
      case "latest":
        return "최신순";
      case "oldest":
        return "오래된순";
      case "popular":
        return "인기순";
      default:
        return "정렬";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* 커스텀 툴팁 */}
      {tooltip && (
        <div
          className="fixed z-50 px-2 py-1 text-xs text-white bg-black rounded shadow-lg pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translateX(-50%) translateY(-100%)",
          }}
        >
          {tooltip.text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4">
        {/* 헤더 탭 */}
        <div className="flex items-center gap-8 mb-8 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-4 px-2 text-gray-400 hover:text-gray-900 dark:hover:text-white ${
              activeTab === "overview" ? "text-gray-900 dark:text-white border-b-2 border-blue-500" : ""
            }`}
          >
            {t("blog.overview")}
          </button>
          <button
            onClick={() => setActiveTab("articles")}
            className={`pb-4 px-2 text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 ${
              activeTab === "articles" ? "text-gray-900 dark:text-white border-b-2 border-blue-500" : ""
            }`}
          >
            {t("blog.articles")}
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white text-xs px-2 py-1 rounded-full">
              {BLOG_POSTS_DATA.length}
            </span>
          </button>
        </div>

        {/* Overview 탭 */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Activity Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("blog.activities")}</h3>
                <div className="relative" ref={yearDropdownRef}>
                  <button
                    onClick={() => setShowYearDropdown(!showYearDropdown)}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                  >
                    {selectedYear}
                    <span className="text-sm">▼</span>
                  </button>

                  {showYearDropdown && (
                    <div className="absolute right-0 mt-2 w-20 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10">
                      {[2023, 2024, 2025, 2026].map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            setShowYearDropdown(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            year === 2023 ? "rounded-t-lg" : ""
                          } ${year === 2026 ? "rounded-b-lg" : ""}`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Activity Calendar */}
              <div className="mb-4 overflow-x-auto">
                <div className="grid grid-cols-53 gap-1 mb-2 min-w-[800px]">
                  {Array.from({ length: 53 }, (_, weekIndex) => (
                    <div key={weekIndex} className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      {weekIndex === 0
                        ? "Jan"
                        : weekIndex === 4
                        ? "Feb"
                        : weekIndex === 8
                        ? "Mar"
                        : weekIndex === 13
                        ? "Apr"
                        : weekIndex === 17
                        ? "May"
                        : weekIndex === 22
                        ? "Jun"
                        : weekIndex === 26
                        ? "Jul"
                        : weekIndex === 30
                        ? "Aug"
                        : weekIndex === 35
                        ? "Sep"
                        : weekIndex === 39
                        ? "Oct"
                        : weekIndex === 44
                        ? "Nov"
                        : weekIndex === 48
                        ? "Dec"
                        : ""}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-53 gap-1 min-w-[800px]">
                  {Array.from({ length: 53 }, (_, weekIndex) => (
                    <div key={weekIndex} className="grid grid-rows-7 gap-1">
                      {Array.from({ length: 7 }, (_, dayIndex) => {
                        const startDate = new Date(selectedYear, 0, 1);
                        const currentDate = new Date(startDate);
                        currentDate.setDate(startDate.getDate() + weekIndex * 7 + dayIndex);

                        // 해당 날짜에 블로그 글이 있는지 확인
                        const blogDates = BLOG_POSTS_DATA.map((post) => new Date(post.date));
                        const hasBlogOnDate = blogDates.some(
                          (date) =>
                            date.getFullYear() === currentDate.getFullYear() &&
                            date.getMonth() === currentDate.getMonth() &&
                            date.getDate() === currentDate.getDate(),
                        );

                        // 날짜가 유효한 범위인지 확인 (1월 1일부터 12월 31일까지)
                        const isValidDate = currentDate.getFullYear() === selectedYear;

                        const getActivityLevel = () => {
                          if (!isValidDate) return "bg-transparent";
                          if (!hasBlogOnDate) return "bg-gray-200 dark:bg-gray-700";
                          return "bg-blue-300"; // 1단계 색상
                        };

                        return (
                          <div
                            key={dayIndex}
                            className={`w-3 h-3 rounded-sm ${getActivityLevel()} cursor-pointer hover:opacity-80 transition-opacity`}
                            onMouseEnter={(e) => {
                              if (isValidDate) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setTooltip({
                                  text: hasBlogOnDate
                                    ? `1 activities on ${currentDate.toISOString().split("T")[0]}`
                                    : `0 activities on ${currentDate.toISOString().split("T")[0]}`,
                                  x: rect.left + rect.width / 2,
                                  y: rect.top - 10,
                                });
                              }
                            }}
                            onMouseLeave={() => setTooltip(null)}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {isClient ? getActivityCount() : 0} activities in {selectedYear}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{t("blog.less")}</span>
                  <div className="flex gap-1">
                    {["bg-gray-200 dark:bg-gray-700", "bg-blue-300", "bg-blue-400", "bg-blue-600"].map((color, i) => (
                      <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{t("blog.more")}</span>
                </div>
              </div>
            </div>

            {/* Popular Articles Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("blog.popularArticles")}</h3>
                <button
                  onClick={() => {
                    setActiveTab("articles");
                    setSortOrder("popular");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {t("blog.more")}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLOG_POSTS_DATA.sort((a, b) => (isClient ? getLikeCount(b.id) - getLikeCount(a.id) : 0))
                  .slice(0, 2)
                  .map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-32 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                          <span className="text-gray-400 dark:text-gray-500 text-2xl">📄</span>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              <span>{isClient ? getLikeCount(post.id) : 0}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>💬</span>
                              <span>{isClient ? getCommentCount(post.id) : 0}</span>
                            </div>
                            <span>{formatRelativeDate(post.date)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Recent Articles Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("blog.recentArticles")}</h3>
                <button
                  onClick={() => {
                    setActiveTab("articles");
                    setSortOrder("latest");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {t("blog.more")}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLOG_POSTS_DATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 2)
                  .map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-32 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                          <span className="text-gray-400 dark:text-gray-500 text-2xl">📄</span>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              <span>{isClient ? getLikeCount(post.id) : 0}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>💬</span>
                              <span>{isClient ? getCommentCount(post.id) : 0}</span>
                            </div>
                            <span>{formatRelativeDate(post.date)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Articles 탭 */}
        {activeTab === "articles" && (
          <>
            {/* 검색바 */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
                <input
                  type="text"
                  placeholder={t("blog.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="relative" ref={sortDropdownRef}>
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                >
                  {getSortLabel()}
                  <span className="text-sm">▼</span>
                </button>

                {showSortDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        setSortOrder("latest");
                        setShowSortDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                    >
                      {t("blog.sortLatest")}
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("popular");
                        setShowSortDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {t("blog.sortPopular")}
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("oldest");
                        setShowSortDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
                    >
                      {t("blog.sortOldest")}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 태그 필터 */}
            <div className="flex flex-wrap gap-2 mb-8">
              {displayedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    selectedTags.includes(tag)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
              {allTags.length > 5 && (
                <button
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {showAllTags ? t("blog.showLess") : t("blog.showMore")}
                </button>
              )}
            </div>

            {/* 블로그 포스트 목록 */}
            <div className="space-y-0">
              {sortedPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {sortedPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">{t("blog.noResults")}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
