import { TError } from "@/components/ui/error-message";
import axios from "axios";

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

type TResponse<T> =
  | {
      data: T;
      error?: never;
    }
  | {
      data?: never;
      error: TError;
    };

export { axiosInstance, axiosFaceitInstance };
export type { TResponse };
