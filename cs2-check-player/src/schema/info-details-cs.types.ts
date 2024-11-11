type TCS2Details = {
  response: {
    game_count: number;
    games: [
      {
        appid: number;
        name: string;
        playtime_forever: number;
        img_icon_url: string;
        has_community_visible_stats: boolean;
        contend_descriptors: number[];
      }
    ];
  };
};

type TCS2AdvancedDetails = {
  playersstats: {
    steamID: string;
    gameName: string;
    stats: TStats[];
    achievements: TAchievements[];
  };
};

type TStats = {
  name: string;
  value: number;
};

type TAchievements = {
  name: string;
  achieved: number;
};

export type { TCS2Details, TCS2AdvancedDetails };
