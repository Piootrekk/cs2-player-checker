type TPlayersBanned = {
  players: TPlayerBanned[];
};

type TPlayerBanned = {
  SteamId: string;
  CommunityBanned: boolean;
  VACBanned: boolean;
  NumberOfVACBans: number;
  DaysSinceLastBan: number;
  NumberOfGameBans: number;
  EconomyBan: string;
};

export type { TPlayersBanned };
