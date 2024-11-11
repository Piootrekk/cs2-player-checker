import Loading from "@/components/loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorMessage from "@/components/ui/error-message";
import { getPlayerFaceitBySteamId } from "@/endpoints/faceit-endpoints";
import { Suspense } from "react";
import CardFaceit from "./card-faceit";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type UserProfileProps = {
  params: Awaited<{
    steamid: string;
  }>;
};

const UserProfile: React.FC<UserProfileProps> = async ({ params }) => {
  const { steamid } = await params;
  if (!steamid) {
    return <ErrorMessage message="Invalid input" />;
  }
  const res = await getPlayerFaceitBySteamId(steamid);
  if (res.error) {
    return (
      <ErrorMessage message={res.error!.message} status={res.error!.status} />
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <Card className="rounded-lg">
        <div className="flex justify-start">
          <Button variant={"ghost"} asChild className="m-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to Search</span>
            </Link>
          </Button>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">Checked profile</CardTitle>
          <CardDescription>
            Profile found for steamid: {steamid}
          </CardDescription>
        </CardHeader>
        <CardContent>
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
              <CardFaceit
                key={player.id}
                name={player.nickname}
                countryLink={player.country}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default UserProfile;
