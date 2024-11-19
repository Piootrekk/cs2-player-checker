type TEsportalResponse =
  | [
      {
        id: string;
        avatar_hash: string;
        username: string;
        online: number;
        flags: number;
      }
    ]
  | null;
export type { TEsportalResponse };
