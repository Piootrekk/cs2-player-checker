import DisplayFaceitLvl from "@/components/display-current-faceit-lvl";
import { Card } from "@/components/ui/card";
import ErrorMessage from "@/components/ui/error-message";
import { Skeleton } from "@/components/ui/skeleton";
import { getPlayerStatsByName } from "@/endpoints/faceit-endpoints";
import { ExternalLink, TrendingUp, User } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

type CardFaceitProps = {
  name: string;
  countryLink: string;
};

const CardFaceit: React.FC<CardFaceitProps> = async ({ name, countryLink }) => {
  const res = await getPlayerStatsByName(name);
  console.log(res);
  if (res.error || res.data === undefined) {
    return null;
  }

  return (
    <Suspense fallback={<Skeleton className="w-full h-24" />}>
      <Card className="group relative bg-secondary border-secondary/50 hover:bg-secondary/70 transition-all duration-300">
        <a
          href={`https://www.faceit.com/en/players/${name}`}
          target="_blank"
          rel="noreferrer"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
        <div className="p-4 flex items-center gap-4">
          <div className="relative">
            {res.data.avatar ? (
              <Image
                src={res.data.avatar}
                width={64}
                height={64}
                alt={name}
                className="h-16 w-16 rounded-lg object-cover"
                placeholder="empty"
              />
            ) : (
              <User className="w-16 h-16 rounded-lg" />
            )}
            <div className="absolute -bottom-2 -right-2 w-8 h-8">
              <DisplayFaceitLvl
                lvl={res.data.games.cs2?.skill_level || 0}
                height={32}
                width={32}
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg truncate">{name}</h3>
              <Image
                src={`https://flagcdn.com/${countryLink.toLowerCase()}.svg`}
                width={20}
                height={16}
                alt={name}
                className="w-5 h-4 rounded object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5 text-sm ">
              <TrendingUp className="w-4 h-4 " />
              <span>{res.data.games.cs2?.faceit_elo || 0} ELO</span>
            </div>
          </div>
        </div>
      </Card>
    </Suspense>
  );
};

export default CardFaceit;
