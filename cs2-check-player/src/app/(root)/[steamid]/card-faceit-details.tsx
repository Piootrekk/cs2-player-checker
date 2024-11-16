import DisplayFaceitLvl from "@/components/display-current-faceit-lvl";
import EternalLink from "@/components/external-link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ErrorMessage from "@/components/ui/error-message";
import { Skeleton } from "@/components/ui/skeleton";
import { getPlayerStatsByName } from "@/endpoints/faceit-endpoints";
import { ExternalLink, TrendingUp, User } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

type CardFaceitDetailsProps = {
  name: string;
  countryLink: string;
};

const CardFaceitDetails: React.FC<CardFaceitDetailsProps> = async ({
  name,
  countryLink,
}) => {
  const res = await getPlayerStatsByName(name);
  if (res.error || res.data === undefined) {
    return null;
  }

  return (
    <Suspense fallback={<Skeleton className="w-full h-24" />}>
      <Card className="bg-primary/5 border-none">
        <div className="p-4 flex items-center gap-4">
          <div className="relative">
            {res.data.avatar ? (
              <Image
                src={res.data.avatar}
                width={128}
                height={128}
                alt={name}
                className="h-16 w-16 rounded-lg object-cover"
                placeholder="empty"
              />
            ) : (
              <User className="w-16 h-16 rounded-lg" />
            )}
            <div className="absolute -bottom-10 -right-6 w-16 h-16">
              <DisplayFaceitLvl
                lvl={
                  res.data.games.cs2?.skill_level ||
                  res.data.games.csgo?.skill_level ||
                  0
                }
                height={64}
                width={64}
              />
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
              <span>
                {res.data.games.cs2?.faceit_elo ||
                  res.data.games.csgo?.faceit_elo ||
                  0}{" "}
                ELO
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-foreground"></div>
          </div>
        </div>
      </Card>
    </Suspense>
  );
};

export default CardFaceitDetails;

{
  /* <a
          href={`https://www.faceit.com/en/players/${name}`}
          target="_blank"
          rel="noreferrer"
          className="absolute top-3 right-3"
        >
          <ExternalLink className="w-4 h-4" />
        </a> */
}
