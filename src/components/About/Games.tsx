import React from "react";
import { gamesInfo } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Games = () => {
  return (
    <>
      <h3 className="subhead-text blue-gradient_text font-semibold drop-shadow">Games</h3>
      <div className="my-10 gap-16">
        {gamesInfo.map((games) => (
          <div className="lg:w-[800px]" key={games.name}>
            <Link href={games.link} target="_blank" rel="noopener noreferrer">
              <div className="flex">
                <div className="block-container w-12 h-12 mt-4">
                  <div className={`btn-back rounded-xl ${games.theme}`} />
                  <div className="btn-front rounded-xl justify-center items-center">
                    <Image src={games.iconUrl} alt="Image" className="w-50 h-50 object-contain" />
                  </div>
                </div>
                <div className="mx-20">
                  <p className="font-semibold font-poppins">{games.name}</p>
                  <div className="flex">
                    쌈무최0고<p className="text-slate-500">@유니온</p>
                  </div>
                  <p className="text-slate-500">Lv 221 / 패스파인더</p>
                </div>
                <div className="mx-20">
                  <Image src={games.characterUrl} alt="img" className="w-50 h-50 object-contain" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Games;
