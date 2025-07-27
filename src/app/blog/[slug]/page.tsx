"use client";
import React, { useState, useEffect } from "react";
import { BLOG_POSTS_DATA } from "@/constants";
import { BlogPost, Comment } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import {
  toggleLike,
  getLikeCount,
  isLikedByUser,
  canComment,
  addComment,
  saveComment,
  getComments,
  deleteComment,
  editComment,
  hashPassword,
  CommentData,
  formatRelativeDate,
  formatCompactDate,
} from "@/lib/utils";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  const { t } = useLanguage();
  const [comments, setComments] = useState<CommentData[]>([]);
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentError, setCommentError] = useState("");
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [deleteCommentId, setDeleteCommentId] = useState<string | null>(null);
  const [deletePassword, setDeletePassword] = useState("");
  const [isClient, setIsClient] = useState(false);

  const post = BLOG_POSTS_DATA.find((p) => p.slug === params.slug);

  useEffect(() => {
    setIsClient(true);
    if (post) {
      setLikeCount(getLikeCount(post.id));
      setIsLiked(isLikedByUser(post.id));
      setComments(getComments(post.id));
    }
  }, [post?.id]);

  if (!post) {
    return (
      <div className="min-h-screen pt-20" style={{ backgroundColor: "#171717" }}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4 text-white">블로그 포스트를 찾을 수 없습니다.</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">
            블로그 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    const newLiked = toggleLike(post.id);
    setIsLiked(newLiked);
    setLikeCount(getLikeCount(post.id));
  };

  const handleCommentSubmit = () => {
    if (!newComment.trim() || !commentAuthor.trim() || !commentPassword.trim()) {
      setCommentError("모든 필드를 입력해주세요.");
      setTimeout(() => setCommentError(""), 3000);
      return;
    }

    if (!canComment()) {
      setCommentError("30분에 한 번만 댓글을 작성할 수 있습니다.");
      setTimeout(() => setCommentError(""), 3000);
      return;
    }

    const comment: CommentData = {
      id: Date.now().toString(),
      author: commentAuthor,
      content: newComment,
      date: new Date().toISOString(),
      passwordHash: hashPassword(commentPassword),
      postId: post.id,
    };

    saveComment(comment);
    setComments([...comments, comment]);
    setNewComment("");
    setCommentAuthor("");
    setCommentPassword("");
    setCommentError("");
  };

  const handleEditComment = (commentId: string) => {
    if (!editContent.trim() || !editPassword.trim()) {
      setCommentError("내용과 비밀번호를 입력해주세요.");
      setTimeout(() => setCommentError(""), 3000);
      return;
    }

    const success = editComment(post.id, commentId, editContent, editPassword);
    if (success) {
      setComments(getComments(post.id));
      setEditingComment(null);
      setEditContent("");
      setEditPassword("");
      setCommentError("");
    } else {
      setCommentError("비밀번호가 올바르지 않습니다.");
      setTimeout(() => setCommentError(""), 3000);
    }
  };

  const handleDeleteComment = (commentId: string) => {
    if (!deletePassword.trim()) {
      setCommentError("비밀번호를 입력해주세요.");
      setTimeout(() => setCommentError(""), 3000);
      return;
    }

    const success = deleteComment(post.id, commentId, deletePassword);
    if (success) {
      setComments(getComments(post.id));
      setDeleteCommentId(null);
      setDeletePassword("");
      setCommentError("");
    } else {
      setCommentError("비밀번호가 올바르지 않습니다.");
      setTimeout(() => setCommentError(""), 3000);
    }
  };

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    let inCodeBlock = false;
    let codeBlockContent = "";
    let codeLanguage = "";

    return lines.map((line, index) => {
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockContent = "";
          codeLanguage = line.substring(3).trim();
          return null;
        } else {
          inCodeBlock = false;
          const codeContent = codeBlockContent;
          return (
            <pre key={index} className="p-4 rounded-lg overflow-x-auto my-4" style={{ backgroundColor: "#0B0B0B" }}>
              <code className="text-white font-mono text-sm leading-relaxed">
                {codeContent.split("\n").map((codeLine, codeIndex) => {
                  // Cursor 스타일의 문법 하이라이팅
                  const highlightedLine = codeLine
                    // 키워드 (purple/magenta)
                    .replace(
                      /\b(const|let|var|function|return|import|export|from|if|else|for|while|switch|case|default|break|continue|try|catch|finally|throw|class|interface|type|enum|namespace|module|require|export|default|async|await|Promise|React|useState|useEffect|useContext|useRef|useMemo|useCallback|Link|div|main|h1|span|br|className|style|onClick|onChange|onSubmit|key|id|href|src|alt|target|rel)\b/g,
                      '<span style="color: #C084FC">$1</span>',
                    )
                    // 문자열 (orange/yellow)
                    .replace(/"([^"]*)"/g, '<span style="color: #FBBF24">"$1"</span>')
                    .replace(/'([^']*)'/g, "<span style=\"color: #FBBF24\">'$1'</span>")
                    // 숫자 (light blue/cyan)
                    .replace(/\b(\d+)\b/g, '<span style="color: #67E8F9">$1</span>')
                    // HTML 태그 (light blue/cyan)
                    .replace(
                      /(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)([^&]*?)(&gt;)/g,
                      '<span style="color: #67E8F9">$1$2$3$4</span>',
                    )
                    // 주석 (gray)
                    .replace(/(\/\/.*)/g, '<span style="color: #9CA3AF">$1</span>')
                    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color: #9CA3AF">$1</span>');

                  return (
                    <div
                      key={codeIndex}
                      className="whitespace-pre"
                      dangerouslySetInnerHTML={{ __html: highlightedLine }}
                    />
                  );
                })}
              </code>
            </pre>
          );
        }
      }
      if (inCodeBlock) {
        codeBlockContent += line + "\n";
        return null;
      }
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} id="intro" className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">
            {line.substring(2)}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        const headingText = line.substring(3);
        const headingId = headingText
          .toLowerCase()
          .replace(/[^a-z0-9가-힣]/g, "-")
          .replace(/-+/g, "-");
        return (
          <h2 key={index} id={headingId} className="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">
            {headingText}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        const headingText = line.substring(4);
        const headingId = headingText
          .toLowerCase()
          .replace(/[^a-z0-9가-힣]/g, "-")
          .replace(/-+/g, "-");
        return (
          <h3 key={index} id={headingId} className="text-xl font-bold mb-2 mt-4 text-gray-900 dark:text-white">
            {headingText}
          </h3>
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-700 dark:text-gray-300"
          >
            {line.substring(2)}
          </blockquote>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 text-gray-700 dark:text-gray-300">
            {line.substring(2)}
          </li>
        );
      }
      if (line.match(/^\d+\./)) {
        return (
          <li key={index} className="ml-4 text-gray-700 dark:text-gray-300">
            {line}
          </li>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            {/* 헤더 섹션 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 작성자 정보 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-sm font-bold">M</span>
                      </div>
                      <div>
                        <p className="font-semibold">{post.author?.name || "Mandu"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <button
                        onClick={handleLike}
                        className={`flex items-center gap-1 ${isLiked ? "text-yellow-400" : "hover:text-yellow-400"}`}
                      >
                        <span className="text-lg">{isLiked ? "⭐" : "☆"}</span>
                        <span>{isClient ? likeCount : 0}</span>
                      </button>
                      <div className="flex items-center gap-1">
                        <span className="text-lg">💬</span>
                        <span>{isClient ? comments.length : 0}</span>
                      </div>
                      <span>{formatCompactDate(post.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 본문 내용 */}
            <div className="prose prose-invert max-w-none">{post.content && renderContent(post.content)}</div>

            {/* 댓글 섹션 */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg">😊</span>
                <h3 className="text-xl font-bold">댓글 {comments.length}개</h3>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    placeholder="닉네임"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="password"
                    value={commentPassword}
                    onChange={(e) => setCommentPassword(e.target.value)}
                    placeholder="비밀번호 (수정/삭제용)"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 작성해보세요..."
                  className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 resize-none"
                />
                {commentError && <p className="text-red-400 text-sm mt-2">{commentError}</p>}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-400">30분에 한 번만 댓글을 작성할 수 있습니다.</p>
                  <button
                    onClick={handleCommentSubmit}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
                    댓글 작성
                  </button>
                </div>
              </div>

              {/* 댓글 목록 */}
              <div className="mt-6 space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{comment.author.charAt(0).toUpperCase()}</span>
                        </div>
                        <span className="font-semibold text-white">{comment.author}</span>
                        <span className="text-sm text-gray-400">{formatRelativeDate(comment.date)}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingComment(comment.id);
                            setEditContent(comment.content);
                            setEditPassword("");
                          }}
                          className="text-sm text-blue-400 hover:text-blue-300"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => {
                            setDeleteCommentId(comment.id);
                            setDeletePassword("");
                          }}
                          className="text-sm text-red-400 hover:text-red-300"
                        >
                          삭제
                        </button>
                      </div>
                    </div>

                    {editingComment === comment.id ? (
                      <div className="space-y-2">
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white resize-none"
                          rows={3}
                        />
                        <input
                          type="password"
                          value={editPassword}
                          onChange={(e) => setEditPassword(e.target.value)}
                          placeholder="비밀번호 입력"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditComment(comment.id)}
                            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                          >
                            저장
                          </button>
                          <button
                            onClick={() => {
                              setEditingComment(null);
                              setEditContent("");
                              setEditPassword("");
                            }}
                            className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                          >
                            취소
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-300">{comment.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* 삭제 확인 모달 */}
              {deleteCommentId && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
                    <h3 className="text-lg font-bold text-white mb-4">댓글 삭제</h3>
                    <p className="text-gray-300 mb-4">댓글을 삭제하려면 비밀번호를 입력하세요.</p>
                    <input
                      type="password"
                      value={deletePassword}
                      onChange={(e) => setDeletePassword(e.target.value)}
                      placeholder="비밀번호 입력"
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white mb-4"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDeleteComment(deleteCommentId)}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => {
                          setDeleteCommentId(null);
                          setDeletePassword("");
                        }}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 사이드바 - 목차 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-4">목차</h3>
              <nav className="space-y-2">
                {post.slug === "machine-learning-first-steps" ? (
                  <>
                    <a
                      href="#intro"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      들어가며
                    </a>
                    <div className="ml-4 space-y-1">
                      <a
                        href="#numpy-수치-계산의-마법"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find(
                            (h) => h.textContent?.includes("NumPy") || h.textContent?.includes("수치 계산"),
                          );
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        1.1 NumPy: 수치 계산의 마법
                      </a>
                      <a
                        href="#pandas-데이터-정제의-마법사"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find(
                            (h) => h.textContent?.includes("Pandas") || h.textContent?.includes("데이터 정제"),
                          );
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        1.2 Pandas: 데이터 정제의 마법사
                      </a>
                      <a
                        href="#scikit-learn-머신러닝의-길잡이"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find(
                            (h) => h.textContent?.includes("Scikit") || h.textContent?.includes("머신러닝의 길잡이"),
                          );
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        1.3 Scikit-learn: 머신러닝의 길잡이
                      </a>
                    </div>
                    <a
                      href="#학습하면서-느낀-점"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) =>
                          h.textContent?.includes("학습하면서 느낀 점"),
                        );
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      2. 학습하면서 느낀 점
                    </a>
                    <div className="ml-4 space-y-1">
                      <a
                        href="#코드는-문서다"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find((h) =>
                            h.textContent?.includes("코드는 문서다"),
                          );
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        2.1 코드는 문서다
                      </a>
                      <a
                        href="#실수는-배움의-기회"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find((h) =>
                            h.textContent?.includes("실수는 배움의 기회"),
                          );
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        2.2 실수는 배움의 기회
                      </a>
                    </div>
                    <a
                      href="#앞으로의-계획"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) =>
                          h.textContent?.includes("앞으로의 계획"),
                        );
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      3. 앞으로의 계획
                    </a>
                    <a
                      href="#마치며"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) => h.textContent?.includes("마치며"));
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      마치며
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="#intro"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      들어가며
                    </a>
                    <div className="ml-4 space-y-1">
                      <a
                        href="#선형-회귀의-개념"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find((h) =>
                            h.textContent?.includes("선형 회귀의 개념"),
                          );
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        1.1 선형 회귀의 개념
                      </a>
                      <a
                        href="#다중-선형-회귀"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find((h) =>
                            h.textContent?.includes("다중 선형 회귀"),
                          );
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        1.2 다중 선형 회귀
                      </a>
                    </div>
                    <a
                      href="#로지스틱-회귀-분류의-기초"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) =>
                          h.textContent?.includes("로지스틱 회귀"),
                        );
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      2. 로지스틱 회귀: 분류의 기초
                    </a>
                    <div className="ml-4 space-y-1">
                      <a
                        href="#이진-분류"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find((h) => h.textContent?.includes("이진 분류"));
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        2.1 이진 분류
                      </a>
                      <a
                        href="#다중-분류"
                        className="block text-gray-300 hover:text-white text-sm cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const headings = document.querySelectorAll("h3");
                          const targetHeading = Array.from(headings).find((h) => h.textContent?.includes("다중 분류"));
                          targetHeading?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        2.2 다중 분류
                      </a>
                    </div>
                    <a
                      href="#모델-평가와-검증"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) =>
                          h.textContent?.includes("모델 평가와 검증"),
                        );
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      3. 모델 평가와 검증
                    </a>
                    <a
                      href="#실전-프로젝트-주택-가격-예측"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) =>
                          h.textContent?.includes("실전 프로젝트"),
                        );
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      4. 실전 프로젝트: 주택 가격 예측
                    </a>
                    <a
                      href="#학습하면서-느낀-점"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) =>
                          h.textContent?.includes("학습하면서 느낀 점"),
                        );
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      5. 학습하면서 느낀 점
                    </a>
                    <a
                      href="#앞으로의-계획"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) =>
                          h.textContent?.includes("앞으로의 계획"),
                        );
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      6. 앞으로의 계획
                    </a>
                    <a
                      href="#마치며"
                      className="block text-gray-300 hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const headings = document.querySelectorAll("h2");
                        const targetHeading = Array.from(headings).find((h) => h.textContent?.includes("마치며"));
                        targetHeading?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      마치며
                    </a>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
