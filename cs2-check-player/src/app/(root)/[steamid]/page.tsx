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
import { playerSteamPorfile } from "@/endpoints/steam-endpoints";
import Image from "next/image";
import {
  getCommunityVisibilityState,
  getPersonalState,
} from "@/schema/steam-profile.types";
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
          {steamProfile.error && (
            <ErrorMessage
              message={steamProfile.error.message}
              status={steamProfile.error.status}
            />
          )}
          {!steamProfile.data ||
          steamProfile.data.response.players.length === 0 ? (
            <ErrorMessage message="No steam profile found for this steamid" />
          ) : (
            <>
              <SteamInfo steamProfile={steamProfile.data} />
              <CardFaceit steamid={steamid} />
            </>
          )}
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default UserProfile;
