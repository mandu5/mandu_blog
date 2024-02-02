import React from "react";
import { Link } from "react-router-dom";
import { projectsInfo } from "../../constants";

const Projects = () => {
  return (
    <>
      <h3 className="subhead-text blue-gradient_text font-semibold drop-shadow">Projects</h3>
      <div className="flex flex-wrap my-10 gap-16">
        {projectsInfo.map((project) => (
          <div className="lg:w-[400px]" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="threads" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>

            <div className="rounded-lg border border-sky-100 px-3 mt-5 drop-shadow-sm hover:bg-red-100 duration-1000">
              <Link to={project.link}>
                <h4 className="mt-3 font-semibold font-poppins">{project.name}</h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins"></div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
