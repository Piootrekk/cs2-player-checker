type TGame = {
  name: string;
  region?: string;
  skill_level: number;
};

type TFaceitPlayerData = {
  payload: {
    id: string;
    nickname: string;
    country: string;
    avatar: "";
    verification_level: number;
    games: TGame[];
  }[];
  offset: number;
  limit: number;
  total: number;
  has_more: false;
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

export type { TFaceitPlayerData, TGame, TFaceitDataDetails, TGamesDetails };
