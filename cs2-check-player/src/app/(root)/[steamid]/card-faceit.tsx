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
    <Suspense fallback={<Skeleton className="w-full h-24 rounded-b-lg mt-6" />}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            FACEIT Accounts
            <span className="ml-2 text-sm text-muted-foreground">
              {res.data.total_count === 0
                ? "No account found"
                : `Found ${res.data.total_count} profiles`}
            </span>
          </h2>
        </div>
        <div className="grid gap-4">
          {res.data.results.map((player) => (
            <CardFaceitDetails
              key={player.id}
              name={player.nickname}
              countryLink={player.country}
            />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default CardFaceit;
