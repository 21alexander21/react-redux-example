import { User } from "./models";
import { Nullable } from "./utils";

interface UsersState {
  items: User[];
  loading: boolean;
  error: Nullable<string>;
}

interface LoginState {
  authorized: boolean;
  loading: boolean;
  error: Nullable<string>;
}
export interface ReduxState {
  users: UsersState;
  login: LoginState;
}

export interface RouteData {
  path?: string;
  component: React.ComponentType;
  menuLabel?: string;
}
