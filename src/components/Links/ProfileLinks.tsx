"use client";
import React from "react";
import { PROFILE_DATA } from "@/constants";
import { ProfileItem } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProfileListProps {
  title: string;
  items: readonly ProfileItem[];
}

const ProfileList: React.FC<ProfileListProps> = ({ title, items }) => (
  <>
    <h3 className="text-xl font-bold text-left mt-10 mb-4 first:mt-0">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <ProfileListItem key={item.name} item={item} />
      ))}
    </ul>
  </>
);

interface ProfileListItemProps {
  item: ProfileItem;
}

const ProfileListItem: React.FC<ProfileListItemProps> = ({ item }) => {
  const { t } = useLanguage();
  const displayName = item.nameKey ? t(item.nameKey) : item.name || "";

  const itemContent = (
    <>
      {item.icon && (
        <div className="relative w-6 h-6 mr-3 flex-shrink-0">
          <Image
            src={item.icon}
            alt={displayName}
            width={24}
            height={24}
            className="object-contain"
            priority
            unoptimized
            sizes="24px"
          />
        </div>
      )}
      <span className="font-medium mr-2">{displayName}</span>
      <span className="text-gray-500 flex-1 truncate">{item.value}</span>
      {item.link && (
        <div className="ml-2 p-1">
          <ExternalLinkIcon />
        </div>
      )}
    </>
  );

  return (
    <li className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
      {item.link ? (
        <Link href={item.link} target="_blank" className="flex items-center w-full" title="External Link">
          {itemContent}
        </Link>
      ) : (
        <div className="flex items-center w-full">{itemContent}</div>
      )}
    </li>
  );
};

const ExternalLinkIcon: React.FC = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProfileLinks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <ProfileList title={t("links.contact")} items={PROFILE_DATA.contacts} />
      <ProfileList title={t("links.sns")} items={PROFILE_DATA.sns} />
      <ProfileList title={t("links.programming")} items={PROFILE_DATA.programming} />
    </>
  );
};

export default ProfileLinks;
