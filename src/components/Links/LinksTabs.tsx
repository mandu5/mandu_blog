"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinksTabs() {
  const pathname = usePathname();
  return (
    <div className="flex items-end border-b border-black/80 dark:border-white/80 mb-8 mt-8">
      <div className="flex w-full justify-start">
        <Link
          href="/links"
          className={`min-w-[120px] text-center pb-2 text-lg font-bold tracking-wide border-b-2 transition-colors duration-200 ${
            pathname === "/links"
              ? "border-black dark:border-white text-black dark:text-white"
              : "border-transparent text-gray-400 dark:text-gray-500"
          }`}
        >
          Profile
        </Link>
        <Link
          href="/links/game"
          className={`min-w-[120px] text-center pb-2 text-lg font-bold tracking-wide border-b-2 transition-colors duration-200 ${
            pathname === "/links/game"
              ? "border-black dark:border-white text-black dark:text-white"
              : "border-transparent text-gray-400 dark:text-gray-500"
          }`}
        >
          Games
        </Link>
      </div>
    </div>
  );
}
