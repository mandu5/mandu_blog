"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link
        href="/"
        className="w-10 h-10 rounded-lg bg-white blue-gradient_text items-center justify-center flex font-bold shadow-md hover:opacity-60"
      >
        M
      </Link>
      <div className="flex text-lg gap-7 font-medium">
        <Link href="/about" className="hover:opacity-60 blue-gradient_text">
          About
        </Link>
        <Link href="/blog" className="hover:opacity-60 blue-gradient_text">
          Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
