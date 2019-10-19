import React from "react";
import LoginForm from "../LoginForm";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../../types";
import { Redirect } from "react-router-dom";

const LoginPage: React.FunctionComponent = () => {
  const authorized = useSelector<ReduxState, boolean>(
    ({ login }) => login.authorized
  );

  if (authorized) {
    return <Redirect to={"/profile"} />;
  }

  return <LoginForm />;
};

export default LoginPage;
