"use client";
import React from "react";
import Image from "next/image";

export interface GameItem {
  name: string;
  value: string;
  icon?: string;
  link?: string;
  code?: string;
}

const GameList = ({ title, items }: { title: string; items: GameItem[] }) => (
  <>
    <h3 className="text-xl font-bold text-left mt-10 mb-4 first:mt-0">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.name} className="flex items-center bg-white border rounded-lg px-4 py-3 shadow-sm">
          {item.icon && (
            <div className="relative w-6 h-6 mr-3 flex-shrink-0">
              <Image src={item.icon} alt={item.name} fill className="object-contain" />
            </div>
          )}
          <span className="font-medium mr-2">{item.name}</span>
          <span className="text-gray-500 flex-1 truncate">{item.value}</span>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              className="ml-2 p-1 hover:bg-gray-100 rounded"
              title="외부 링크"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </li>
      ))}
    </ul>
  </>
);

export default function Game({
  gamesMainInfo,
  gamesOtherInfo,
}: {
  gamesMainInfo: GameItem[];
  gamesOtherInfo: GameItem[];
}) {
  return (
    <>
      <GameList title="주력 게임" items={gamesMainInfo} />
      <GameList title="아이디가 있는 게임" items={gamesOtherInfo} />
    </>
  );
}
