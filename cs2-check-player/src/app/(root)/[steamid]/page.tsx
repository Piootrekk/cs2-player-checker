import Loading from "@/components/loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorMessage from "@/components/ui/error-message";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CardFaceit from "./card-faceit";
import {
  playersHoursCS2,
  playerSteamPorfile,
} from "@/endpoints/steam-endpoints";
import SteamInfo from "./steam-info";

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
  const steamProfile = await playerSteamPorfile(steamid);
  const cs2details = await playersHoursCS2(steamid);

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
          {steamProfile.data === undefined ||
          steamProfile.error ||
          cs2details.error ? (
            <ErrorMessage
              message={
                steamProfile.error?.message ||
                cs2details.error?.message ||
                "Profile not found"
              }
            />
          ) : (
            <>
              <SteamInfo
                steamProfile={steamProfile.data}
                cs2Details={cs2details.data}
              />
              <CardFaceit steamid={steamid} />
            </>
          )}
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default UserProfile;
