import Game from "../../../components/About/Game";
import AboutTabs from "../../../components/About/AboutTabs";
import { gamesMainInfo, gamesOtherInfo } from "@/constants";

export default function GamePage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen pt-20">
        <h2 className="text-3xl font-bold text-left mb-8">링크</h2>
        <AboutTabs />
        <Game gamesMainInfo={gamesMainInfo} gamesOtherInfo={gamesOtherInfo} />
      </div>
    </div>
  );
}
