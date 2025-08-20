"use client";
import React from "react";
import { PROFILE_DATA } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LinksPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">{t("links.links")}</h1>
          <p className="text-xl text-white/80">{t("home.linksDescription")}</p>
        </div>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t("links.contact")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILE_DATA.contacts.map((contact) => (
              <a
                key={contact.nameKey}
                href={contact.link}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 text-center"
              >
                <div className="text-2xl mb-3">
                  {contact.nameKey === "common.email" ? "📧" : contact.nameKey === "common.github" ? "🐙" : "💼"}
                </div>
                <h3 className="font-bold mb-2">{t(contact.nameKey)}</h3>
                <p className="text-sm opacity-80">{contact.value}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Programming Platforms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t("links.programming")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILE_DATA.programming.map((platform) => (
              <a
                key={platform.nameKey}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 text-center"
              >
                <div className="text-2xl mb-3">
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
                <h3 className="font-bold mb-2">{t(platform.nameKey)}</h3>
                <p className="text-sm opacity-80">{platform.value}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Games */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t("links.games")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILE_DATA.games.main.map((game) => (
              <a
                key={game.nameKey}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 text-center"
              >
                <div className="text-2xl mb-3">🎮</div>
                <h3 className="font-bold mb-2">MapleStory</h3>
                <p className="text-sm opacity-80">{game.value}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
