import ErrorMessage from "@/components/ui/error-message";
import CardFaceit from "./card-faceit";
import {
  playersHoursCS2,
  playerSteamPorfile,
} from "@/endpoints/steam-endpoints";
import SteamCard from "./card-steam";
import ReturnButton from "@/components/return-button";
import ProfileHeader from "./profile-header";
import CardOther from "./card-services";
import { Metadata } from "next";
import { cache } from "react";

type UserProfileProps = {
  params: Promise<{ steamid: string }>;
};

const getCachedResponse = cache(async (steamid: string) => {
  const steamProfile = await playerSteamPorfile(steamid);
  const cs2details = await playersHoursCS2(steamid);
  return { steamProfile, cs2details };
});

export async function generateMetadata({
  params,
}: UserProfileProps): Promise<Metadata> {
  const { steamid } = await params;
  const { steamProfile } = await getCachedResponse(steamid);
  return {
    title: `Player: ${steamid}`,
    description: `Detailed legitimacy check for player ${steamid} using Faceit API and other services related to cs2.`,
    openGraph: {
      title: `Player ${steamid} - ${steamProfile.data?.personaname}`,
      description: `Detailed legitimacy check for player ${steamid} using Faceit API and other services related to cs2.`,
      type: "profile",
      images: [
        {
          url:
            steamProfile.data?.avatarfull ||
            `${process.env.NEXT_PUBLIC_DOMAIN}/cs2.svg`,
          width: 200,
          height: 200,
          alt: `Avatar of ${steamProfile.data?.personaname}`,
        },
      ],
    },
  };
}

const UserProfile: React.FC<UserProfileProps> = async ({ params }) => {
  const { steamid } = await params;
  if (!steamid) {
    return <ErrorMessage message="Invalid input" />;
  }

  const { steamProfile, cs2details } = await getCachedResponse(steamid);
  return (
    <main className="min-h-screen bg-gradient-to-tr from-background via-background to-muted/100">
      <div className="max-w-xl mx-auto p-6">
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
              <CardOther steamid={steamid} />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
