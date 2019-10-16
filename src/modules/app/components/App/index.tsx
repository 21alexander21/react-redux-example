import React from "react";
import styles from "./styles.module.css";
import Header from "../Header";
import { Switch, Route } from "react-router-dom";
import routes from "../../../../routes";
import { Grid } from "@material-ui/core";

const App: React.FunctionComponent = () => (
  <main className={styles.container}>
    <Header />
    <Grid container spacing={8}>
      <Switch>
        {routes.map(({ path, component }, index) => (
          <Route key={index} path={path} exact={!!path}>
            {React.createElement(component)}
          </Route>
        ))}
      </Switch>
    </Grid>
  </main>
);

export default App;
