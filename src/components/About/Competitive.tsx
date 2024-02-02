import React from "react";
import { Link } from "react-router-dom";
import { competitiveInfo } from "../../constants";

const Competitive = () => {
  return (
    <div className="py-8">
      <h3 className="subhead-text blue-gradient_text font-semibold drop-shadow">Rating</h3>
      <div className="flex flex-wrap my-10 gap-16">
        {competitiveInfo.map((competitive) => (
          <div className="lg:w-[400px]" key={competitive.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${competitive.theme}`} />
              <div className="btn-front rounded-xl">
                <img src={competitive.iconUrl} alt="threads" className="w-50 h-50 object-contain" />
              </div>
            </div>
            <div className="rounded-lg border border-sky-100 px-3 mt-5 drop-shadow-sm hover:bg-red-100 duration-1000">
              <Link to={competitive.link}>
                <p className="mt-3 font-semibold font-poppins">{competitive.name}</p>
                <div className="flex">
                  <p className="mt-1 border-2 text-orange-300 border-orange-300 px-1">{competitive.tier}</p>
                  <p className="mx-3 mt-1">{competitive.nickName}</p>
                </div>
                <p className="mt-1 text-orange-300">{competitive.rate}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitive;
