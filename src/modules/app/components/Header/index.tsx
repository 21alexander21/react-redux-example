import React from "react";
import MainMenu from "../MainMenu";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => (
  <AppBar position="relative">
    <Toolbar>
      <MainMenu />
    </Toolbar>
  </AppBar>
);

export default Header;
