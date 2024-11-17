import DisplayFaceitLvl from "@/components/display-current-faceit-lvl";
import EternalLink from "@/components/external-link";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getPlayerStatsByName } from "@/endpoints/faceit-endpoints";
import { TFaceitDataDetails } from "@/schema/faceit-data.types";
import { Calendar, TrendingUp, User, Verified } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

type CardFaceitDetailsProps = {
  name: string;
  countryLink: string;
};

const getFaceitELOAndGame = (res: TFaceitDataDetails) => {
  if (res.games.cs2)
    return {
      elo: res.games.cs2.faceit_elo,
      game: "CS2",
    };
  if (res.games.csgo)
    return {
      elo: res.games.csgo.faceit_elo,
      game: "CSGO",
    };
  return {
    elo: 0,
    game: "No game",
  };
};

const CardFaceitDetails: React.FC<CardFaceitDetailsProps> = async ({
  name,
  countryLink,
}) => {
  const playerStats = await getPlayerStatsByName(name);
  if (playerStats.error || playerStats.data === undefined) {
    return null;
  }
  const playerEloAndGame = getFaceitELOAndGame(playerStats.data);
  return (
    <Suspense fallback={<Skeleton className="w-full h-24" />}>
      <Card className="bg-primary/5 border-none">
        <div className="p-4 flex items-center gap-4">
          <div className="relative">
            {playerStats.data.avatar ? (
              <Image
                src={playerStats.data.avatar}
                width={64}
                height={64}
                alt={name}
                className="h-16 w-16 rounded-lg object-cover"
                placeholder="empty"
              />
            ) : (
              <User className="w-16 h-16 rounded-lg" />
            )}
            <div className="absolute top-[42px] left-4 w-20 h-20">
              {playerStats.data.games.cs2?.skill_level ||
              playerStats.data.games.csgo?.skill_level ? (
                <DisplayFaceitLvl
                  lvl={
                    playerStats.data.games.cs2?.skill_level ||
                    playerStats.data.games.csgo?.skill_level ||
                    1
                  }
                  width={64}
                  height={64}
                />
              ) : null}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-sm">
                <h3 className="font-semibold text-lg truncate">{name}</h3>
                <Image
                  src={`https://flagcdn.com/${countryLink.toLowerCase()}.svg`}
                  width={20}
                  height={16}
                  alt={name}
                  className="w-5 h-4 rounded object-cover"
                />
              </div>
              <EternalLink link={`https://www.faceit.com/en/players/${name}`} />
            </div>
            <div className="flex items-center gap-1.5 text-sm ">
              <TrendingUp className="w-4 h-4 " />
              <span>{playerEloAndGame.elo} ELO</span>
              <span className="text-muted-foreground">
                {`(${playerEloAndGame.game})`}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm ">
              <Calendar className="w-4 h-4 " />
              <span>
                {playerStats.data.activated_at
                  ? new Date(playerStats.data.activated_at).toLocaleDateString()
                  : "Not activated"}
              </span>
            </div>{" "}
            <div className="flex items-center gap-1.5 text-sm ">
              <Verified className="w-4 h-4 " />
              <span>
                {playerStats.data.verified ? "Verified" : "Not verified"}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Suspense>
  );
};

export default CardFaceitDetails;
