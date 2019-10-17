import React from "react";
import Header from "../Header";
import { Switch, Route } from "react-router-dom";
import routes from "../../../../routes";
import { Container } from "@material-ui/core";

const App: React.FunctionComponent = () => (
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

export default App;
