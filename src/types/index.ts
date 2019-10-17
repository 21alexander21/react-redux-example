import { User } from "./models";
import { Nullable } from "./utils";

interface UsersState {
  items: User[];
  loading: boolean;
  error: Nullable<string>;
}
export interface ReduxState {
  users: UsersState;
}

export interface RouteData {
  path?: string;
  component: React.ComponentType;
  menuLabel?: string;
}
