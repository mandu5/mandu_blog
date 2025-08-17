"use client";
import React from "react";
import { EDUCATION_DATA, CAREER_DATA, AWARDS_DATA, CERTIFICATES_DATA } from "@/constants";

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
}

function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

interface ProfileItemProps {
  title: string;
  subtitle?: string;
  period: string;
  location?: string;
  description?: string[];
  organization?: string;
  achievements?: string[];
}

function ProfileItem({ title, subtitle, period, location, description, organization, achievements }: ProfileItemProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-500">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {subtitle && <p className="text-lg text-white/80 mb-2">{subtitle}</p>}
          {organization && <p className="text-lg text-white/80 mb-2">{organization}</p>}
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-sm text-white/70">{period}</p>
          {location && <p className="text-sm text-white/70">{location}</p>}
        </div>
      </div>

      {description && description.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-white/80">
          {description.map((item, index) => (
            <li key={index} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      )}

      {achievements && achievements.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-white/80">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-sm">
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Profile</h1>
          <p className="text-xl text-white/80">
            AI Engineer & Developer with expertise in machine learning and web development
          </p>
        </div>

        {/* Education */}
        <ProfileSection title="Education">
          {EDUCATION_DATA.map((item, index) => (
            <ProfileItem
              key={index}
              title={item.degree}
              subtitle={item.institution}
              period={item.period}
              location={item.location}
            />
          ))}
        </ProfileSection>

        {/* Career */}
        <ProfileSection title="Career">
          {CAREER_DATA.map((item, index) => (
            <ProfileItem
              key={index}
              title={item.position}
              organization={item.company}
              period={item.period}
              achievements={item.achievements}
            />
          ))}
        </ProfileSection>

        {/* Awards */}
        <ProfileSection title="Awards">
          {AWARDS_DATA.map((item, index) => (
            <ProfileItem key={index} title={item.name} period={item.date} description={[item.description]} />
          ))}
        </ProfileSection>

        {/* Certificates */}
        <ProfileSection title="Certificates">
          {CERTIFICATES_DATA.map((item, index) => (
            <ProfileItem
              key={index}
              title={item.title}
              organization={item.issuer}
              period={item.period}
              description={item.description}
            />
          ))}
        </ProfileSection>
      </div>
    </div>
  );
}
