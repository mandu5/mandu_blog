"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutTabs() {
  const pathname = usePathname();
  return (
    <div className="flex items-end border-b border-black/80 mb-8 mt-8">
      <div className="flex w-full justify-start">
        <Link
          href="/about"
          className={`min-w-[120px] text-center pb-2 text-lg font-bold tracking-wide border-b-2 transition-colors duration-200 ${
            pathname === "/about" ? "border-black text-black" : "border-transparent text-gray-400"
          }`}
        >
          프로필
        </Link>
        <Link
          href="/about/game"
          className={`min-w-[120px] text-center pb-2 text-lg font-bold tracking-wide border-b-2 transition-colors duration-200 ${
            pathname === "/about/game" ? "border-black text-black" : "border-transparent text-gray-400"
          }`}
        >
          게임
        </Link>
      </div>
    </div>
  );
}
