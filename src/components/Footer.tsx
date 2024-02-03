"use client";
import Image from "next/image";
import { socialLinks } from "../constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />
      <div className="footer-container">
        <p>
          © 2023 <strong>Mandu</strong>. All rights reserved.
        </p>
        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} href={`${link.link}`}>
              <Image src={link.iconUrl} alt={link.name} className="w-6 h-6 object-contain hover:opacity-60" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
