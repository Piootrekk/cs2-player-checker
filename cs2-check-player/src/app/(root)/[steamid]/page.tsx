import Loading from "@/components/loading";
import ErrorMessage from "@/components/ui/error-message";
import { Suspense } from "react";
import CardFaceit from "./card-faceit";
import {
  playersHoursCS2,
  playerSteamPorfile,
} from "@/endpoints/steam-endpoints";
import SteamCard from "./card-steam";
import ReturnButton from "@/components/return-button";
import ProfileHeader from "./profile-header";

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
    <main className="min-h-screen bg-gradient-to-tr from-background via-background to-muted/100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-start">
          <ReturnButton />
        </div>
        <div className="space-y-8">
          <ProfileHeader steamid={steamid} />
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
              <SteamCard
                steamProfile={steamProfile.data}
                cs2Details={cs2details.data}
              />
              <CardFaceit steamid={steamid} />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
