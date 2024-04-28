import React from "react";
import Image from "next/image";
import { experiencesInfo } from "../../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <div className="py-8">
      <h3 className="subhead-text blue-gradient_text font-semibold drop-shadow">Work Experience</h3>
      <div className="mt-6 flex pb-8">
        <VerticalTimeline>
          {experiencesInfo.map((experience) => (
            <VerticalTimelineElement
              visible={true}
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <Image
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                <p className="text-black-500 font-medium text-base" style={{ margin: 0 }}>
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
