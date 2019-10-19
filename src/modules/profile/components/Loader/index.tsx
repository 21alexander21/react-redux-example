import React from "react";
import {
  CircularProgress,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      minWidth: theme.spacing(1),
      minHeight: theme.spacing(1),
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: theme.palette.background.paper,
      opacity: 0.6
    }
  })
);

const Loader: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.overlay} />
      <CircularProgress />
    </div>
  );
};

export default Loader;
