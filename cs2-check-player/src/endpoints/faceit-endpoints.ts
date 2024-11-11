import {
  FaceitPlayerData,
  TFaceitDataDetails,
  TFaceitPlayerData,
} from "@/schema/faceit-data.types";
import {
  axiosInstance,
  axiosFaceitInstance,
  TResponse,
} from "./axios-settings";
import transformErrorToDefault from "@/lib/error-setter";

const faceitEndpoint = "https://www.faceit.com/api/search/v1/";
const openFaceitEndpoint = "https://open.faceit.com/data/v4/";

const getPlayerFaceitBySteamId = async (
  steamId: string
): Promise<TResponse<TFaceitPlayerData>> => {
  try {
    const params = new URLSearchParams({
      limit: "10",
      offset: "0",
      query: steamId,
    });
    const url = `${faceitEndpoint}?${params.toString()}`;
    const response = await axiosInstance.get<FaceitPlayerData>(url);
    return {
      data: response.data.payload.players,
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

const getPlayerStatsByName = async (
  nickname: string
): Promise<TResponse<TFaceitDataDetails>> => {
  try {
    const params = new URLSearchParams({
      nickname,
    });
    const url = `${openFaceitEndpoint}/players?${params.toString()}`;
    const response = await axiosFaceitInstance.get<TFaceitDataDetails>(url);
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

export { getPlayerFaceitBySteamId, getPlayerStatsByName };
