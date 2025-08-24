"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 진행바 애니메이션 시작
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = "100%";
      }, 100);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="text-5xl font-light text-gray-900 dark:text-white mb-4">
            Mandu <span className="text-4xl">🥟</span>
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-400 font-light">AI Engineer</div>
        </div>

        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 border-t-gray-900 dark:border-t-white rounded-full animate-spin mx-auto"></div>
        </div>

        {/* Loading Text */}
        <div className="mt-6 text-gray-500 dark:text-gray-500 font-light">Loading...</div>

        {/* Progress Bar */}
        <div className="mt-4 w-48 h-px bg-gray-200 dark:bg-gray-700 overflow-hidden mx-auto">
          <div
            className="h-full bg-gray-900 dark:bg-white transition-all duration-2000 ease-out"
            style={{ width: "0%" }}
            id="progress-bar"
          ></div>
        </div>
      </div>
    </div>
  );
}
