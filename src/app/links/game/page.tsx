import GameLinks from "../../../components/Links/GameLinks";
import LinksTabs from "../../../components/Links/LinksTabs";
import { profileData } from "@/constants";

export default function GameLinksPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen pt-20">
        <h2 className="text-3xl font-bold text-left mb-8">Links</h2>
        <LinksTabs />
        <GameLinks gamesMainInfo={profileData.games.main} />
      </div>
    </div>
  );
}
