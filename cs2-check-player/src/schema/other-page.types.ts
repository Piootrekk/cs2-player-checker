type TScopeGGResponse = {
  isRegistered: boolean;
  accountData: {
    steamAccountId: number;
    avatarUrl: string;
    username: string;
  };
};

export type { TScopeGGResponse };
