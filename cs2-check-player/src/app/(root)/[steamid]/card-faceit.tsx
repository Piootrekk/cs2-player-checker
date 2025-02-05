import React, { Suspense } from "react";
import CardFaceitDetails from "./card-faceit-details";
import { getPlayerFaceitStats } from "@/endpoints/faceit-endpoints";
import { Skeleton } from "@/components/ui/skeleton";

type CardFaceitProps = {
  steamid: string;
};

const CardFaceit: React.FC<CardFaceitProps> = async ({ steamid }) => {
  const res = await getPlayerFaceitStats(steamid);

  return (
    <Suspense fallback={<Skeleton className="w-full h-24 rounded-b-lg mt-6" />}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            FACEIT Accounts
            <span className="ml-2 text-sm text-muted-foreground">
              {res.error ? "No account found" : `Found account profiles`}
            </span>
          </h2>
        </div>
        {res.data && (
          <div className="grid gap-4">
            <CardFaceitDetails playerDetails={res.data} />
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default CardFaceit;
