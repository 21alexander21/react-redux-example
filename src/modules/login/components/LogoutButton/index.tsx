import React from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../../actionCreators";

const LogoutButton: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickCancel = () => {
    setOpen(false);
  };

  const handleClickAgree = () => {
    setOpen(false);
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} color="secondary">
        Выйти
      </Button>
      <Dialog open={open}>
        <DialogTitle>Вы действительно хотите выйти?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClickAgree} color="primary">
            Да
          </Button>
          <Button onClick={handleClickCancel} color="primary" autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default LogoutButton;
