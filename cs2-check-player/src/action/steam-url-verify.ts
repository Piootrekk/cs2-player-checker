"use server";

import steamLinkSchema from "../schema/steam-url-schema";
import { vanityCustomProfile } from "@/endpoints/steam-endpoints";
import {
  isCustomUrl,
  parseSteamIdFromUrl,
  revalidateSteamUrl,
} from "@/lib/parse-steamid";

import { redirect } from "next/navigation";

const validateSteamUrlForm = async (_: unknown, formData: FormData) => {
  let steamUrl = formData.get("steamUrl") as string;
  if (!steamUrl) return { error: "Steam URL is required" };
  steamUrl = revalidateSteamUrl(steamUrl);
  const parsedSteamUrl = steamLinkSchema.safeParse(steamUrl);
  if (!parsedSteamUrl.success) {
    return { error: "Unsuccess in validation", input: steamUrl };
  }
  const steamId = parseSteamIdFromUrl(steamUrl);
  if (!isCustomUrl(steamUrl)) redirect(`/${steamId}`);
  const response = await vanityCustomProfile(steamId);
  if (response.error) {
    return { error: response.error.message, input: steamUrl };
  }
  redirect(`/${response.data.response.steamid}`);
};

export default validateSteamUrlForm;
