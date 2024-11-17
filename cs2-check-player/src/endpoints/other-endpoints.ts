import { convertToSteamID3 } from "@/lib/parse-steamid";
import { axiosInstance } from "./axios-settings";
import { TScopeGGResponse } from "@/schema/other-page.types";
import { TResponse } from "./axios-settings";
import transformErrorToDefault from "@/lib/error-setter";

const scopeGGAccount = async (
  steamid: string
): Promise<TResponse<TScopeGGResponse>> => {
  const steamid3 = convertToSteamID3(steamid);
  const url = `https://app.scope.gg/api/accounts/whoIsIt`;
  try {
    const res = await axiosInstance.post<TScopeGGResponse>(url, {
      steamAccountId: steamid3,
    });
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

export { scopeGGAccount };
