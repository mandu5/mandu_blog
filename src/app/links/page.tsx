"use client";
import React from "react";
import { PROFILE_DATA } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LinksPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 pb-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6">{t("links.links")}</h1>
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">{t("home.linksDescription")}</p>
        </div>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12">{t("links.contact")}</h2>
          <div className="space-y-8">
            {PROFILE_DATA.contacts.map((contact) => (
              <a
                key={contact.nameKey}
                href={contact.link}
                className="block group border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {t(contact.nameKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light">{contact.value}</p>
                  </div>
                  <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Programming Platforms Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12">{t("links.programming")}</h2>
          <div className="space-y-8">
            {PROFILE_DATA.programming.map((platform) => (
              <a
                key={platform.nameKey}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {t(platform.nameKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light">{platform.value}</p>
                  </div>
                  <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section>
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12">{t("links.games")}</h2>
          <div className="space-y-8">
            {PROFILE_DATA.games.main.map((game) => (
              <a
                key={game.nameKey}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      MapleStory
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light">{game.value}</p>
                  </div>
                  <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
