import React from "react";
import {
  Paper,
  Container,
  Grid,
  Theme,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actionCreators";
import { ReduxState } from "../../../../types";
import { Nullable } from "../../../../types/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
);

const LoginForm: React.FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { loading, error } = useSelector<
    ReduxState,
    {
      loading: boolean;
      error: Nullable<string>;
    }
  >(({ login }) => login);

  const handleSubmitForm: React.FormEventHandler<
    HTMLFormElement
  > = React.useCallback(
    event => {
      event.preventDefault();

      const username = event.currentTarget.elements.namedItem("username");
      const password = event.currentTarget.elements.namedItem("password");
      const rememberMe = event.currentTarget.elements.namedItem("rememberMe");

      if (
        username instanceof HTMLInputElement &&
        password instanceof HTMLInputElement &&
        rememberMe instanceof HTMLInputElement
      ) {
        dispatch(login(username.value, password.value, rememberMe.checked));
      }
    },
    [dispatch]
  );

  return (
    <Container maxWidth="xs">
      <Paper className={styles.root}>
        <Box component="form" onSubmit={handleSubmitForm}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                name="username"
                fullWidth
                variant="outlined"
                label="Имя пользователя"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                fullWidth
                variant="outlined"
                label="Пароль"
                type="password"
                helperText={error}
                FormHelperTextProps={{ error: !!error }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="rememberMe" />}
                label="Запомнить меня"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                color="primary"
              >
                Войти
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
