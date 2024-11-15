type TCS2Game = {
  appid: number;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
  has_community_visible_stats: boolean;
  contend_descriptors: number[];
};

type TCS2Stats = {
  game_count: number;
  games: [Partial<TCS2Game>];
};

type TCS2Global = {
  response: Partial<TCS2Stats>;
};

export type { TCS2Game, TCS2Stats, TCS2Global };
