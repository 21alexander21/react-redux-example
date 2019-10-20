import React from "react";
import {
  Container,
  Paper,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../../types";
import { User } from "../../../../types/models";
import { Nullable } from "../../../../types/utils";
import { getUserFullName } from "../../../../utils/user";
import Loader from "../Loader";
import { LogoutButton } from "../../../login";

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

  const getFullAddress = (
    location: User["location"]
  ) => `${location.postcode}, ${location.street.number},
  ${location.street.name}, ${location.city},
  ${location.state}, ${location.country}`;

  return (
    <Container maxWidth="lg">
      <Paper className={styles.root}>
        {userData && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h1">
                {getUserFullName(userData)}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
              <img
                alt={getUserFullName(userData)}
                src={userData.picture.large}
              />
            </Grid>
            <Grid item xs="auto">
              <List disablePadding>
                <ListItem>
                  <ListItemText
                    primary="Адрес: "
                    secondary={getFullAddress(userData.location)}
                    secondaryTypographyProps={{
                      component: "span",
                      variant: "h6",
                      color: "textPrimary"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Дата рождения: "
                    secondary={new Date(userData.dob.date).toLocaleDateString()}
                    secondaryTypographyProps={{
                      component: "span",
                      variant: "h6",
                      color: "textPrimary"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Дата регистрации: "
                    secondary={new Date(
                      userData.registered.date
                    ).toLocaleDateString()}
                    secondaryTypographyProps={{
                      component: "span",
                      variant: "h6",
                      color: "textPrimary"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Телефон: "
                    secondary={userData.phone}
                    secondaryTypographyProps={{
                      component: "span",
                      variant: "h6",
                      color: "textPrimary"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="E-mail: "
                    secondary={userData.email}
                    secondaryTypographyProps={{
                      component: "span",
                      variant: "h6",
                      color: "textPrimary"
                    }}
                  />
                </ListItem>
                <ListItem>
                  <LogoutButton />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        )}
        {loading && <Loader />}
      </Paper>
    </Container>
  );
};

export default ProfileCard;
