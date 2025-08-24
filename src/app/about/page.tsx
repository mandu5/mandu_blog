"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { EDUCATION_DATA, CAREER_DATA, CERTIFICATES_DATA, AWARDS_DATA } from "@/constants";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 pb-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6">{t("about.title")}</h1>
            <div className="w-24 h-px bg-gray-300 dark:bg-gray-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Profile Summary */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="text-xl">👨‍💻</span>
                  {t("about.summary")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{t("about.summaryText")}</p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="text-xl">🛠️</span>
                  {t("about.skills")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Machine Learning", "Deep Learning", "Python", "React", "TypeScript", "Next.js"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-light border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            {t("about.education")}
          </h2>
          <div className="space-y-8">
            {EDUCATION_DATA.map((education, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-light text-gray-900 dark:text-white">{t(education.institution)}</h3>
                  <span className="text-gray-500 dark:text-gray-500 font-light">{education.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2 font-light">{t(education.degree)}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm font-light">{t(education.location)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            <span className="text-2xl">💼</span>
            {t("about.experience")}
          </h2>
          <div className="space-y-8">
            {CAREER_DATA.map((career, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-light text-gray-900 dark:text-white">{t(career.company)}</h3>
                  <span className="text-gray-500 dark:text-gray-500 font-light">{career.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 font-light">{t(career.position)}</p>
                {career.team && (
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-3 font-light">{career.team}</p>
                )}
                <ul className="space-y-2">
                  {career.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-start font-light"
                    >
                      <span className="text-gray-400 dark:text-gray-600 mr-3">•</span>
                      {t(achievement)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            <span className="text-2xl">📜</span>
            {t("about.certificates")}
          </h2>
          <div className="space-y-8">
            {CERTIFICATES_DATA.map((certificate, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-light text-gray-900 dark:text-white">{t(certificate.title)}</h3>
                  <span className="text-gray-500 dark:text-gray-500 font-light">{certificate.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 font-light">{t(certificate.issuer)}</p>
                {certificate.description && certificate.description.length > 0 && (
                  <ul className="space-y-2">
                    {certificate.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-gray-600 dark:text-gray-400 text-sm flex items-start font-light"
                      >
                        <span className="text-gray-400 dark:text-gray-600 mr-3">•</span>
                        {t(desc)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            {t("about.awards")}
          </h2>
          <div className="space-y-8">
            {AWARDS_DATA.map((award, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-light text-gray-900 dark:text-white">{t(award.name)}</h3>
                  <span className="text-gray-500 dark:text-gray-500 font-light">{award.date.split(" ")[0]}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-light">{t(award.description)}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
