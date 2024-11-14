import {
  getCommunityVisibilityState,
  getPersonalState,
  TSteamProfile,
} from "@/schema/steam-profile.types";
import Image from "next/image";

type SteamInfoProps = {
  steamProfile: TSteamProfile;
};

type InfoDisplayProps = {
  name: string;
  state: string;
};

const InfoDisplay: React.FC<InfoDisplayProps> = ({ name, state }) => {
  return (
    <span>
      {name}: <span className="font-semibold">{state}</span>
    </span>
  );
};

const SteamInfo: React.FC<SteamInfoProps> = ({ steamProfile }) => {
  const infoStats: InfoDisplayProps[] = [
    {
      name: "Name",
      state: steamProfile.response.players[0].personaname,
    },
    {
      name: "Profile policy",
      state: getCommunityVisibilityState(
        steamProfile.response.players[0].communityvisibilitystate
      ),
    },
    {
      name: "Profile state",
      state: getPersonalState(steamProfile.response.players[0].personastate),
    },
    {
      name: "Last online",
      state: new Date(
        steamProfile.response.players[0].lastlogoff * 1000
      ).toLocaleString(),
    },
    {
      name: "Account created",
      state: new Date(
        steamProfile.response.players[0].timecreated * 1000
      ).toLocaleString(),
    },
  ];

  return (
    <div className="flex flex-row gap-6 justify-center items-center flex-wrap">
      <Image
        src={steamProfile.response.players[0].avatarfull}
        alt={steamProfile.response.players[0].personaname}
        width={128}
        height={128}
        className="rounded-lg object-cover"
      />
      <div className="flex flex-col">
        {infoStats.map((info, index) => (
          <InfoDisplay key={index} name={info.name} state={info.state} />
        ))}
      </div>
    </div>
  );
};

export default SteamInfo;
