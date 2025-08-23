"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 진행바 애니메이션 시작
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 100);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-navy via-primary-navy to-primary-mint dark:from-background-dark dark:via-background-dark dark:to-background-dark">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="text-4xl font-bold text-white mb-4 animate-bounce-gentle">MANDU</div>
          <div className="text-lg text-white/80 animate-pulse">AI Engineer Portfolio</div>
        </div>

        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-loading-spin mx-auto"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary-mint rounded-full animate-loading-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="mt-6 text-white/60 animate-loading-pulse">Loading amazing things...</div>

        {/* Progress Bar */}
        <div className="mt-4 w-48 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-primary-mint rounded-full transition-all duration-2000 ease-out" 
            style={{ width: "0%" }}
            id="progress-bar"
          ></div>
        </div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-mint/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-white/15 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-primary-mint/25 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </div>
  );
}
