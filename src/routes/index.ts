import { RouteData } from "../types";
import { LoginPage } from "../modules/login";
import { MainPage } from "../modules/app";
import { UsersPage } from "../modules/users";
import { ProfilePage } from "../modules/profile";

const routes: RouteData[] = [
  { path: "/", component: MainPage, menuLabel: "Главная" },
  { path: "/users", component: UsersPage, menuLabel: "Пользователи" },
  { path: "/profile", component: ProfilePage, menuLabel: "Профиль" },
  { path: "/login", component: LoginPage },
  { component: MainPage }
];

export default routes;
