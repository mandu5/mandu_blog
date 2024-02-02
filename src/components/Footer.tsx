import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />
      <div className="footer-container">
        <p>
          © 2023 <strong>Mandu</strong>. All rights reserved.
        </p>
        <div className="flex gap-3 justify-center items-center" onClick={scrollToTop}>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target={link.name === "Contact" ? "" : "_blank"}>
              <img src={link.iconUrl} alt={link.name} className="w-6 h-6 object-contain hover:opacity-60" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
