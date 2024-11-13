import transformErrorToDefault from "@/lib/error-setter";
import { axiosInstance, TResponse } from "./axios-settings";
import { SteamVanityResponse } from "@/schema/profile-vanity.types";
import { TSteamProfile } from "@/schema/steam-profile.types";
import { TPlayersBanned } from "@/schema/players-banned.types";

const steamApiKey = process.env.NEXT_PUBLIC_STEAM_API_KEY;
if (steamApiKey === undefined) {
  throw new Error("Missing Steam API Key");
}

const globalEndpoint = `https://api.steampowered.com/`;
const steamVanityEndponit = `${globalEndpoint}ISteamUser/ResolveVanityURL/v1/`;

const vanityCustomProfile = async (
  vanityUrl: string
): Promise<TResponse<SteamVanityResponse>> => {
  const params = new URLSearchParams({
    key: steamApiKey,
    vanityurl: vanityUrl,
  });
  const url = `${steamVanityEndponit}?${params.toString()}`;
  try {
    const response = await axiosInstance.get<SteamVanityResponse>(url);
    if (response.data.response.success === 42) {
      throw new Error(response.data.response.message);
    }
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

const playerInfoEndpoint = `${globalEndpoint}ISteamUser/GetPlayerSummaries/v2/`;

const playerSteamPorfile = async (
  steamid: string
): Promise<TResponse<TSteamProfile>> => {
  const params = new URLSearchParams({
    key: steamApiKey,
    steamids: steamid,
  });
  const url = `${playerInfoEndpoint}?${params.toString()}`;
  try {
    const response = await axiosInstance.get<TSteamProfile>(url);
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

const playerBannedEndpoint = `${globalEndpoint}ISteamUser/GetPlayerBans/v1/`;

const playerSteamBanned = async (
  steamid: string
): Promise<TResponse<TPlayersBanned>> => {
  const params = new URLSearchParams({
    key: steamApiKey,
    steamids: steamid,
  });
  const url = `${playerBannedEndpoint}?${params.toString()}`;
  try {
    const response = await axiosInstance.get<TPlayersBanned>(url);
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

export { vanityCustomProfile, playerSteamPorfile, playerSteamBanned };
