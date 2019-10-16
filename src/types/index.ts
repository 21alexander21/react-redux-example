import { User } from "./models";

export interface ReduxState {
  users: User[];
}

export interface RouteData {
  path?: string;
  component: React.ComponentType;
  menuLabel?: string;
}
