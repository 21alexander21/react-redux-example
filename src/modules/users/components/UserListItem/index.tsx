import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography
} from "@material-ui/core";
import { User } from "../../../../types/models";
import { getUserFullName } from "../../../../utils/user";

interface Props {
  userData: User;
}

const UserListItem: React.FunctionComponent<Props> = ({ userData }) => {
  const fullName = getUserFullName(userData);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={fullName} src={userData.picture.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={fullName}
        secondary={
          <Typography variant="body2" color="textPrimary">
            {userData.location.postcode} {userData.location.street.name}{" "}
            {userData.location.state} {userData.location.city}{" "}
            {userData.location.country}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default UserListItem;
