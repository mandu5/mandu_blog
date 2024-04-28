import React from "react";
import { skillsInfo } from "../../constants";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text blue-gradient_text font-semibold drop-shadow">Skills</h3>
        <div className="mt-10 flex flex-wrap gap-12">
          {skillsInfo.map((skill, index) => (
            <div className="block-container w-20 h-20" key={index}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image src={skill} alt="img" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
