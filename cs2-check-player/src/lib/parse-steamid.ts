const isCustomUrl = (url: string): boolean => {
  return url.includes("id");
};

const parseSteamIdFromUrl = (url: string): string => {
  const urlParts = url.split("/");
  const steamId = urlParts[urlParts.length - 1];
  return steamId;
};

const revalidateSteamUrl = (url: string): string => {
  if (!isNaN(Number(url))) return url;
  let correctedUrl = url;
  if (url.endsWith("/")) correctedUrl = correctedUrl.slice(0, -1);
  if (!url.startsWith("https://")) correctedUrl = `https://${correctedUrl}`;
  return correctedUrl;
};

export { isCustomUrl, parseSteamIdFromUrl, revalidateSteamUrl };
