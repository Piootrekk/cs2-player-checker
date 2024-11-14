type TPlayer = {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  commentpermission: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  realname: string;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
};

type TSteamProfile = {
  response: {
    players: TPlayer[];
  };
};

const getPersonalState = (state: number): string => {
  const personalState = [
    "Offline",
    "Online",
    "Busy",
    "Away",
    "Snooze",
    "Looking to trade",
    "Looking to play",
  ];
  if (state < 0 || state > 6) {
    return "Offline";
  }
  return personalState[state];
};

const getProfileState = (state: number): string => {
  return state === 1
    ? "Profile configured"
    : "Profile is not configured or not visible";
};

const getCommunityVisibilityState = (state: number): string => {
  return state === 3 ? "Public" : "Private";
};

const getCommentPermission = (state: number): string => {
  return state === 1 ? "Public to comment" : "Private to comment";
};

export type { TSteamProfile };
export {
  getPersonalState,
  getProfileState,
  getCommunityVisibilityState,
  getCommentPermission,
};
