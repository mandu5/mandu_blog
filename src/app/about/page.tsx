"use client";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../../components/Footer";
import { Games, Competitive, Projects, Experience, Skills } from "../../components/About";
import { Navbar } from "../../components";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="max-container">
        <h1 className="head-text">
          <span>mandu</span>
        </h1>
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Competitive />
        <Games />
      </section>
      <Footer />
    </>
  );
};

export default About;
