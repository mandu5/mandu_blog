// src/app/cv/page.tsx
import React from "react";
import { educationData, careerData, awardsData } from "@/constants";
import { CVItem, AwardItem } from "@/types";

// 재사용 가능한 Section 컴포넌트
const CVSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const CVPage = () => (
  <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen pt-20">
      <h1 className="text-3xl font-bold mb-8 text-left">이력</h1>

      <CVSection title="학력">
        <ul>
          {educationData.map((edu) => (
            <li key={edu.title} className="mb-2 flex justify-between items-center">
              <div>
                <span className="font-bold text-blue-700 hover:underline cursor-pointer">{edu.title}</span>{" "}
                {edu.subtitle}
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">{edu.period}</span>
            </li>
          ))}
        </ul>
      </CVSection>

      <CVSection title="경력">
        <ul>
          {careerData.map((job) => (
            <li key={job.title} className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-lg">{job.title}</span>
                  {job.subtitle && <div className="text-gray-600 text-sm">{job.subtitle}</div>}
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{job.period}</span>
              </div>
              {job.description && (
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  {job.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </CVSection>

      <CVSection title="수상 및 출전">
        <ul>
          {awardsData.map((award) => (
            <li key={award.name} className="mb-2 flex justify-between items-center">
              <div>
                <span className="font-bold">{award.name}</span>
                <div className="text-gray-700 text-sm">{award.desc}</div>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">{award.date}</span>
            </li>
          ))}
        </ul>
      </CVSection>

      {/* 프로젝트 및 기타 활동도 위와 같은 패턴으로 적용 */}
    </div>
  </div>
);

export default CVPage;
