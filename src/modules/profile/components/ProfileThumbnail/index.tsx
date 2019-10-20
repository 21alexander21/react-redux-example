import React from "react";
import { Avatar } from "@material-ui/core";
import { ReduxState } from "../../../../types";
import { useSelector } from "react-redux";
import { Nullable } from "../../../../types/utils";
import { User } from "../../../../types/models";

const ProfileThumbnail = () => {
  const userData = useSelector<ReduxState, Nullable<User>>(
    ({ profile }) => profile.userData
  );

  if (userData) {
    return <Avatar src={userData.picture.medium} />;
  }

  return null;
};

export default ProfileThumbnail;
