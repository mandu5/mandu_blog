"use client";
import React from "react";

const education = [{ school: "서강대학교", major: "컴퓨터공학과 학부 졸업", period: "2018. 3 – 2025. 2" }];

const career = [
  {
    company: "넥슨코리아",
    title: "소프트웨어 엔지니어",
    period: "2025. 1 – 현재",
    team: "인텔리전스랩스 알고리즘연구팀",
    details: ["프로그래밍 대회 기획 및 알고리즘 문제 연구개발", "사내 분야불문 여러 최적화 문제의 해결"],
  },
  {
    company: "솔브드",
    title: "대표",
    period: "2022. 12 – 2025. 1",
    details: [
      "솔브드 프로젝트 전반의 기획 및 개발",
      "solved.ac 사이트의 개발 및 유지보수 (프론트엔드/백엔드/DevOps) – Next.js, Express, AWS",
      "아레나 대회의 코디네이션 및 검수",
    ],
  },
];

const awards = [
  { name: "삼성 대학생 프로그래밍 경진대회 (SCPC) 2024", date: "2024. 8. 31", desc: "개인, 4등상" },
  { name: "ICPC 2024 아시아태평양지역 챔피언십, 하노이", date: "2024. 3. 2", desc: "팀 Redshift, Honorable, 37위" },
];

const projects = [
  {
    name: "solved.ac 알고리즘 문제해결 학습의 이정표",
    period: "2019. 6 – 현재",
    desc: "개인 프로젝트(기획, 운영, 개발 및 디자인) → 창업",
  },
  { name: "모두의 코딩 학교 BIKO 프론트엔드", period: "2022. 2 – 현재", desc: "프론트엔드 설계, 개발 및 디자인" },
];

const activities = [
  { name: "서강대학교 문제해결프로그래밍(CSE4152) 출제조교", period: "2024. 9 – 2024. 12" },
  { name: "전국 대학생 프로그래밍 대회 동아리 연합 회장", period: "2020. 4 – 2021. 1" },
];

const CV = () => (
  <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen pt-20">
      <h1 className="text-3xl font-bold mb-8 text-left">이력</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">학력</h2>
        <ul>
          {education.map((edu) => (
            <li key={edu.school} className="mb-2 flex justify-between items-center">
              <div>
                <span className="font-bold text-blue-700 hover:underline cursor-pointer">{edu.school}</span> {edu.major}
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">{edu.period}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">경력</h2>
        <ul>
          {career.map((job) => (
            <li key={job.company} className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-lg">{job.company}</span>{" "}
                  <span className="font-semibold">{job.title}</span>
                  {job.team && <div className="text-gray-600 text-sm">{job.team}</div>}
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="list-disc ml-6 text-gray-700 mt-2">
                {job.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">수상 및 출전</h2>
        <ul>
          {awards.map((a) => (
            <li key={a.name} className="mb-2 flex justify-between items-center">
              <div>
                <span className="font-bold">{a.name}</span>
                <div className="text-gray-700 text-sm">{a.desc}</div>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">{a.date}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">프로젝트</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.name} className="mb-2 flex justify-between items-center">
              <div>
                <span className="font-bold">{p.name}</span>
                <div className="text-gray-700 text-sm">{p.desc}</div>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">{p.period}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">기타 활동</h2>
        <ul>
          {activities.map((a) => (
            <li key={a.name} className="mb-2 flex justify-between items-center">
              <span className="font-bold">{a.name}</span>
              <span className="text-gray-400 text-sm whitespace-nowrap">{a.period}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

export default CV;
