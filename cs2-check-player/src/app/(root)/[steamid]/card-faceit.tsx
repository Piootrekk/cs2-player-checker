import React, { Suspense } from "react";
import CardFaceitDetails from "./card-faceit-details";
import { getPlayerFaceitBySteamId } from "@/endpoints/faceit-endpoints";
import ErrorMessage from "@/components/ui/error-message";
import { Skeleton } from "@/components/ui/skeleton";

type CardFaceitProps = {
  steamid: string;
};

const CardFaceit: React.FC<CardFaceitProps> = async ({ steamid }) => {
  const res = await getPlayerFaceitBySteamId(steamid);
  if (res.error) {
    return (
      <ErrorMessage message={res.error.message} status={res.error.status} />
    );
  }
  return (
    <Suspense fallback={<Skeleton className="w-full h-14" />}>
      <div className="flex flex-col gap-y-4">
        {res.data.total_count === 0 ? (
          <p className="text-muted-foreground">No faceit profile found</p>
        ) : (
          <p>
            Found {res.data.total_count} faceit profile related to selected
            steam accout:
          </p>
        )}
        {res.data.results.map((player) => (
          <CardFaceitDetails
            key={player.id}
            name={player.nickname}
            countryLink={player.country}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default CardFaceit;
