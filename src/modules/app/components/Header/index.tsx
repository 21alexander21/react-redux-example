import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MainMenu from "../MainMenu";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MainMenu />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
