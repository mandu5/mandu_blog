import GameLinks from "../../../components/Links/GameLinks";
import LinksTabs from "../../../components/Links/LinksTabs";
import { PROFILE_DATA } from "@/constants";

export default function GameLinksPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen pt-20">
        <LinksTabs />
        <GameLinks gamesMainInfo={PROFILE_DATA.games.main} />
      </div>
    </div>
  );
}
