import { User } from "./models";
import { Nullable } from "./utils";

interface BaseModuleState {
  loading: boolean;
  error: Nullable<string>;
}

interface UsersState extends BaseModuleState {
  items: User[];
}

interface LoginState extends BaseModuleState {
  authorized: boolean;
}

interface ProfileState extends BaseModuleState {
  userData: Nullable<User>;
}

export interface ReduxState {
  users: UsersState;
  login: LoginState;
  profile: ProfileState;
}

export interface RouteData {
  path?: string;
  component: React.ComponentType;
  menuLabel?: string;
}
