import { FaceitPlayerData } from "@/schema/faceit-data.type";
import { TError } from "@/components/ui/error-message";
import { axiosInstance, TResponse } from "./axios-settings";
import { AxiosError } from "axios";
import { TPlayer } from "@/schema/faceit-data.type";

const faceitEndpoint = "https://www.faceit.com/api/search/v1/";
const openFaceitEndpoint = "https://open.faceit.com/data/v4/";

const getPlayerFaceitBySteamId = async (
  steamId: string
): Promise<TResponse<TPlayer[]>> => {
  try {
    const params = new URLSearchParams({
      limit: "10",
      offset: "0",
      query: steamId,
    });
    const url = `${faceitEndpoint}?${params.toString()}`;
    const response = await axiosInstance.get<FaceitPlayerData>(url);
    return {
      data: response.data.payload.players.results,
      error: undefined,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      const axError = {
        status: error.response?.status,
        message: error.message,
      };
      return {
        error: axError,
        data: undefined,
      };
    }
    const genError: TError = {
      status: 500,
      message: "Internal server error",
    };
    return {
      error: genError,
      data: undefined,
    };
  }
};

export { getPlayerFaceitBySteamId };
