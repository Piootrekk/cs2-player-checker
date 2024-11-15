import { TCS2Global } from "@/schema/playtime-cs2.types";
import { TPlayer } from "@/schema/steam-profile.types";
import {
  getCommunityVisibilityState,
  getPersonalState,
} from "@/schema/steam-profile.types";
import Image from "next/image";

type SteamInfoProps = {
  steamProfile: TPlayer;
  cs2Details: TCS2Global;
};

type InfoDisplayProps = {
  name: string;
  state?: string;
};

const InfoDisplay: React.FC<InfoDisplayProps> = ({ name, state }) => {
  if (!state) {
    return null;
  }

  return (
    <span>
      {name}: <span className="font-semibold">{state}</span>
    </span>
  );
};

const SteamInfo: React.FC<SteamInfoProps> = ({ steamProfile, cs2Details }) => {
  const getCS2Details = (cs2Details: TCS2Global) => {
    if (cs2Details.response.game_count === 0) return "no CS2";
    if (!cs2Details.response.games) return "Private";
    if (cs2Details.response.games[0].playtime_forever === 0)
      return "Private games";
    return (
      Math.round(
        cs2Details.response.games[0].playtime_forever! / 60
      ).toString() + "h"
    );
  };

  const infoStats: InfoDisplayProps[] = [
    {
      name: "Name",
      state: steamProfile.personaname,
    },
    {
      name: "Profile policy",
      state: getCommunityVisibilityState(steamProfile.communityvisibilitystate),
    },
    {
      name: "Profile state",
      state: getPersonalState(steamProfile.personastate),
    },
    {
      name: "Last online",
      state:
        steamProfile.lastlogoff === undefined
          ? "Unknown"
          : new Date(steamProfile.lastlogoff * 1000).toLocaleString(),
    },
    {
      name: "Account created",
      state:
        steamProfile.timecreated === undefined
          ? "Private"
          : new Date(steamProfile.timecreated * 1000).toLocaleString(),
    },
    {
      name: "CS2 playtime",
      state: getCS2Details(cs2Details),
    },
  ];

  return (
    <div className="flex flex-row gap-6 justify-center items-center flex-wrap">
      <a
        href={`https://steamcommunity.com/profiles/${steamProfile.steamid}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={steamProfile.avatarfull}
          alt={steamProfile.personaname}
          width={128}
          height={128}
          className="rounded-lg object-cover"
        />
      </a>
      <div className="flex flex-col text-left">
        {infoStats.map((info, index) => (
          <InfoDisplay key={index} name={info.name} state={info.state} />
        ))}
      </div>
    </div>
  );
};

export default SteamInfo;
