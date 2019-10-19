import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../../types";

const ProfilePage: React.FunctionComponent = () => {
  const authorized = useSelector<ReduxState, boolean>(
    ({ login }) => login.authorized
  );

  if (!authorized) {
    return <Redirect to={"/login"} />;
  }

  return <p>Profile Page</p>;
};

export default ProfilePage;
