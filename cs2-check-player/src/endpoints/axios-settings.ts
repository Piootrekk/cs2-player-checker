import { TError } from "@/components/ui/error-message";
import axios from "axios";

type TResponse<T> = {
  data: T | undefined;
  error: TError | undefined;
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

export { axiosInstance, axiosFaceitInstance };
export type { TResponse };
