import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../../../types";
import { User } from "../../../../types/models";
import { Nullable } from "../../../../types/utils";
import { fetchUsers } from "../../actionCreators";
import { List, Divider } from "@material-ui/core";
import UserListItem from "../UserListItem";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector<ReduxState, User[]>(({ users }) => users.items);

  const loading = useSelector<ReduxState, boolean>(
    ({ users }) => users.loading
  );

  const error = useSelector<ReduxState, Nullable<string>>(
    ({ users }) => users.error
  );

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div>
        {loading && <p>loading</p>}
        {error && <p>{error}</p>}
      </div>
      <List>
        {users.map(item => (
          <React.Fragment key={item.login.uuid}>
            <UserListItem userData={item} />
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default UsersPage;
