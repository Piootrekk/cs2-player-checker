type SteamVanityResponse = {
  response:
    | {
        steamid: string;
        message?: never;
        success: number;
      }
    | {
        steamid?: never;
        message: string;
        success: number;
      };
};

export type { SteamVanityResponse };
