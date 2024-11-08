import { axiosInstance } from "./axios-settings";

const steamApiKey = process.env.NEXT_PUBLIC_STEAM_API_KEY;
if (steamApiKey === undefined) {
  throw new Error("Missing Steam API Key");
}

type SteamVanityResponse = {
  response: {
    steamid: string;
    success: number;
  };
};

const steamVanityEndponit = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/`;

const vanityCustomProfile = async (vanityUrl: string) => {
  const params = new URLSearchParams({
    key: steamApiKey,
    vanityurl: vanityUrl,
  });
  const url = `${steamVanityEndponit}?${params.toString()}`;
  const response = await axiosInstance.get<SteamVanityResponse>(url);
  return response.data.response;
};

export { vanityCustomProfile };
