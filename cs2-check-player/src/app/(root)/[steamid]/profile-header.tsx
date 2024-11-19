import React from "react";

type ProfileHeaderProps = {
  steamid: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ steamid }) => {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        Profile Checked
      </h1>
      <p className="text-muted-foreground font-medium">
        Profile found for steamid: {steamid}
      </p>
    </div>
  );
};

export default ProfileHeader;
