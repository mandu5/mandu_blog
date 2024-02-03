"use client";
import React from "react";
import { Games, Competitive, Projects, Experience, Skills } from "@/components/About";
import { Footer, Header } from "@/components";
import "react-vertical-timeline-component/style.min.css";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <section className="max-container">
        <h1 className="head-text">
          <span>mandu</span>
        </h1>
        <Skills />
        <Experience />
        <Projects />
        <Competitive />
        <Games />
      </section>
      <Footer />
    </>
  );
};

export default About;
