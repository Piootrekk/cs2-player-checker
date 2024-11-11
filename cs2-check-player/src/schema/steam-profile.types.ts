type TSteamProfile = {
  response: {
    players: [
      {
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
      }
    ];
  };
};

const getPersonalState = (state: number) => {
  switch (state) {
    case 0:
      return "Offline";
    case 1:
      return "Online";
    case 2:
      return "Busy";
    case 3:
      return "Away";
    case 4:
      return "Snooze";
    case 5:
      return "Looking to trade";
    case 6:
      return "Looking to play";
    default:
      return "Offline";
  }
};

const getProfileState = (state: number) => {
  switch (state) {
    case 0:
      return "Profile is not configured or not visible";
    case 1:
      return "Profile is configured properly";
    default:
      return "Profile is not configured or not visible";
  }
};

const getCommunityVisibilityState = (state: number) => {
  switch (state) {
    case 1:
      return "Private";
    case 3:
      return "Public";
    default:
      return "Private";
  }
};

const getCommentPermission = (state: number) => {
  switch (state) {
    case 0:
      return "Private to comment";
    case 1:
      return "Public to comment";
    default:
      return "Private to comment";
  }
};

export type { TSteamProfile };
export {
  getPersonalState,
  getProfileState,
  getCommunityVisibilityState,
  getCommentPermission,
};
