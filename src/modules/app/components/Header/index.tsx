import React from "react";
import MainMenu from "../MainMenu";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import { ProfileThumbnail } from "../../../profile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuContainer: {
      padding: theme.spacing(3),
      flexGrow: 1
    }
  })
);

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <div className={styles.menuContainer}>
          <MainMenu />
        </div>
        <ProfileThumbnail />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
