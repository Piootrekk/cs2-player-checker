import { TError } from "@/components/ui/error-message";
import axios from "axios";

type TResponse<T> =
  | {
      data: T;
      error?: never;
    }
  | {
      data?: never;
      error: TError;
    };

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const getFaceitApiKey = (): string => {
  const faceitApiKey = process.env.NEXT_PUBLIC_FACEIT_API;
  if (faceitApiKey === undefined) {
    throw new Error("Missing Faceit API Key");
  }
  return faceitApiKey;
};

const axiosFaceitInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getFaceitApiKey()}`,
  },
});

const axiosEsportalInstance = axios.create({
  withCredentials: true,
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "pl-PL,pl;q=0.9",
    "cache-control": "max-age=0",
    priority: "u=0, i",
    "sec-ch-ua":
      '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "referrer-policy": "strict-origin-when-cross-origin",
    cookie:
      "__cf_bm=wGb1waYxME.eyqQYNLdBq.A0WozHEQw7iPEvi6M8b_A-1732049391-1.0.1.1-OpsaSW4OyUQtlYVILUWW4FhUY2.r8FA5YitjA1sHYOtzilCay1hKl90_iVWdppKHKQz4O6N57clNXvwnEpV0KQ",
  },
});

export { axiosInstance, axiosFaceitInstance, axiosEsportalInstance };
export type { TResponse };
