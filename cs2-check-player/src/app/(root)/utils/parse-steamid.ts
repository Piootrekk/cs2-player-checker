const isCustomUrl = (url: string): boolean => {
  return url.includes("id");
};

const parseSteamIdFromUrl = (url: string): string => {
  const urlParts = url.split("/");
  const steamId = urlParts[urlParts.length - 1];
  return steamId;
};

export { isCustomUrl, parseSteamIdFromUrl };
