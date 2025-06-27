"use client";
import Image from "next/image";
import { socialLinks } from "../../constants";
import Link from "next/link";

interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

const Footer = () => {
  return (
    <footer className="footer font-poppins border-t border-slate-200 bg-white mt-12">
      <div className="footer-container flex flex-col items-center gap-2 py-6">
        <p className="text-sm text-gray-500">
          © 2023 <strong>Mandu</strong>. All rights reserved.
        </p>
        <div className="flex gap-3 justify-center items-center">
          {(socialLinks as SocialLink[]).map((link) => (
            <Link
              key={link.name + link.link}
              href={link.link}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={24}
                height={24}
                className="w-6 h-6 object-contain hover:opacity-60"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
