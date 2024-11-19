import { TEsportalResponse } from "@/schema/esportal-response.types";
import { axiosEsportalInstance, TResponse } from "./axios-settings";
import { convertToSteamID3 } from "@/lib/parse-steamid";
import transformErrorToDefault from "@/lib/error-setter";

const getEsportalAccount = async (
  steamid: string
): Promise<TResponse<TEsportalResponse>> => {
  const steamid3 = convertToSteamID3(steamid);

  const url = `https://esportal.com/api/user_profile/list?id=${steamid3}`;
  try {
    const res = await axiosEsportalInstance.get<TEsportalResponse>(url);
    return {
      data: res.data,
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

export { getEsportalAccount };
