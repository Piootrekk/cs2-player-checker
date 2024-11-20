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
    cookie:
      "__cf_bm=wGb1waYxME.eyqQYNLdBq.A0WozHEQw7iPEvi6M8b_A-1732049391-1.0.1.1-OpsaSW4OyUQtlYVILUWW4FhUY2.r8FA5YitjA1sHYOtzilCay1hKl90_iVWdppKHKQz4O6N57clNXvwnEpV0KQ",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  },
});

export { axiosInstance, axiosFaceitInstance, axiosEsportalInstance };
export type { TResponse };
