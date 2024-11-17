import { Card } from "@/components/ui/card";
import { TCS2Global } from "@/schema/playtime-cs2.types";
import { TPlayer } from "@/schema/steam-profile.types";
import {
  getCommunityVisibilityState,
  getPersonalState,
} from "@/schema/steam-profile.types";
import {
  Calendar,
  Clock,
  ExternalLinkIcon,
  Gamepad,
  Shield,
} from "lucide-react";
import Image from "next/image";

type SteamCardProps = {
  steamProfile: TPlayer;
  cs2Details: TCS2Global;
};

const SteamCard: React.FC<SteamCardProps> = ({ steamProfile, cs2Details }) => {
  const getCS2Details = (cs2Details: TCS2Global) => {
    if (cs2Details.response.game_count === 0) return "no CS2";
    if (!cs2Details.response.games) return "Private";
    if (cs2Details.response.games[0].playtime_forever === 0)
      return "Private games";
    return (
      Math.round(
        cs2Details.response.games[0].playtime_forever! / 60
      ).toString() + " hours"
    );
  };

  const infoStats = [
    {
      label: "Profile Status",
      value: `${getCommunityVisibilityState(
        steamProfile.communityvisibilitystate
      )} • ${getPersonalState(steamProfile.personastate)}`,
      icon: Shield,
    },
    {
      label: "Last Online",
      value: steamProfile.lastlogoff
        ? new Date(steamProfile.lastlogoff * 1000).toLocaleString()
        : "Unknown",
      icon: Clock,
    },
    {
      label: "Account Created",
      value: steamProfile.timecreated
        ? new Date(steamProfile.timecreated * 1000).toLocaleString()
        : "Unknown",
      icon: Calendar,
    },
    {
      label: "CS2 Hours",
      value: getCS2Details(cs2Details),
      icon: Gamepad,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Steam Account
        <span className="ml-2 text-sm text-muted-foreground">
          Base Information
        </span>
      </h2>
      <Card className="overflow-hidden backdrop-blur-sm bg-primary/5 border-none ">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src={steamProfile.avatarfull}
              alt={steamProfile.personaname}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <div>
                <h2 className="text-2xl font-bold">
                  <a
                    href={`https://steamcommunity.com/profiles/${steamProfile.steamid}`}
                    target="_blank"
                    rel="noreferrer"
                    className=" flex flex-row items-center gap-1"
                  >
                    {steamProfile.personaname}
                    <ExternalLinkIcon className="w-5 h-5 mt-1" />
                  </a>
                </h2>
              </div>
              <p className="text-muted-foreground">Steam Profile</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infoStats.map((detail, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <detail.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="font-medium">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SteamCard;
