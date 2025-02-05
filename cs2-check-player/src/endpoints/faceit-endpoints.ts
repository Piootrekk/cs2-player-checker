import { axiosFaceitInstance, TResponse } from "./axios-settings";
import transformErrorToDefault from "@/lib/error-setter";

const openFaceitEndpoint = "https://open.faceit.com/data/v4/players";

const getPlayerFaceitStats = async (
  steamId: string,
  game: string = "cs2"
): Promise<TResponse<TFaceitEndpointResponse>> => {
  try {
    const url = new URL(openFaceitEndpoint);
    const params = new URLSearchParams({
      game: game,
      game_player_id: steamId,
    });
    url.search = params.toString();
    const response = await axiosFaceitInstance.get<TFaceitEndpointResponse>(
      url.href
    );
    console.log(response);
    return {
      data: response.data,
      error: undefined,
    };
  } catch (error) {
    const err = transformErrorToDefault(error);
    return {
      data: undefined,
      error: err,
    };
  }
};

type TFaceitEndpointResponse = {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  cover_image: string;
  platforms: {
    steam: string;
  };
  games: {
    cs2: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: {};
      game_profile_id: string;
    };
    csgo: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      regions: {};
      game_profile_id: string;
    };
  };
  settings: {
    language: string;
  };
  friends_ids: string[];
  new_steam_id: string;
  steam_id_64: string;
  steam_nickname: string;
  memberships: string[];
  faceit_url: string;
  membership_type: string;
  cover_featured_image: string;
  infractions: {};
  verified: boolean;
  activated_at: string;
};

export { getPlayerFaceitStats };
export type { TFaceitEndpointResponse };
