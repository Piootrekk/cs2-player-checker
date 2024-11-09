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

type TFaceitPlayerData = {
  results: TPlayer[];
  total_count: number;
};

type FaceitPlayerData = {
  payload: {
    offset: number;
    limit: number;
    players: TFaceitPlayerData;
  };
  time: number;
  env: "prod" | "dev";
  version: string;
};

type TGamesDetails = {
  region: string;
  game_player_id: string;
  skill_level_label: string;
  skill_level: number;
  faceit_elo: number;
  game_profile_id: string;
  game_player_name: string;
};

type TFaceitDataDetails = {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  conver_image: string;
  platforms: {
    steam: string;
  };
  games: {
    cs2?: TGamesDetails;
    csgo?: TGamesDetails;
  };
  settings: {
    language: string;
  };
  friends_ids: string[];
  memberships: string[];
  verified: boolean;
  activated_at: string;
};

export type {
  FaceitPlayerData,
  TPlayer,
  TGame,
  TFaceitPlayerData,
  TFaceitDataDetails,
  TGamesDetails,
};
