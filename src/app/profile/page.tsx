"use client";
import React from "react";
import { EDUCATION_DATA, CAREER_DATA, AWARDS_DATA, CERTIFICATES_DATA } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const ProfilePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen pt-20">
        <ProfileSection title={t("profile.education")}>
          <ul className="space-y-4">
            {EDUCATION_DATA.map((education) => (
              <li key={education.institution} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-lg">{education.institution}</div>
                    <div className="text-gray-600">{education.degree}</div>
                    {education.location && <div className="text-gray-500 text-sm">{education.location}</div>}
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{education.period}</span>
                </div>
              </li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title={t("profile.otherActivities")}>
          <ul className="space-y-6">
            {CERTIFICATES_DATA.map((certificate) => (
              <li key={certificate.title} className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-lg">{certificate.title}</div>
                    <div className="text-gray-600">{certificate.issuer}</div>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{certificate.period}</span>
                </div>
                {certificate.description && certificate.description.length > 0 && (
                  <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
                    {certificate.description.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title={t("profile.experience")}>
          <ul className="space-y-6">
            {CAREER_DATA.map((career) => (
              <li key={career.company} className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-lg">{career.company}</span>
                    {career.position && <div className="text-gray-600 text-sm">{career.position}</div>}
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{career.period}</span>
                </div>
                {career.achievements && career.achievements.length > 0 && (
                  <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
                    {career.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title={t("profile.awards")}>
          <ul className="space-y-2">
            {AWARDS_DATA.map((award) => (
              <li key={award.name} className="mb-2 flex justify-between items-center">
                <div>
                  <span className="font-bold">{award.name}</span>
                  <div className="text-gray-700 text-sm">{award.description}</div>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{award.date}</span>
              </li>
            ))}
          </ul>
        </ProfileSection>
      </div>
    </div>
  );
};

export default ProfilePage;
