"use client";
import React from "react";
import { PROFILE_DATA } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LinksPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("links.links")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t("home.linksDescription")}</p>
        </div>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary-mint rounded-full flex items-center justify-center text-primary-navy font-bold text-xl mr-4">
              📧
            </div>
            <h2 className="text-3xl font-bold text-white">{t("links.contact")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROFILE_DATA.contacts.map((contact) => (
              <a
                key={contact.nameKey}
                href={contact.link}
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-primary-mint/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-mint/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-mint/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.nameKey === "common.email" ? "📧" : contact.nameKey === "common.github" ? "🐙" : "💼"}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-primary-mint transition-colors duration-300">
                    {t(contact.nameKey)}
                  </h3>
                  <p className="text-white/70 text-sm font-medium">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Programming Platforms Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary-mint rounded-full flex items-center justify-center text-primary-navy font-bold text-xl mr-4">
              💻
            </div>
            <h2 className="text-3xl font-bold text-white">{t("links.programming")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROFILE_DATA.programming.map((platform) => (
              <a
                key={platform.nameKey}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-primary-mint/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-mint/20 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-mint/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {platform.nameKey === "common.solvedAc"
                      ? "🎯"
                      : platform.nameKey === "common.baekjoon"
                      ? "📊"
                      : platform.nameKey === "common.codeforces"
                      ? "🏆"
                      : platform.nameKey === "common.atcoder"
                      ? "⚡"
                      : platform.nameKey === "common.topcoder"
                      ? "👑"
                      : platform.nameKey === "common.leetcode"
                      ? "💻"
                      : "🔧"}
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-white group-hover:text-primary-mint transition-colors duration-300">
                    {t(platform.nameKey)}
                  </h3>
                  <p className="text-white/60 text-xs font-medium">{platform.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary-mint rounded-full flex items-center justify-center text-primary-navy font-bold text-xl mr-4">
              🎮
            </div>
            <h2 className="text-3xl font-bold text-white">{t("links.games")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROFILE_DATA.games.main.map((game) => (
              <a
                key={game.nameKey}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-primary-mint/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-mint/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-mint/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎮</div>
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-primary-mint transition-colors duration-300">
                    MapleStory
                  </h3>
                  <p className="text-white/70 text-sm font-medium">{game.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
