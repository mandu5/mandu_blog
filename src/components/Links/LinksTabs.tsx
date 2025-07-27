"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface TabLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const TabLink: React.FC<TabLinkProps> = ({ href, isActive, children }) => {
  const getTabStyles = () => {
    const baseStyles =
      "min-w-[120px] text-center pb-2 text-lg font-bold tracking-wide border-b-2 transition-colors duration-200";
    const activeStyles = isActive
      ? "border-black dark:border-white text-black dark:text-white"
      : "border-transparent text-gray-400 dark:text-gray-500";

    return `${baseStyles} ${activeStyles}`;
  };

  return (
    <Link href={href} className={getTabStyles()}>
      {children}
    </Link>
  );
};

const LinksTabs: React.FC = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const tabs = [
    { href: "/links", label: t("links.profile") },
    { href: "/links/game", label: t("links.games") },
  ];

  return (
    <div className="flex items-end border-b border-black/80 dark:border-white/80 mb-8 mt-8">
      <div className="flex w-full justify-start">
        {tabs.map((tab) => (
          <TabLink key={tab.href} href={tab.href} isActive={pathname === tab.href}>
            {tab.label}
          </TabLink>
        ))}
      </div>
    </div>
  );
};

export default LinksTabs;
