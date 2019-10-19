import React from "react";
import {
  Container,
  Paper,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../../types";
import { User } from "../../../../types/models";
import { Nullable } from "../../../../types/utils";
import { getUserFullName } from "../../../../utils/user";
import Loader from "../Loader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      padding: theme.spacing(3, 2),
      minHeight: 200
    }
  })
);

const ProfileCard: React.FunctionComponent = () => {
  const styles = useStyles();
  const userData = useSelector<ReduxState, Nullable<User>>(
    ({ profile }) => profile.userData
  );
  const loading = useSelector<ReduxState, boolean>(
    ({ profile }) => profile.loading
  );

  return (
    <Container maxWidth="lg">
      <Paper className={styles.root}>
        {userData && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1">{getUserFullName(userData)}</Typography>
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
              <img
                alt={getUserFullName(userData)}
                src={userData.picture.large}
              />
            </Grid>
            <Grid item xs="auto">
              <Typography component="p">
                <Typography variant="subtitle1" component="span">
                  Адрес:
                </Typography>{" "}
                {userData.location.postcode}, {userData.location.street.number}
                {", "}
                {userData.location.street.name}, {userData.location.city}
                {", "}
                {userData.location.state}, {userData.location.country}
              </Typography>
              <Typography component="p">
                <Typography variant="subtitle1" component="span">
                  Дата рождения:
                </Typography>{" "}
                {new Date(userData.dob.date).toLocaleDateString()}
              </Typography>
              <Typography component="p">
                <Typography variant="subtitle1" component="span">
                  Дата регистрации:
                </Typography>{" "}
                {new Date(userData.registered.date).toLocaleDateString()}
              </Typography>
              <Typography component="p">
                <Typography variant="subtitle1" component="span">
                  Телефон:
                </Typography>{" "}
                {userData.phone}
              </Typography>
              <Typography component="p">
                <Typography variant="subtitle1" component="span">
                  E-mail:
                </Typography>{" "}
                {userData.email}
              </Typography>
            </Grid>
          </Grid>
        )}
        {loading && <Loader />}
      </Paper>
    </Container>
  );
};

export default ProfileCard;
