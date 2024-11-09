import { TError } from "@/components/ui/error-message";
import { AxiosError } from "axios";
import { ZodError } from "zod";

const transformErrorToDefault = (err: unknown): TError => {
  if (err instanceof AxiosError) {
    if (err.response) {
      return {
        status: err.response.status,
        message: err.response.data,
      };
    }
    if (err.request) {
      return {
        status: 500,
        message: "Internal server error",
      };
    }
    return {
      status: 500,
      message: "An unknown error occurred from fetching data",
    };
  }
  if (err instanceof ZodError) {
    return {
      status: 400,
      message: err.message,
    };
  }
  if (err instanceof Error) {
    return {
      status: 500,
      message: err.message,
    };
  }
  return {
    status: 500,
    message: "An unknown error occurred",
  };
};

export default transformErrorToDefault;
