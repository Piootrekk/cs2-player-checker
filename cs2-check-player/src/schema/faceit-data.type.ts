type TGame = {
  name: string;
  skill_level: number;
};

type TPlayer = {
  id: string;
  guid: string;
  nickname: string;
  status: string;
  games: TGame[];
  country: string;
  verified: boolean;
};

type FaceitPlayerData = {
  payload: {
    offset: number;
    limit: number;
    players: {
      results: TPlayer[];
      total_count: number;
    };
  };
  time: number;
  env: "prod" | "dev";
  version: string;
};

export type { FaceitPlayerData, TPlayer, TGame };
