import React from "react";
import Header from "../Header";
import { Switch, Route } from "react-router-dom";
import routes from "../../../../routes";
import { Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../../../types";
import { fetchProfile, clearProfile } from "../../../profile";

const App: React.FunctionComponent = () => {
  const authorized = useSelector<ReduxState, boolean>(
    ({ login }) => login.authorized
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (authorized) {
      dispatch(fetchProfile());
    } else {
      dispatch(clearProfile());
    }
  }, [dispatch, authorized]);

  return (
    <main>
      <Header />
      <Container>
        <Switch>
          {routes.map(({ path, component }, index) => (
            <Route key={index} path={path} exact={!!path}>
              {React.createElement(component)}
            </Route>
          ))}
        </Switch>
      </Container>
    </main>
  );
};

export default App;
