"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { EDUCATION_DATA, CAREER_DATA, CERTIFICATES_DATA, AWARDS_DATA } from "@/constants";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("about.title")}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{t("about.subtitle")}</p>
          </div>

          {/* Profile Summary */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{t("about.summary")}</h3>
                <p className="text-white/80 leading-relaxed">{t("about.summaryText")}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{t("about.skills")}</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Python",
                    "TensorFlow",
                    "PyTorch",
                    "React",
                    "TypeScript",
                    "Next.js",
                    "AWS",
                    "Docker",
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-mint/20 text-primary-mint rounded-full text-sm font-medium"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-primary-mint rounded-full flex items-center justify-center text-primary-navy font-bold text-sm mr-4">
              🎓
            </span>
            {t("about.education")}
          </h2>
          <div className="space-y-6">
            {EDUCATION_DATA.map((education, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{education.institution}</h3>
                  <span className="text-primary-mint font-medium">{education.period}</span>
                </div>
                <p className="text-white/80 mb-2">{education.degree}</p>
                <p className="text-white/60 text-sm">{education.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-primary-mint rounded-full flex items-center justify-center text-primary-navy font-bold text-sm mr-4">
              💼
            </span>
            {t("about.experience")}
          </h2>
          <div className="space-y-6">
            {CAREER_DATA.map((career, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{career.company}</h3>
                  <span className="text-primary-mint font-medium">{career.period}</span>
                </div>
                <p className="text-white/80 mb-3">{career.position}</p>
                {career.team && <p className="text-white/60 text-sm mb-3">{career.team}</p>}
                <ul className="space-y-2">
                  {career.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-white/70 text-sm flex items-start">
                      <span className="text-primary-mint mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-primary-mint rounded-full flex items-center justify-center text-primary-navy font-bold text-sm mr-4">
              🏆
            </span>
            {t("about.certificates")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATES_DATA.map((certificate, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-white mb-2">{certificate.title}</h3>
                <p className="text-primary-mint font-medium mb-2">{certificate.issuer}</p>
                <p className="text-white/60 text-sm mb-3">{certificate.period}</p>
                {certificate.description && certificate.description.length > 0 && (
                  <ul className="space-y-1">
                    {certificate.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-white/70 text-xs flex items-start">
                        <span className="text-primary-mint mr-2">•</span>
                        {desc}
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
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-primary-mint rounded-full flex items-center justify-center text-primary-navy font-bold text-sm mr-4">
              🎯
            </span>
            {t("about.awards")}
          </h2>
          <div className="space-y-6">
            {AWARDS_DATA.map((award, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{award.name}</h3>
                  <span className="text-primary-mint font-medium">{award.date}</span>
                </div>
                <p className="text-white/80">{award.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
